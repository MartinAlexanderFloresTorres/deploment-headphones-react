import Caracteristica from "./components/Caracteristica";
import imgSpecs from "./img/specs.png"

function Especificaciones() {
    return (
        <section className="especificaciones" id="especificaciones">
            <h2 className="titulo-texto titulo">especificaciones</h2>
            <div className="espeficionaciones__contenedor">
                <div className="espeficicaciones__items">
                    <Caracteristica
                        icono={"ri-bluetooth-line"}
                        titulo={"Conexion"}
                        descripcion={"Bluetooth v5.2"}
                    />
                    <Caracteristica
                        icono={"ri-battery-charge-line"}
                        titulo={"Bateria"}
                        descripcion={"Duration 40h"}
                    />
                    <Caracteristica
                        icono={"ri-plug-line"}
                        titulo={"Cargador"}
                        descripcion={"Fast charge 4.2-AAC"}
                    />
                    <Caracteristica
                        icono={"ri-mic-line"}
                        titulo={"Microfono"}
                        descripcion={"Supports Apple Sirian Google"}
                    />
                </div>

                <img
                    width="100"
                    height="100"
                    className="especificaciones__img"
                    src={imgSpecs}
                    alt="especificaciones"
                />
            </div>
        </section>
    );
}

export default Especificaciones;
