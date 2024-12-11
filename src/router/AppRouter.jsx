import { Route, Routes } from "react-router"

import { PostealoRoutes } from "../postealo"
import { LoginPage } from "../auth"

export const AppRouter = () => {
    return (
        <>
            <Routes>                
                <Route path="login" element={ <LoginPage />} />
                <Route path="/*" element={ <PostealoRoutes />} />
            </Routes>
        </>
    )
}