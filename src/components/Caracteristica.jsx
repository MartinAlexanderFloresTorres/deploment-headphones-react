function Caracteristica({icono, titulo, descripcion}) {
    return (
        <div className="espeficicaciones__item">
            <span>
                <i className={icono + " ico"} />
            </span>
            <div>
                <h3 className="especificaciones__titulo">{titulo}</h3>
                <p className="especificaciones__parrafo">{descripcion}</p>
            </div>
        </div>
    );
}

export default Caracteristica;
