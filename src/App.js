import './App.css';
import Header from "./Components/Header";
import Inicio from "./Components/Inicio";
import SobreMim from "./Components/SobreMim";
import Porfolio from "./Components/Portfolio/Porfolio";
import Estudos from "./Components/Estudos/Estudos";
import Footer from "./Components/Footer";
import Conhecimentos from "./Components/Conhecimentos/Conhecimentos";






function App() {
  return (
    <div className="App">
        <Header />
        <Inicio />
        <SobreMim />
        <Estudos />
        <Porfolio/>
        <Conhecimentos/>
        <Footer />
    </div>
  );
}

export default App;
