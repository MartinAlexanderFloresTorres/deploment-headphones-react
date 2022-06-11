import { useState } from "react";
import imgLogo from "../img/logo.png"

function Header() {
    const [menu, setMenu] = useState(false);
    const [scroll, setscroll] = useState(false);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            setscroll(true);
        } else {
            setscroll(false);
        }
    });

    return (
        <header className={scroll ? "header active" : "header"}>
            <nav className="navegacion max">
                <a className="navegacion__logo" href="/" title="Inicio">
                    <img
                        width="50"
                        height="50"
                        className="navegacion__logoImg"
                        src={imgLogo}
                        alt="logo"
                    />
                </a>

                <div
                    className={
                        menu
                            ? "navegacion__contenido active"
                            : "navegacion__contenido"
                    }
                >
                    <ul className="navegacion__lista">
                        <li className="navegacion__item">
                            <a
                                onClick={() => setMenu(false)}
                                className="navegacion__link"
                                href="#inicio"
                            >
                                Inicio
                            </a>
                        </li>

                        <li className="navegacion__item">
                            <a
                                onClick={() => setMenu(false)}
                                className="navegacion__link"
                                href="#especificaciones"
                            >
                                Especificaciones
                            </a>
                        </li>

                        <li className="navegacion__item">
                            <a
                                onClick={() => setMenu(false)}
                                className="navegacion__link"
                                href="#case"
                            >
                                Case
                            </a>
                        </li>

                        <li className="navegacion__item">
                            <a
                                onClick={() => setMenu(false)}
                                className="navegacion__link"
                                href="#productos"
                            >
                                Productos
                            </a>
                        </li>
                    </ul>

                    <div
                        onClick={() => setMenu(false)}
                        className="navegacion__close"
                    >
                        <i className="ri-close-line ico"></i>
                    </div>
                </div>

                <div
                    onClick={() => setMenu(true)}
                    className="navegacion__toggle"
                >
                    <i className="ri-function-line ico"></i>
                </div>
            </nav>
        </header>
    );
}

export default Header;
