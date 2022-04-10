import Label from "./Label";
export default function VisiblePost({
    maker,
    title,
    content,
    hash,
    id,
    paid,
    post_date,
    reveal_date,
}) {
    return (
        <div className="drop-shadow-xl p-4 m-5 rounded-3xl bg-slate-200 w-2/3 content-center justify-center">
            <Label type={paid ? "paid" : "revealed"}></Label>
            <h2 className="text-3xl text-center font-bold">{title}</h2>
            <div>
                <p className="font-bold">
                    maker: <span>{maker}</span>
                </p>
            </div>
            <div className="pb-3">
                hash:{" "}
                <span className="bg-cyan-400 break-words p-0.5 rounded-md">
                    {hash}
                </span>
            </div>
            <p>post time: {new Date(post_date).toLocaleString()}</p>
            <p>reveal time: {new Date(reveal_date).toLocaleString()}</p>
            <div className="mt-2 w-full border-t border-gray-400"></div>
            <p className="mt-2">&emsp;&emsp;{content}</p>
        </div>
    );
}
