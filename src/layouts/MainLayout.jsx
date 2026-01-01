import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import ScrollToTopButton from "../components/common/ScrollToTopButton";
import useScrollToTheTop from "../Hooks/useScrollToTheTop";

export default function MainLayout({ children }) {
  useScrollToTheTop();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
