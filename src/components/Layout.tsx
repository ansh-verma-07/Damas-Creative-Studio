import type { PropsWithChildren } from "react";
import ClickSpark from "./ClickSpark";
import AmbientField from "./AmbientField";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Preloader from "./Preloader";
import ScrollProgress from "./ScrollProgress";
import SmoothScroll from "./SmoothScroll";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <SmoothScroll />
      <Preloader />
      <AmbientField />
      <ScrollProgress />
      <ClickSpark />
      <Navbar />
      <div className="relative z-10">
        {children}
        <Footer />
      </div>
    </>
  );
}
