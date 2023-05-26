import Image from 'next/image';
import HeroStyles from '../styles/modules/Hero.module.scss';

// Hero properties
type Props = {
    title: string;
    text: string;
    headingLevel?: string;
    image?: string;
    imageAlt?: string;
}


const Hero: React.FC<Props> = ({ title, text, headingLevel, image, imageAlt }: Props) => {

    // return the Hero
    return (
        <>
            <section className={`${HeroStyles.hero}`}>
                <div className={`${HeroStyles['hero__inner-wrap']}`}>
                    <div>
                        {(headingLevel === 'h1') && (
                            <h1 className={`${HeroStyles.heading}`}>{title}</h1>
                        )}
                        {(headingLevel === 'h2' || !headingLevel) && (
                            <h2 className={`${HeroStyles.heading}`}>{title}</h2>
                        )}
                        <p className={`${HeroStyles.description}`}>{text}</p>
                    </div>
                    {(image) && (
                        <div>
                            <Image
                                width={600}
                                height={400}
                                src={image}
                                alt={imageAlt ? imageAlt : ''}
                            />
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}

// export Hero module
export default Hero;