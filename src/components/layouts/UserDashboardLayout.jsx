import ProfileComponent from "@/components/page/dashboard/Profile";
import NormalLayout from "@/components/layouts/NormalLayout";
import UserDashboardSidebar from "@/components/partials/dashboard/UserDashboardSidebar";
import Section from "@/components/utils/Section";
import Container from "@/components/utils/Container";
import BreadCrumbContainer from "../utils/BreadCrumbContainer";

export default function UserDashboardLayout({ children }) {
  const activeTab = "profile";
  const user = { avatar: { url: "", name: "" } };
  return (
    <main className="w-full">
      {/* <!-- row --> */}
      <NormalLayout>
        <BreadCrumbContainer />
        <Section className="py-[2rem] bg-gray-100">
          <Container className="flex gap-[2rem] bg-white md:p-[1rem]  justify-evenly lg:p-[3rem] xl:py-[4rem] xl:gap-[3rem]">
            <UserDashboardSidebar />
            {children}
          </Container>
        </Section>
      </NormalLayout>
    </main>
  );
}
