import {useState} from "react"

function ScrollUp() {
    const [active, setActive] = useState(false);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            setActive(true);
        } else {
            setActive(false);
        }
    });

    return (
        <a href="#inicio" className={active ? "scrollup boton active" : "scrollup boton"}>
            <i className="ri-arrow-up-s-line ico"></i>
        </a>
    );
}

export default ScrollUp;
