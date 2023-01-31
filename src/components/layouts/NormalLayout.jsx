import Footer from "../common/footer/Footer";
import Header from "./../common/header/Header";

export default function NormalLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
