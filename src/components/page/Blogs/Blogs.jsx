import { useRouter } from "next/router";
import Blog from "./Blog";
import { blogs } from "@/data/Data";
import CardContainer from "@/components/utils/CardContainer";

export default function blog(props) {
  return (
    <div className="pt-[2rem] bg-gray-100  text-center text-green-700 text-[2.5rem] mb-[2rem]">
      <h1>Our Blogs</h1>
      {blogs && (
        <div className=" p-[2rem] container ">
          {/* <div className="grid gap-10 lg:gap-10 md:grid-cols-2 ">
            {blogs.slice(0, 2).map((blog) => (
              <Blog
                key={blog._id}
                blog={blog}
                aspect="landscape"
                preloadImage={true}
              />
            ))}
          </div> */}
          <CardContainer className="">
            {blogs.map((blog) => (
              <Blog key={blog._id} blog={blog} aspect="square" />
            ))}
          </CardContainer>
        </div>
      )}
    </div>
  );
}
