import HeroStyles from '../styles/modules/Hero.module.scss';

// Hero properties
type Props = {
    title: string;
    text: string;
    headingLevel?: string;
}


const Hero: React.FC<Props> = ({ title, text, headingLevel }: Props) => {

    // return the Hero
    return (
        <>
            <section className={`${HeroStyles.hero}`}>
                {(headingLevel === 'h1') && (
                    <h1>{title}</h1>
                )}
                {(headingLevel === 'h2' || !headingLevel) && (
                    <h2>{title}</h2>
                )}
                <p>{text}</p>
            </section>
        </>
    )
}

// export Thumbnail module
export default Hero;