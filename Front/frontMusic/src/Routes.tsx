import React from "react"
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom"
import Index from "./pages/HomePage/Index"
import Teste from "./pages/Teste/Teste"
export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Index />}/>
                <Route path="/teste" element={<Teste />}/>
            </Routes>
        </Router>
    )
}
