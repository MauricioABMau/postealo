import { useFetchMostrarUsuario } from "../../hooks/useFetchConsumir";

export const UsuarioPage = () => {
  const {data} = useFetchMostrarUsuario();
  return (
    <h1>{JSON.stringify(data, null, 2)}</h1>
  )
};
