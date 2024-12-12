import React from "react";
import { Navbar } from "../../ui";
import { Navigate, Route, Routes } from "react-router";
import { ComentarioPage, InformacionPublicacion, PublicacionPage, SearchPage, UsuarioPage } from "../pages";

export const PostealoRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="comentario" element={<ComentarioPage />} />
                    <Route path="publicacion" element={<PublicacionPage />} />
                    <Route path="usuario" element={<UsuarioPage />} />
                    <Route path="busqueda" element={<SearchPage />} />
                    <Route path="informacionPublicacion/:id" element={<InformacionPublicacion />} />
                    <Route path="/" element={<Navigate to="/comentario" />} />
                </Routes>
            </div>
        </>
    )
};
