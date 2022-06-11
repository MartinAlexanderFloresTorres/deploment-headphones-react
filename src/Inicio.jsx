import imgHome from "./img/home.png"

function Inicio() {
    return (
        <section className="inicio" id="inicio">
            <div className="inicio__imagen">
                <img
                    width="100"
                    height="100"
                    className="inicio__img"
                    src={imgHome}
                    alt="inicio"
                />
            </div>

            <div className="inicio__contenido">
                <div className="inicio__intro">
                    <h2 className="inicio__bg titulo">Sobre el oído</h2>
                    <h3 className="inicio__bgTexto">Latidos 3</h3>
                </div>

                <div>
                    <h3 className="inicio__titulo">Visión general</h3>
                    <p className="inicio__parrafo">
                        Disfruta del galardonado sonido Beats con conexión
                        inalámbrica libertad de escucha y un diseño elegante y
                        aerodinámico con cómodos auriculares acolchados,
                        brindando reproducción de primer nivel.
                    </p>
                    <a className="boton" href="#">
                        <span className="inicio__icono">
                            <i className="ri-shopping-bag-line"></i>
                        </span>
                        <span className="inicio__add">Agregar</span>
                        <span className="inicio__precio">$299</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Inicio;
