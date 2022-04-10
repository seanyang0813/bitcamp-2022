import HiddenPost from "./HiddenPost";
import VisiblePost from "./VisiblePost";

export default function Post({
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
    return content == null ? (
        <HiddenPost
            {...{
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
            }}
        ></HiddenPost>
    ) : (
        <VisiblePost
            {...{
                maker,
                title,
                content,
                hash,
                id,
                paid,
                post_date,
                reveal_date,
                setModalIsOpen,
            }}
        ></VisiblePost>
    );
}
