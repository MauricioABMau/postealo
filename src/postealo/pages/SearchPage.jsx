import { useLocation, useNavigate } from "react-router";
import { getPublicacion } from "../helpers";
import { useForm } from "../../hooks/useForm";
import queryString from 'query-string'

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);
  const publicacionTitulo = getPublicacion(q);
  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && publicacionTitulo.length === 0;
  const { buscarTexto, cambioTexto } = useForm({
    buscarTexto: q
  });
  const enviarBusqueda = (event) => {
    event.preventDefault();
    navigate(`?q=${buscarTexto}`);
  }
  return (
    <>
      <h1>Busqueda</h1>
      <hr />
      <div className="col-5">
        <h4>Buscando</h4>
        <hr />
        <form onSubmit={enviarBusqueda}>
          <input
            type="text"
            placeholder="Buscar publicacion"
            className="form-control"
            name="buscarTexto"
            autoComplete="off"
            value={buscarTexto}
            onChange={cambioTexto}
          />
          <button className="btn btn-outline-primary mt-1">
            Busqueda
          </button>
        </form>
      </div>
      <div className="col-7">
        <h4>Resultados</h4>
        <hr />
        <div
          className="alert alert-primary animate__animated animate__fadeIn"
          style={{ display: showSearch ? '' : 'none' }}
        >
          Buscar publicacion
        </div>

        <div
          className="alert alert-danger animate__animated animate__fadeIn"
          style={{ display: showError ? '' : 'none' }}
        >
          No hero with <b>{q}</b>
        </div>
        <div
          style={{           
            overflowY: 'auto', 
            border: '1px solid #ddd', 
            padding: '10px', 
            borderRadius: '5px' 
          }}
        >
          <ul>
            {
              publicacionTitulo.map(data => (
                <li key={data.id}>
                  {data.title} - titulo <br/>
                  {data.body} - contenido
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </>
  )
};
