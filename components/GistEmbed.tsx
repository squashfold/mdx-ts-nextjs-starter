import EmbedGist from './GistEmbed/GistEmbedHelper';

type Props = {
    id: string
}

const GistEmbed = ({ id }: Props) => {
    const gistId = id;

    return (
        <>
            <EmbedGist gist={`${gistId}`} />
        </>
    )
}

export default GistEmbed;