import Image from "next/image";
import Link from "next/link";
import { parseISO, format } from "date-fns";
import { MdNoPhotography } from "react-icons/md";
import CardImage from "./CardImage";
import CardContent from "./CardContent";

export default function Card({ content, image, styles, url }) {
  if (url) {
    return (
      <Link href={url}>
        <div className={styles}>
          <CardImage {...image} url={url} />
          <CardContent styles={styles}>{content.component}</CardContent>
        </div>
      </Link>
    );
  } else {
    return (
      <div className={styles}>
        <CardImage {...image} url={url} />
        <CardContent styles={styles}>{content.component}</CardContent>
      </div>
    );
  }
}
