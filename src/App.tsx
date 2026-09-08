import { BrowserRouter, Routes, Route } from "react-router-dom"
import Editor from "./pages/Editor"
import Home from "./pages/Home"
import { ThemeProvider } from "./theme"

function App() {

    return (
        <ThemeProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/editor" element={<Editor />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App
