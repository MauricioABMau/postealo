
import { useParams } from "react-router";
import { useFetchMostrarComentario } from "../../hooks/useFetchConsumir";

export const ComentarioDetalle = () => {
  const { id } = useParams();
  const { data } = useFetchMostrarComentario();
  if (!data || !Array.isArray(data) || data.length === 0) {
    return <p>No hay datos disponibles</p>;  // Muestra un mensaje mientras se carga la data
  }
  const publicacion = data.find((data) => Number(data.id) === Number(id));

  if (!publicacion) {
    return <p>No hay datos disponibles para esta publicación</p>;
  }
  return (
    <>
      <div className="row rows-cols-1 row-cols-md-1 g-3 mt-5">
        <h1>Nombre: {publicacion.name}</h1>
        <p><strong>Contenido:</strong> {publicacion.body}</p>
        <p className="card-text"><strong>{data.email}</strong></p>
        <p><strong>ID:</strong> {publicacion.id}</p>
      </div>
    </>
  );
};