import Modal from "react-modal";
import { useState } from "react";

export default function LoginModal({
    setUsername,
    loginModalIsOpen,
    setLoginModalIsOpen,
}) {
    const [localname, setLocalname] = useState("");
    return (
        <Modal
            isOpen={loginModalIsOpen}
            onAfterOpen={() => {}}
            ariaHideApp={false}
            contentLabel="Example Modal"
            style={{
                overlay: {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(255, 255, 255, 0.75)",
                },
                content: {
                    position: "absolute",
                    top: "25%",
                    left: "25%",
                    border: "1px solid #ccc",
                    background: "#fff",
                    overflow: "auto",
                    WebkitOverflowScrolling: "touch",
                    borderRadius: "4px",
                    outline: "none",
                    padding: "20px",
                    width: "50%",
                    height: "50%",
                },
            }}
        >
            <button
                onClick={() => {
                    setLoginModalIsOpen(false);
                }}
                className="absolute top-4 right-6 text-3xl"
            >
                X
            </button>
            <div className="mb-4 flex h-3/4 justify-center items-center">
                <div className="">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Username
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Username"
                        onChange={(e) => {
                            setLocalname(e.target.value);
                        }}
                    ></input>
                    <div className="flex justify-center">
                        <button
                            onClick={() => {
                                if (localname != "") {
                                    setUsername(localname);
                                    setLoginModalIsOpen(false);
                                }
                            }}
                            className="m-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    );
}
