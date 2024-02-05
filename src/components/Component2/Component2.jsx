/** @format */

import React, { useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoSettings } from "react-icons/io5";
import { Button, Modal } from "react-bootstrap";

function Component2() {
    const [show, setShow] = useState(false);
    const [toastNum, setToastNUm] = useState(1);
    const [duration, setDuration] = useState(7);
    const [msg, setMsg] = useState("");

    const handleClose = () => setShow(false);

    const getToast = () => {
        setToastNUm((prev) => prev + 1);
        const message = `Testing ${toastNum}`;
        console.log(duration);
        toast.success(msg || message, {
            position: "bottom-center",
            autoClose: duration * 1000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
        });
        setMsg("");
    };

    return (
        <div className="p-5">
            <Modal centered show={show} onHide={handleClose}>
                <Modal.Header closeButton></Modal.Header>
                <form className="d-flex">
                    <div className="row justify-content-center p-4">
                        <label
                            htmlFor="inputPassword"
                            className="col-sm-6 col-form-label text-end"
                        >
                            Set Timeout :
                        </label>
                        <div className="col-sm-6">
                            <input
                                type="number"
                                name="duration"
                                className="form-control"
                                value={duration}
                                onChange={(e) => setDuration(e.target.value)}
                            />
                        </div>
                        <Button
                            variant="secondary"
                            className="mt-2"
                            style={{ width: "max-content" }}
                            onClick={handleClose}
                        >
                            Confirm
                        </Button>
                    </div>
                </form>
            </Modal>
            <div>
                <label htmlFor="toastMsg">Enter Custom Toast Text</label>
                <button
                    className="btn btn-secondary mx-4 my-0 px-2"
                    onClick={() => setShow(true)}
                >
                    <IoSettings />
                </button>
                <br />
                <input
                    id="toastMsg"
                    type="text"
                    className="my-3"
                    value={msg}
                    placeholder="Enter here"
                    onChange={(e) => setMsg(e.target.value)}
                />{" "}
                <br />
                <button
                    className="btn btn-dreams text-white"
                    onClick={getToast}
                >
                    Show Toast Message
                </button>
            </div>

            <ToastContainer
                position="bottom-center"
                autoClose={5000}
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
    );
}

export default Component2;
