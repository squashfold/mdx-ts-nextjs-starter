import TagsFilterStyles from '../styles/modules/TagsFilter.module.scss';

// props type
type Props = {
    tags: string[],
    handleTagChange: any,
}

const PostGrid: React.FC<Props> = ({ tags, handleTagChange }: Props) => {
    return (
    <>
        <ul className={`${TagsFilterStyles['tag-filter']}`}>
              {tags.sort().map((tag: string, index) => (
                <li className={`${TagsFilterStyles['tag-filter__item']}`} key={index}>
                  <input type="checkbox" id={`tag-${index}`} name={`tag-${index}`} value={tag}
                    onChange={e => handleTagChange( e.currentTarget.checked, e.currentTarget.value )} />
                  <label htmlFor={`tag-${index}`}>{tag}</label>
                </li>
                ))}
          </ul>
    </>
  )
}

export default PostGrid;