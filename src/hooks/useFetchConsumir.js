import { mostrarComentario, mostrarPublicacion, mostrarUsuario } from "../services/apiServices";
import { useFetch } from "./useFetch";

export const useFetchMostrarUsuario = () => {
    const { data } = useFetch(mostrarUsuario);
    return { data }
}
export const useFetchMostrarPublicacion = () => {
    const { data } = useFetch(mostrarPublicacion);
    return { data }
}
export const useFetchMostrarComentario = () => {
    const { data } = useFetch(mostrarComentario);
    return { data }
}