import { useFetchMostrarPublicacion } from "../../hooks/useFetchConsumir";

export const getPublicacion = (nombre = '') => {
    const { data } = useFetchMostrarPublicacion();
    nombre = nombre.toLocaleLowerCase().trim();
    if (nombre.length === 0) return [];
    return data.filter(
        data => data.title.toLocaleLowerCase().includes(nombre) ||
                data.body.toLocaleLowerCase().includes(nombre)
    )
}
