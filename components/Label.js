export default function Label({ type }) {
    let color_str = "bg-green-500";
    if (type == "revealed") {
        color_str = "bg-green-500";
    } else if (type == "hidden") {
        color_str = "bg-red-500";
    } else {
        color_str = "bg-green-500";
    }
    return (
        <span
            className={`absolute opacity-80 right-4 top-4 p-1 font-semibold text-stone-100 ${color_str} rounded-md`}
        >
            {type}
        </span>
    );
}
