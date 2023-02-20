import { Inter } from "@next/font/google";
import NormalLayout from "@/components/layouts/NormalLayout";
import HomeComponent from "@/components/page/home";
import { NextSeo } from "next-seo";
const inter = Inter({ subsets: ["latin"] });

// HOME COMPONENT
export default function Home() {
  return (
    <>
      <NextSeo
        title="Rent Up | Home"
        description="A Home Page For Property Selling And Rental Website"
      />
      <main className={"overflow-x-hidden"}>
        <NormalLayout>
          <HomeComponent />
        </NormalLayout>
      </main>
    </>
  );
}
