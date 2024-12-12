import { useState } from "react";
import { useFetchMostrarUsuario } from "../../hooks/useFetchConsumir";
import { Paginacion } from "../../components/paginacion/paginacion";
import { useNavigate } from "react-router";

export const UsuarioPage = () => {
  const [paginaActual, setPaginaActual] = useState(1);
  const itemsPorPagina = 10;

  const navigate = useNavigate();

  const { data } = useFetchMostrarUsuario();

  if (!data || !Array.isArray(data) || data.length === 0) {
    return <p>No hay datos disponibles</p>;  // Muestra un mensaje mientras se carga la data
  }


  const cambiarPagina = (pagina) => {
    if (pagina < 1 || pagina > totalPaginas) return;
    setPaginaActual(pagina)
  }

  const totalPaginas = Math.ceil(data.length / itemsPorPagina);

  const indiceInicial = (paginaActual - 1) * itemsPorPagina;
  const paginaActualDatos = data.slice(indiceInicial, indiceInicial + itemsPorPagina)

  const listaPublicacion = (id) => {
    navigate(`/informacionPublicacion/${id}`);
  }

  return (
    <div className="row rows-cols-1 row-cols-md-1 g-3">
      {
        paginaActualDatos.map((data) => (
          <div className="col" key={data.id} >
            <div className="card">
              <h5 className="card-title">{data.name}</h5>
              <p className="card-text">{data.username}</p>
              <p className="card-text"><strong>{data.email}</strong></p>
              <button className="nav-item nav-link btn" onClick={ () => listaPublicacion(data.id) }> Puclicaciones </button>
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
