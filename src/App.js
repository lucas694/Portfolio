import './App.css';
import Header from "./Components/Header";
import HeaderMobile from "./Components/MobileHeader";
import Inicio from "./Components/Inicio";
import SobreMim from "./Components/SobreMim";
import Porfolio from "./Components/Portfolio/Porfolio";
import Footer from "./Components/Footer";
import Conhecimentos from "./Components/Conhecimentos";

function App() {
  return (
    <div className="App">
        <Header />
        <HeaderMobile />
        <Inicio />
        <SobreMim />
        <Porfolio/>
        <Conhecimentos/>
        <Footer />
    </div>
  );
};
export default App;
