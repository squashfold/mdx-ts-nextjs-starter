import {useMdxComponentsContext} from "../context/mdxContext";
import Gist from "react-gist";

type Props = {
    // children?: React.ReactNode
    id: string
}

const GistEmbed = ({ id }: Props) => {
    const gistId = id;
    return (
        <>
            <Gist id={gistId} />
        </>
    )
}

export default GistEmbed;