import TagsFilterStyles from '../styles/modules/TagsFilter.module.scss';

// props type
type Props = {
    tags: string[],
    handleTagChange: any,
    active: string[]
}

const PostGrid: React.FC<Props> = ({ tags, handleTagChange, active }: Props) => {
  console.log(active)
    return (
    <>
        <ul className={`${TagsFilterStyles['tag-filter']}`}>
              {tags.sort().map((tag: string, index) => (
                <li className={`${TagsFilterStyles['tag-filter__item']}`} key={index}>
                  <input type="checkbox" id={`tag-${tag}`} name={`tag-${tag}`} value={tag} checked={active.includes(tag)}
                    onChange={e => handleTagChange( e.currentTarget.checked, e.currentTarget.value )} />
                  <label htmlFor={`tag-${tag}`}>{tag}</label>
                </li>
                ))}
          </ul>
    </>
  )
}

export default PostGrid;