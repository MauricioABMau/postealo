import React from "react";

export const Paginacion = ({paginaActual, totalPagina, cambiarPagina}) => {
    return (
        <div className="container" style={{ paddingBottom: "100px", marginTop: "20px" }}>
            <button
                className="btn btn-primary"
                onClick={() => cambiarPagina(paginaActual - 1)}
                disabled={paginaActual === 1}
            >
                Atras
            </button>

            <span>Pagina {paginaActual} de {totalPagina} </span>

            <button
                className="btn btn-primary"
                onClick={() => cambiarPagina(paginaActual + 1)}
                disabled={paginaActual === totalPagina}
            >
                Siguiente
            </button>
        </div>
    )
}