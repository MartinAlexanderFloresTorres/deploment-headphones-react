import imgLogo from "../img/logo.png"

function Footer() {
    return (
        <footer className="footer">
            <section className="footer__contenedor max">
                <img
                    width="100"
                    height="100"
                    className="footer__img"
                    src={imgLogo}
                    alt="logo"
                />

                <ul>
                    <h3 className="footer__titulo">Productos</h3>
                    <li>
                        <a className="footer__link" href="#">
                            Headphones
                        </a>
                    </li>
                    <li>
                        <a className="footer__link" href="#">
                            Earphones
                        </a>
                    </li>
                    <li>
                        <a className="footer__link" href="#">
                            Auriculares
                        </a>
                    </li>
                    <li>
                        <a className="footer__link" href="#">
                            Accesorios
                        </a>
                    </li>
                </ul>

                <ul>
                    <h3 className="footer__titulo">Soporte</h3>
                    <li>
                        <a className="footer__link" href="#">
                            Ayuda del producto
                        </a>
                    </li>
                    <li>
                        <a className="footer__link" href="#">
                            Registro
                        </a>
                    </li>
                    <li>
                        <a className="footer__link" href="#">
                            Actualizaciones
                        </a>
                    </li>
                    <li>
                        <a className="footer__link" href="#">
                            proporciona
                        </a>
                    </li>
                </ul>

                <div className="footer__content">
                    <form action="" className="footer__form">
                        <input
                            type="email"
                            placeholder="Email"
                            className="footer__input"
                            required
                        />
                        <button className="boton">
                            <i className="ri-send-plane-line ico"></i>{" "}
                            Suscribete
                        </button>
                    </form>

                    <div className="footer__social">
                        <a
                            title="facebook"
                            href="https://www.facebook.com/"
                            target="_blank"
                            className="boton"
                        >
                            <i className="ri-facebook-fill ico"></i>
                        </a>
                        <a
                            title="instagram"
                            href="https://www.instagram.com/"
                            target="_blank"
                            className="boton"
                        >
                            <i className="ri-instagram-line ico"></i>
                        </a>
                        <a
                            title="twitter"
                            href="https://twitter.com/"
                            target="_blank"
                            className="boton"
                        >
                            <i className="ri-twitter-line ico"></i>
                        </a>
                    </div>
                </div>

                <p className="footer__copy">
                    <a
                        href="https://www.youtube.com"
                        target="_blank"
                        className="footer__copy-link"
                    >
                        &#169; White Code. Todos los derechos reservados
                    </a>
                </p>
            </section>
        </footer>
    );
}

export default Footer;
