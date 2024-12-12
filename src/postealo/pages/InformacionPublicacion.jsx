import { useParams } from "react-router";
import { useFetchMostrarPublicacion } from "../../hooks/useFetchConsumir";

export const InformacionPublicacion = () => {
    const { id } = useParams();
    const { data } = useFetchMostrarPublicacion();
    if (!data || !Array.isArray(data) || data.length === 0) {
        return <p>No hay datos disponibles</p>;  // Muestra un mensaje mientras se carga la data
    }
    return (
        <div className="row rows-cols-1 row-cols-md-1 g-3">
            {
                data.filter(item => Number(item.userId) === Number(id)).map((dataPublicacion) => (
                    <div className="col" key={dataPublicacion.id}>
                        <div className="card" >
                            <h5 className="card-title">{dataPublicacion.title}</h5>
                            <p className="card-text">{dataPublicacion.body}</p>
                        </div>
                    </div>
                ))
            }

        </div>
    )
};
