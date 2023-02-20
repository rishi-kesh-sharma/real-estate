import Container from "@/components/utils/Container";
import Section from "@/components/utils/Section";
import MemberPage from "./MemberPage";

function Auth() {
  return (
    <Section>
      <Container>
        <MemberPage
          brand={"Real Estate"}
          logoUrl="https://i.imgur.com/l1kG0LQ.png"
        />
      </Container>
    </Section>
  );
}

export default Auth;

// className="flex justify-center items-center w-screen h-screen"
