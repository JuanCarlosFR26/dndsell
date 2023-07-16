import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Services from "./components/services/Services";


function App() {
  return (
    <div >
      <Header />
      <Nav />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
