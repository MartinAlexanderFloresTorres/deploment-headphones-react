import imgDiscoun from "./img/discount.png"

function Descuentos() {
    return (
        <section className="descuento">
            <div className="decuento__contenido">
                <h2 className="descuento__titulo">
                    Sumérgete en <br />
                    tu musica
                </h2>
                <p>Consíguelo ahora, hasta un 50% de descuento.</p>
                <a className="boton" href="#">
                    <i className="ri-shopping-bag-line ico" />
                    <span>Comprar Ahora</span>
                </a>
            </div>

            <img
                width="100"
                height="100"
                className="descuento__img"
                src={imgDiscoun}
                alt="descuento"
            />
        </section>
    );
}

export default Descuentos;
