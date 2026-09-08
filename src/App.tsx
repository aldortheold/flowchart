import { BrowserRouter, Routes, Route } from "react-router-dom"
import Editor from "./pages/Editor"
import Home from "./pages/Home"
import { ThemeProvider } from "./theme"
import { LocaleProvider } from "./i18n"

function App() {

    return (
        <LocaleProvider>
            <ThemeProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/editor" element={<Editor />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </LocaleProvider>
    );
}

export default App
