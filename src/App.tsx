import Articles from "@components/Articles/Articles";
import Footer from "@components/Footer/Footer";
import HeroSection from "@components/Hero/HeroSection";
import Main from "@components/Main/Main";
import Navbar from "@components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Main />
      <Articles />
      <Footer />
    </>
  );
};

export default App;
