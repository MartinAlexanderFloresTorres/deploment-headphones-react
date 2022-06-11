import Header from "./components/Header";
import Inicio from "./Inicio";
import Footer from "./components/Footer";
import Logos from "./Logos";
import Especificaciones from "./Especificaciones";
import Estuche from "./Estuche";
import Descuentos from "./Descuentos";
import Productos from "./Productos";
import ScrollUp from "./components/ScrollUp";

function App() {
    return (
        <>
            <Header />
            <div className="max">
                <Inicio />
                <Logos />
                <Especificaciones />
                <Estuche />
                <Descuentos />
                <Productos />
                <ScrollUp />
            </div>
            <Footer />
        </>
    );
}

export default App;
