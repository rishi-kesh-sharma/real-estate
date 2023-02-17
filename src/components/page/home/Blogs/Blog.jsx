import Image from "next/image";
import Link from "next/link";
// import { parseISO, format } from "date-fns";
import { MdNoPhotography } from "react-icons/md";
import Card from "@/components/utils/Card";
import CardImage from "./../../../utils/CardImage";
import CardContent from "./../../../utils/CardContent";

export default function Blog({ blog, aspect, preloadImage }) {
  const imageProps = blog?.mainImage ? blog.mainImage : null;
  const AuthorimageProps = blog?.author?.image ? blog.author.image : null;
  console.log(blog);
  return (
    <Card className="cursor-pointer bg-white shadow gap-[0.5rem] md:w-[330px]">
      <CardImage className="  ">
        <Link href={`/blog/${blog.slug.current}`}>
          {imageProps ? (
            <Image
              src={imageProps.src}
              width="290"
              height={400}
              className="transition-all"
            />
          ) : (
            <span className="absolute w-16 h-16 text-gray-200 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <MdNoPhotography />
            </span>
          )}
        </Link>
      </CardImage>
      <CardContent className="gap-[0.5rem]">
        <div className="flex gap-3">
          {blog.categories?.length &&
            blog.categories.slice(0).map((category, index) => (
              <Link href="#" key={index}>
                <span
                  className={`inline-block mt-5 text-xs font-medium tracking-wider uppercase py-1 px-2 text-gray-100 rounded-sm bg-${
                    category.color ? `[${category.color}]` : "green-500"
                  } bg-green-500`}
                >
                  {category.title}
                </span>
              </Link>
            ))}
        </div>
        <h2 className="text-[1rem] font-semibold  dark:text-white">
          <Link href={`/blog/${blog.slug.current}`}>
            <span className="text-gray-600">{blog.title}</span>
          </Link>
        </h2>

        <div className="hidden">
          {blog.excerpt && (
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 line-clamp-3">
              <Link href={`/blog/${blog.slug.current}`}>{blog.excerpt}</Link>
            </p>
          )}
        </div>

        <div className="flex items-center justify-between items-centerspace-x-3 text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-3">
            <div className="relative flex-shrink-0 w-5 h-5">
              {blog.author.image && (
                <Image
                  src={AuthorimageProps.src}
                  blurDataURL={AuthorimageProps.blurDataURL}
                  loader={AuthorimageProps.loader}
                  objectFit="cover"
                  layout="fill"
                  alt={blog?.author?.name}
                  placeholder="blur"
                  sizes="30px"
                  className="rounded-full"
                />
              )}
            </div>
            <span className="text-xs">{blog.author.name}</span>
          </div>
          <span className="text-xs text-gray-300 dark:text-gray-600">
            &bull;
          </span>
          <time
            className="text-xs"
            dateTime={blog?.publishedAt || blog.createdAt}
          >
            {/* {format(
              parseISO(blog?.publishedAt || blog._createdAt),
              "MMMM dd, yyyy"
            )} */}
            {blog.publishedAt || blog.createdAt}
          </time>
        </div>
      </CardContent>
    </Card>
  );
}
