import SectionHeadingStyles from '../styles/modules/SectionHeading.module.scss';

// SectionHeading properties
type Props = {
    title: string;
    text: string;
    headingLevel?: string;
}


const SectionHeading: React.FC<Props> = ({ title, text, headingLevel }: Props) => {

    // return the SectionHeading
    return (
        <>
            <section className={`${SectionHeadingStyles['section-heading']}`}>
                <div className={`${SectionHeadingStyles['section-heading__inner-wrap']}`}>
                    <div>
                        {(headingLevel === 'h1') && (
                            <h1 className={`${SectionHeadingStyles.heading}`}>{title}</h1>
                        )}
                        {(headingLevel === 'h2' || !headingLevel) && (
                            <h2 className={`${SectionHeadingStyles.heading}`}>{title}</h2>
                        )}
                        <p className={`${SectionHeadingStyles.description}`}>{text}</p>
                    </div>
                </div>
            </section>
        </>
    )
}

// export SectionHeading module
export default SectionHeading;