import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Inter } from "@next/font/google";
// import styles from "@/styles/Home.module.css";
import UserDashboardLayout from "@/components/layouts/UserDashboardLayout";
import UpdateUser from "@/components/page/dashboard/Profile/Update";
import NormalLayout from "@/components/layouts/NormalLayout";
import Section from "@/components/utils/Section";
import Container from "@/components/utils/Container";
import UserDashboardSidebar from "@/components/partials/dashboard/UserDashboardSidebar";
import Add from "@/components/page/dashboard/Properties/Add";
import MultiStepForm from "@/components/utils/MultiStepForm";
const inter = Inter({ subsets: ["latin"] });

export default function AddProperty() {
  return (
    <>
      <Head>
        <title>Rent Up | Add Property</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={""}>
        <UserDashboardLayout>
          <Add />

          {/* <MultiStepForm /> */}
        </UserDashboardLayout>
      </main>
    </>
  );
}
