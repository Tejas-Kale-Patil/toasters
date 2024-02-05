/** @format */

import React, { useRef, useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Pagination from "react-js-pagination";

function Component3() {
    const [toastNum, setToastNUm] = useState(1);
    const [duration, setDuration] = useState("");
    const [apiData, setApiData] = useState("");
    const [loading, setLoading] = useState(false);
    const [activePage, setActivePage] = useState(1);

    const [itemsPerPage] = useState(5);
    let intervalRef = useRef(null);

    const indexOfLastItem = activePage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = apiData.slice(indexOfFirstItem, indexOfLastItem);

    const startTimer = () => {
        const interval = setInterval(() => {
            if (intervalRef.current === 0) {
                clearInterval(interval);
            } else {
                intervalRef.current = intervalRef.current - 1;
            }
        }, 1000);
    };

    const getApiData = async () => {
        setLoading(true);
        await fetch("https://api.knowmee.co/api/v1/master/get-country-list")
            .then((res) => res.json())
            .then((data) => setApiData(data.responseData))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    };

    const getToast = () => {
        if (duration === "") {
            alert("Please Enter Time");
        } else {
            intervalRef.current = +duration;
            setToastNUm((prev) => prev + 1);
            startTimer();
            toast.success(`${intervalRef.current}:${toastNum}`, {
                position: "bottom-center",
                autoClose: duration * 1000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
                onClose: getApiData,
            });
        }
    };

    return (
        <>
            {loading === false && apiData === "" ? (
                <div className="p-5">
                    <div>
                        <label htmlFor="toastMsg">Enter Countdown Time</label>{" "}
                        <br />
                        <input
                            id="toastMsg"
                            type="number"
                            className="my-3"
                            placeholder="Enter here"
                            value={duration}
                            onChange={(e) => setDuration(e.target.value)}
                        />{" "}
                        <br />
                        <button
                            className="btn btn-dreams text-white"
                            disabled={intervalRef.current ? true : false}
                            onClick={getToast}
                        >
                            Set Timer
                        </button>
                    </div>

                    <ToastContainer
                        position="bottom-center"
                        autoClose={duration * 1000}
                        limit={3}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="colored"
                    />
                </div>
            ) : apiData === "" ? (
                <h1 className="p-5">Fetching Data, Please wait...</h1>
            ) : (
                <div className="p-5 d-flex justify-content-between ">
                    <div>
                        {currentItems.map((item, i) => (
                            <p key={i}>{item.country_name}</p>
                        ))}
                    </div>
                    <div>
                        <Pagination
                            activePage={activePage}
                            itemsCountPerPage={itemsPerPage}
                            totalItemsCount={apiData.length}
                            pageRangeDisplayed={1}
                            activeClass="d-none"
                            onChange={setActivePage}
                            itemClass="text-decoration-none text-white"
                            itemClassPrev="btn btn-info mx-1 text-decoration-none"
                            itemClassNext="btn btn-info mx-1 text-decoration-none"
                            prevPageText="Previous"
                            nextPageText="Next"
                            itemClassFirst="d-none"
                            itemClassLast="d-none"
                        />
                    </div>
                </div>
            )}
        </>
    );
}

export default Component3;
