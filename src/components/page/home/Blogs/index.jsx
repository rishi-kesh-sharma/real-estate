import { useRouter } from "next/router";
import Blog from "./Blog";
import { blogs } from "@/data/Data";
import Heading from "@/components/utils/Heading";

export default function blog(props) {
  const { blogdata, siteconfig, preview } = props;

  const router = useRouter();
  //console.log(router.query.category);
  return (
    <div className="my-[2rem] py-[2rem] bg-gray-200">
      <Heading title="Our Blogs" subtitle="read our blogs" />
      {blogs && (
        <div className="container p-[1rem] ">
          <div className="grid place-content-center gap-10 lg:gap-10 md:grid-cols-2 ">
            {blogs.slice(0, 2).map((blog) => (
              <Blog
                key={blog._id}
                blog={blog}
                aspect="landscape"
                preloadImage={true}
              />
            ))}
          </div>
          <div className="grid place-content-center gap-10 mt-10 lg:gap-10 md:grid-cols-2 xl:grid-cols-3 ">
            {blogs.slice(2).map((blog) => (
              <Blog key={blog._id} blog={blog} aspect="square" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
