import {useMdxComponentsContext} from "../context/mdxContext";


const Tags: React.FC = () => {
    const tags = useMdxComponentsContext().tags;
    return (
        <>
        <h2>Tags</h2>
        <ol>
            {tags.map((stack, index) => (
            <li key={index}>{stack}</li>
            ))}
        </ol>
        </>
    )
}

export default Tags;