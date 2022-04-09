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
            }}
        ></VisiblePost>
    );
}
