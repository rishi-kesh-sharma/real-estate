import { useRouter } from "next/router";
import Blog from "./Blog";
import { blogs } from "@/data/Data";
import Heading from "@/components/utils/Heading";
import CardContainer from "@/components/utils/CardContainer";
import Section from "@/components/utils/Section";
import Container from "@/components/utils/Container";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBlog } from "@/store/features/blogSlice";
import { Avatar2 } from "public/assets/images/Avatars";
import { city1 } from "public/assets/images/cities";
import moment from "moment";
import { baseUrl } from "@/apiCalls/constants";

export default function Blogs() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlog({ limit: 5, populate: "author" }));
  }, [dispatch]);

  const blogData = useSelector((state) => state.blog.blogs);

  const blogs = blogData?.map((data) => ({
    id: data?._id,
    keywords: data?.keywords?.map((k) => ({
      title: k,
    })),
    meta_tags: data?.tags?.map((m) => ({
      title: m,
    })),
    author: {
      image: data?.author?.avatar || Avatar2,
      name: data?.author?.username,
    },
    mainImage: data?.images?.[0] ? `${baseUrl}/${data?.images?.[0]}` : city1,

    // categories: [{ title: "Buy", color: "#c75840" }],
    title: data?.title,
    createdAt: moment(data?.createdAt).format("YYYY-MM-DD"),
  }));

  return (
    <Section className="  my-[2rem] py-[2rem] bg-gray-200">
      <Container>
        <Heading
          title="Our Blogs"
          subtitle="read our blogs"
          className={"text-[4rem]"}
        />
        {blogs && (
          <div className="mt-5 grid xs:grid-cols-2  gap-5  lg:grid-cols-3 xl:grid-cols-4">
            {blogs.map((blog) => (
              <Blog
                key={blog._id}
                blog={blog}
                aspect="landscape"
                preloadImage={true}
              />
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
}
