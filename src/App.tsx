import About from "./components/About";
import Conatact from "./components/Conatact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <ToastContainer />
      <Header />
      <About />
      <Projects />
      <Testimonials />
      <Conatact />
      <Footer />
    </div>
  );
};

export default App;
