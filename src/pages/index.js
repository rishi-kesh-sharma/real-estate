import { Inter } from "@next/font/google";
import NormalLayout from "@/components/layouts/NormalLayout";
import HomeComponent from "@/components/page/home";
import { NextSeo } from "next-seo";
const inter = Inter({ subsets: ["latin"] });
import {useEffect} from "react"
import {getProfile} from "../apiCalls/profile.js"
import { parseCookies } from "../utils/cookies.js";
import { createContext } from "react";

// profile context
export const profileContext=createContext(null)
// HOME COMPONENT
export default function Home(data ) {
  useEffect(()=>{
  },[])
  
  return (
    <profileContext.Provider value={data}>
      <NextSeo
        title="Rent Up | Home"
        description="A Home Page For Property Selling And Rental Website"
      />
      <main className={"overflow-x-hidden"}>
        <NormalLayout>
          <HomeComponent />
        </NormalLayout>
      </main>
    </profileContext.Provider>
  );
}

Home.getInitialProps = async ({ req, res }) => {
  const token = parseCookies(req);

  if (res) {
    if (Object.keys(token).length === 0 && token.constructor === Object) {
      res.writeHead(301, { Location: "/" });
      res.end();
    }
  }
  let data={}
  try{
    const response=await getProfile(token)
    data={profile:response.data.data,isAuth:true}
    return data
  }catch(err){
    data={}
    return data
  }
};
