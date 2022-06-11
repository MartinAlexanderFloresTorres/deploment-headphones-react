import imgSponsor1 from "./img/sponsor1.png"
import imgSponsor2 from "./img/sponsor2.png"
import imgSponsor3 from "./img/sponsor3.png"
import imgSponsor4 from "./img/sponsor4.png"

function Logos() {
    return (
        <section className="imagenes">
            <img
                width="100"
                height="100"
                className="imagen__img"
                src={imgSponsor1}
                alt="icono"
            />
            <img
                width="100"
                height="100"
                className="imagen__img"
                src={imgSponsor2}
                alt="icono"
            />
            <img
                width="100"
                height="100"
                className="imagen__img"
                src={imgSponsor3}
                alt="icono"
            />
            <img
                width="100"
                height="100"
                className="imagen__img"
                src={imgSponsor4}
                alt="icono"
            />
        </section>
    );
}

export default Logos;
