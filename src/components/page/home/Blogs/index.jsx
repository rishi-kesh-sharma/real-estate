import { useRouter } from "next/router";
import Blog from "./Blog";
import { blogs } from "@/data/Data";
import Heading from "@/components/utils/Heading";
import CardContainer from "@/components/utils/CardContainer";

export default function blog(props) {
  const { blogdata, siteconfig, preview } = props;

  const router = useRouter();
  //console.log(router.query.category);
  return (
    <div className="  my-[2rem] py-[2rem] bg-gray-200">
      <Heading
        title="Our Blogs"
        subtitle="read our blogs"
        className={"text-[4rem]"}
      />
      {blogs && (
        <CardContainer className="container mx-[0.2rem] py-[2rem] ">
          {blogs.map((blog) => (
            <Blog
              key={blog._id}
              blog={blog}
              aspect="landscape"
              preloadImage={true}
            />
          ))}
        </CardContainer>
      )}
    </div>
  );
}
