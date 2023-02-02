import { useRouter } from "next/router";
import Blog from "./Blog";
import { blogs } from "@/data/Data";

export default function blog(props) {
  const { blogdata, siteconfig, preview } = props;

  const router = useRouter();
  //console.log(router.query.category);
  return (
    <div className="pt-[6rem] text-center text-green-700 text-[2.5rem] mb-[2rem]">
      <h1>Our Blogs</h1>
      {blogs && (
        <div className="container bg-gray-100 p-[2rem] ">
          <div className="grid gap-10 lg:gap-10 md:grid-cols-2 ">
            {blogs.slice(0, 2).map((blog) => (
              <Blog
                key={blog._id}
                blog={blog}
                aspect="landscape"
                preloadImage={true}
              />
            ))}
          </div>
          <div className="grid gap-10 mt-10 lg:gap-10 md:grid-cols-2 xl:grid-cols-3 ">
            {blogs.slice(2).map((blog) => (
              <Blog key={blog._id} blog={blog} aspect="square" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
