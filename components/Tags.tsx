import {useMdxComponentsContext} from "../context/mdxContext";
import TagsStyles from '../styles/modules/Tags.module.scss';

const Tags: React.FC = () => {
    const tags = useMdxComponentsContext().tags;
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