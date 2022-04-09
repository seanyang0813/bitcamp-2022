export default function HiddenPost({
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
        <div className="drop-shadow-xl rounded-lg bg-slate-200 m-2 p-2 w-2/3 content-center justify-center">
            <div className="justify-center content-center text-center">
                <p>maker: {maker}</p>
            </div>
            <div>hash: {hash}</div>
            <p>
                content: <span className="bg-red-300">hidden</span>
            </p>
            <p></p>

            <p>post date: {post_date}</p>
            <p>reveal date: {reveal_date}</p>

            <button className="bg-blue-500 hover:bg-blue-700 p-2 rounded-lg">
                pay to unlock
            </button>
        </div>
    );
}
