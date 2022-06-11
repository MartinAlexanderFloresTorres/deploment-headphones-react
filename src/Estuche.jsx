import Imgcase from "./img/case.png"

function Estuche() {
    return (
        <section className="case" id="case">
            <h2 className="titulo-texto titulo">Estuche</h2>

            <div className="case__contenedor">
                <img
                    width="100"
                    height="100"
                    className="case__img"
                    src={Imgcase}
                    alt="case"
                />
                <div className="case__datos">
                    <h3 className="case__titulo">Estuche portatil</h3>
                    <p className="case__parrafo">
                        Con un cómodo y <br />
                        Estuche adaptable para que <br />
                        puede almacenarlo siempre que <br />
                        quiere, y mantiene su durabilidad <br />
                        Siempre.
                    </p>
                    <a className="boton" href="#">
                        <i className="ri-information-line ico"></i>
                        <span>Mas Informacion</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Estuche;
