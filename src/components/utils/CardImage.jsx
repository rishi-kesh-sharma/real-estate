import Link from "next/link";
import React from "react";
import Image from "next/image";
const CardImage = ({
  url,
  styles,
  data: {
    imageProps,
    settings: { preloadImage, placeholder, objectFit },
  },
}) => {
  return (
    <div className={` transition-all  hover:scale-10 ${styles}`}>
      <Link href={url}>
        <Image
          src={imageProps.src}
          loader={imageProps.loader}
          blurDataURL={imageProps.blurDataURL}
          alt={"Thumbnail"}
          placeholder={placeholder}
          // sizes="(max-width: 640px) 90vw, 480px"
          layout="fill"
          objectFit={objectFit}
          priority={preloadImage ? true : false}
          className="transition-all"
        />
      </Link>
    </div>
  );
};

export default CardImage;
