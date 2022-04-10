import { useState, useEffect } from "react";
import Label from "./Label";

export default function HiddenPost({
    maker,
    title,
    content,
    hash,
    id,
    paid,
    post_date,
    reveal_date,
    fetchPosts,
    setModalIsOpen,
}) {
    function pay_post() {
        setModalIsOpen(true);
        fetch("http://127.0.0.1:5000/pay", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                id: id,
                username: "sean",
            }), // body data type must match "Content-Type" header
        }).then(fetchPosts);
        setTimeout(() => {
            setModalIsOpen(false);
        }, 1000);
    }

    return (
        <div className="drop-shadow-xl m-4 rounded-lg bg-slate-200 p-2 w-2/3 content-center justify-center">
            <Label type="hidden"></Label>
            <h2 className="text-3xl text-center font-bold">{title}</h2>
            <p>maker: {maker}</p>
            <div>
                hash:{" "}
                <span className="bg-cyan-400 break-words p-0.5 rounded-md">
                    {hash}
                </span>
            </div>
            <p></p>

            <p>post time: {new Date(post_date).toLocaleString()}</p>
            <p>reveal time: {new Date(reveal_date).toLocaleString()}</p>
            <div className="flex justify-center">
                {" "}
                <button
                    className="bg-blue-500 hover:bg-blue-700 p-2 rounded-lg"
                    onClick={pay_post}
                >
                    <span className="text-stone-100 font-semibold">
                        pay to unlock
                    </span>
                </button>
            </div>
        </div>
    );
}
