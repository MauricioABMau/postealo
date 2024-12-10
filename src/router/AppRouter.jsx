import { Route, Routes } from "react-router"
import { PublicacionPage } from "../postealo/pages/publicacionPage"
import { ComentarioPage } from "../postealo/pages/comentarioPage"
import { LoginPage } from "../auth/LoginPage"

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="comentario" element={ <ComentarioPage />} />
                <Route path="publicacion" element={ <PublicacionPage />} />
                <Route path="login" element={ <LoginPage />} />
            </Routes>
        </>
    )
}