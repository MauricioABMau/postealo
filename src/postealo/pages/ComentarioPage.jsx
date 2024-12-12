import { useState } from "react";
import { useFetchMostrarComentario } from "../../hooks/useFetchConsumir";
import { Paginacion } from "../../components/paginacion/paginacion";
import { useNavigate } from "react-router";

export const ComentarioPage = () => {
  const [paginaActual, setPaginaActual] = useState(1);
  const itemsPorPagina = 10;
  const { data } = useFetchMostrarComentario();
  const navigate = useNavigate();

  if (!data || !Array.isArray(data) || data.length === 0) {
    return <p>No hay datos disponibles</p>;  // Muestra un mensaje mientras se carga la data
  }


  const cambiarPagina = (pagina) => {
    if (pagina < 1 || pagina > totalPaginas) return;
    setPaginaActual(pagina)
  }

  const verDetalle = (id) => {
    navigate(`/comentarioDetalle/${id}`);
  };

  const totalPaginas = Math.ceil(data.length / itemsPorPagina);

  const indiceInicial = (paginaActual - 1) * itemsPorPagina;
  const paginaActualDatos = data.slice(indiceInicial, indiceInicial + itemsPorPagina)

  return (
    <>
      <div className="row rows-cols-1 row-cols-md-2 g-3 mt-5">
        {
          paginaActualDatos.map((data) => (
            <div className="col" key={data.id} onClick={() => verDetalle(data.id)}>
              <div className="card" style={{ width: '18rem' }}>
                <h3 className="card-title">{data.name}</h3>
              </div>
            </div>
          ))
        }
      </div>
      <div>
        <Paginacion
          paginaActual={paginaActual}
          totalPagina={totalPaginas}
          cambiarPagina={cambiarPagina}
        />
      </div>
    </>
  )
};
