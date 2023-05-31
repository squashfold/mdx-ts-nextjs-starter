import Gist from "react-gist";

type Props = {
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