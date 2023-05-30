import {useMdxComponentsContext} from "../context/mdxContext";
import TagsStyles from '../styles/modules/Tags.module.scss';

// PostGrid properties
type Props = {
    tags: string[]
}

const Tags: React.FC<Props> = ({ tags }: Props) => {
    // const tags = useMdxComponentsContext().tags;
    return (
        <>
        <ul className={`${TagsStyles['tags']}`}>
            {tags?.map((stack, index) => (
                <li className={`${TagsStyles['tags__item']}`} key={index}>{stack}</li>
            ))}
        </ul>
        </>
    )
}

export default Tags;