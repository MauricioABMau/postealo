const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const mostrarUsuario = async () => {
    const response = await fetch(`${BASE_URL}/users`);

    if (!response.ok) {
        throw new Error('Error al mostrar el usuario')
    }

    return response.json()
}
export const mostrarPublicacion = async () => {
    const response = await fetch(`${BASE_URL}/posts`);

    if (!response.ok) {
        throw new Error('Error al mostrar la publicacion')
    }

    return response.json()
}
export const mostrarComentario = async () => {
    const response = await fetch(`${BASE_URL}/comments`);

    if (!response.ok) {
        throw new Error('Error al mostrar los comentarios')
    }

    return response.json()
}