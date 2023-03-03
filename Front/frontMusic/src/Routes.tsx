import React from "react"
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom"

import Index from "./pages/HomePage/Index"
import ScreenLogin from "./pages/Account/ScreenLogin"
import ScreenRegister from "./pages/Account/ScreenRegister"

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/login" element={<ScreenLogin />} />
                <Route path="/register" element={<ScreenRegister />} />
            </Routes>
        </Router>
    )
}
