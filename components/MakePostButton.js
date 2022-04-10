import Modal from "react-modal";
import { useState, useEffect } from "react";

export default function MakePostButton({ fetchPosts }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [paid, setPaid] = useState(false);
    const [error, setError] = useState(false);

    function submit() {
        console.log("submitted");
        console.log(title);
        console.log(content);
        console.log(days);
        console.log(hours);
        console.log(minutes);
        console.log(paid);
        // validate input or have error
        if (
            title.length < 1 ||
            content.length < 1 ||
            days < 0 ||
            hours < 0 ||
            minutes < 0
        ) {
            setError(true);
            return;
        }
        const time = new Date(
            Date.now() +
                (days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60) * 1000
        )
            .toISOString()
            .slice(0, 19)
            .replace("T", " ");

        fetch("http://127.0.0.1:5000/post", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                title: title,
                content: content,
                maker: "sean",
                reveal_date: time,
            }), // body data type must match "Content-Type" header
        })
            .then(fetchPosts)
            .then(() => {
                setModalIsOpen(false);
            });
    }

    return (
        <div>
            <Modal isOpen={modalIsOpen} ariaHideApp={false}>
                <button
                    onClick={() => {
                        setModalIsOpen(false);
                    }}
                    className="absolute top-4 right-6 text-3xl"
                >
                    X
                </button>
                <h2 className="text-center text-xl">Make prediction</h2>
                <div className="flex justify-center">
                    <div className="md:w-10/12 m-2">
                        <div className="flex items-center">
                            <div className="flex-1">
                                <label className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4 m-2">
                                    Title
                                </label>
                                <div className="w-full m-2">
                                    <input
                                        className="w-30 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                        id="inline-full-name"
                                        type="text"
                                        onChange={(e) =>
                                            setTitle(e.target.value)
                                        }
                                    ></input>
                                </div>
                            </div>
                        </div>
                        <div className="m-2 flex-1">
                            <label
                                className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4 m-2"
                                htmlFor="inline-full-name"
                            >
                                Reveal time from post
                            </label>
                            <span>
                                <span className="m-2">
                                    <input
                                        type="number"
                                        min="0"
                                        className="
                                            form-control
                                            px-3
                                            py-1.5
                                            text-base
                                            font-normal
                                            text-gray-700
                                            bg-white bg-clip-padding
                                            border border-solid border-gray-300
                                            rounded
                                            transition
                                            ease-in-out
                                            m-2
                                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                        "
                                        onChange={(e) =>
                                            setDays(e.target.value)
                                        }
                                    ></input>
                                    days
                                </span>
                                <span className="m-2">
                                    <input
                                        type="number"
                                        onChange={(e) =>
                                            setHours(e.target.value)
                                        }
                                        min="0"
                                        className="
                                            form-control
                                            bg-gray-200
                                            px-3
                                            py-1.5
                                            text-base
                                            font-normal
                                            text-gray-700
                                            bg-white bg-clip-padding
                                            border border-solid border-gray-300
                                            rounded
                                            transition
                                            ease-in-out
                                            m-2
                                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                        "
                                    ></input>
                                    hours
                                </span>
                                <span className="m-2">
                                    <input
                                        type="number"
                                        onChange={(e) =>
                                            setMinutes(e.target.value)
                                        }
                                        min="0"
                                        className="
                                            form-control
                                            bg-gray-200
                                            px-3
                                            py-1.5
                                            text-base
                                            font-normal
                                            text-gray-700
                                            bg-white bg-clip-padding
                                            border border-solid border-gray-300
                                            rounded
                                            transition
                                            ease-in-out
                                            m-2
                                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                        "
                                    ></input>
                                    minutes
                                </span>
                            </span>
                        </div>

                        <div className="m-2 my-4">
                            <label className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4">
                                Content
                            </label>
                            <textarea
                                onChange={(e) => setContent(e.target.value)}
                                className="
                                    form-control
                                    block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                "
                                id="exampleFormControlTextarea1"
                                rows="3"
                                placeholder="Your message"
                            ></textarea>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button
                        onClick={submit}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        submit
                    </button>
                </div>
                {error && (
                    <div className="flex justify-center p-2">
                        <p class="text-red-500 text-xs italic">Invalid input</p>
                    </div>
                )}
            </Modal>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={() => setModalIsOpen(true)}
            >
                Make prediction
            </button>
        </div>
    );
}
