import { useFetchMostrarPublicacion } from "../../hooks/useFetchConsumir";
import { useState } from "react";
import { Paginacion } from "../../components/paginacion/paginacion";
import { useNavigate } from "react-router";

export const PublicacionPage = () => {
  const [paginaActual, setPaginaActual] = useState(1);
  const itemsPorPagina = 10;
  const { data } = useFetchMostrarPublicacion();
  const navigate = useNavigate();
  if (!data || !Array.isArray(data) || data.length === 0) {
    return <p>No hay datos disponibles</p>;  // Muestra un mensaje mientras se carga la data
  }


  const cambiarPagina = (pagina) => {
    if (pagina < 1 || pagina > totalPaginas) return;
    setPaginaActual(pagina)
  }

  const verDetalle = (id) => {
    navigate(`/publicacionDetalle/${id}`);
  };

  const totalPaginas = Math.ceil(data.length / itemsPorPagina);

  const indiceInicial = (paginaActual - 1) * itemsPorPagina;
  const paginaActualDatos = data.slice(indiceInicial, indiceInicial + itemsPorPagina)

  return (
    <>
      <div className="row rows-cols-1 row-cols-md-2 g-3 mt-5">
        {
          paginaActualDatos.map((data) => (
            <div className="col" key={data.id}>
              <div className="card" style={{ width: '18rem' }}>
                <h5 className="card-title">{data.title}</h5>
                <button className="btn btn-outline-dark" onClick={() => verDetalle(data.id)}>
                  Más...
                </button>
              </div>
            </div>
          ))
        }
      </div>
      <div className="row rows-cols-1 mt-3">
        <div>
          <Paginacion
            paginaActual={paginaActual}
            totalPagina={totalPaginas}
            cambiarPagina={cambiarPagina}
          />

        </div>
      </div>
    </>
  )
};
