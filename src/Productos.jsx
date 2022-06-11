import Articulos from "./components/Articulos";
import imgProducto1 from "./img/product1.png"
import imgProducto2 from "./img/product2.png"
import imgProducto3 from "./img/product3.png"
import imgProducto4 from "./img/product4.png"
import imgProducto5 from "./img/product5.png"

function Productos() {

    return (
        <section className="productos" id="productos">
            <h2 className="titulo-texto titulo">
                Elija <br /> su estilo
            </h2>
            <div className="productos__contenedor">
                <Articulos
                    imagen={imgProducto1}
                    nombre={"Negro"}
                    precio={50}
                />

                <Articulos
                    imagen={imgProducto2}
                    nombre={"Negro blanco"}
                    precio={55}
                />

                <Articulos
                    imagen={imgProducto3}
                    nombre={"Negro Noche"}
                    precio={60}
                />

                <Articulos
                    imagen={imgProducto4}
                    nombre={"Azul"}
                    precio={75}
                />

                <Articulos
                    imagen={imgProducto5} 
                    nombre={"Gris crepuscular"}
                    precio={100}
                />
            </div>
        </section>
    );
}

export default Productos;
