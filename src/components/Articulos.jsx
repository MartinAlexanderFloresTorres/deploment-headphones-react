function Articulos({ imagen, nombre, precio }) {
    return (
        <article className="productos__item">
            <img
                width="100"
                height="100"
                className="productos__img"
                src={imagen}
                alt="producto"
            />
            <div>
                <h3 className="productos__titulo">{nombre}</h3>
                <p className="productos__precio">
                    $<span id="precio">{precio}</span>
                </p>
                <button className="boton" title="Agregar" id="btn-agregar">
                    <i className="ri-shopping-bag-line" />
                </button>
            </div>
        </article>
    );
}

export default Articulos;
