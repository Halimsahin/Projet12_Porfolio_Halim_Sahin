import Header from "../components/Header";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Works from "../components/Works";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <main>
        <Hero />
        <div className="home__container">
          <Skills />
          <Works />
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
