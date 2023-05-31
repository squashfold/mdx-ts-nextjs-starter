import Link from 'next/link';
import Image from 'next/image';
import ThumbnailStyles from '../styles/modules/ThumbnailStyles.module.scss';

// Thumbnail properties
type Props = {
    // Thumbnail title
    title: string;
    // Thumbnail image src
    src: string;
    // Thumbnail slug link
    slug?:string;
}


const Thumbnail: React.FC<Props> = ({ title, src, slug}: Props) => {
  // Add the Thumbnail cover image
    const image = (
        <Image
        width={600}
        height={400}
        src={src}
        alt={`Thumbnail cover image ${title}`}
        className={ThumbnailStyles['thumbnail']}
        />
    );

    // return the Thumbnail cover image slug
    return (
        <>
      {slug ? (
        <Link legacyBehavior href={`/posts/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </>
    )
}

// export Thumbnail module
export default Thumbnail;