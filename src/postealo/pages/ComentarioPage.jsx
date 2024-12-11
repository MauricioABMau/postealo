import { useState } from "react";
import { useFetchMostrarComentario } from "../../hooks/useFetchConsumir";
import { Link } from "react-router";
import { Paginacion } from "../../components/paginacion/paginacion";

export const ComentarioPage = () => {
  const [paginaActual, setPaginaActual] = useState(1);
  const itemsPorPagina = 10;
  const { data } = useFetchMostrarComentario();
  if (!data || !Array.isArray(data) || data.length === 0) {
    return <p>No hay datos disponibles</p>;  // Muestra un mensaje mientras se carga la data
  }

  
  const cambiarPagina = (pagina) => {
    if( pagina < 1 || pagina > totalPaginas) return;
    setPaginaActual(pagina)
  }

  const totalPaginas = Math.ceil(data.length / itemsPorPagina);

  const indiceInicial = (paginaActual - 1) * itemsPorPagina;
  const paginaActualDatos = data.slice(indiceInicial, indiceInicial + itemsPorPagina)

  return (
    <div className="row rows-cols-1 row-cols-md-1 g-3">
      {
        paginaActualDatos.map((data) => (
          <div className="col" key={data.id}>
            <div className="card" >
              <h3 className="card-title">{data.name}</h3>
              <p className="card-text">{data.body}</p>
              <p className="card-text"><strong>{data.email}</strong></p>
            </div>
          </div>
        ))
      }
      <Paginacion 
        paginaActual={paginaActual}
        totalPagina={totalPaginas}
        cambiarPagina={cambiarPagina}
      />
    </div>
  )
};
