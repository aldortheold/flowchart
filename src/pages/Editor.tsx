import { useState, type ComponentType } from "react"
import { motion } from "framer-motion"
import * as botanical from "../assets/botanical"
import * as minimal from "../assets/minimal"
import "./Editor.css"

function Editor() {

    const [bg, setBg] = useState("#f3f3f3");

    const [flowers, setFlowers] = useState<ComponentType[]>([]);

    return (
        <motion.main
            className="editor"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="canvas">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1600 900"
                    preserveAspectRatio="xMidYMid meet"
                    width="100%"
                    height="100%"
                >
                    <rect x="0" y="0" width="1600" height="900" fill={bg} />
                    {flowers.map((Flower, index) => (
                        <g key={index} transform={`translate(${index * 100} ${index * 100}) scale(0.5)`}>
                            <Flower />
                        </g>
                    ))}
                </svg>
            </div>
            <div className="sidebar">
                <section className="canvas-editor">
                    <h2>Canvas</h2>
                    <hr />
                    <div className="field">
                        <label htmlFor="background-color">Background color</label>
                        <input
                            type="color"
                            id="background-color"
                            value={bg}
                            onChange={(e) => setBg(e.target.value)}
                        />
                    </div>
                    <hr />
                </section>
                <section className="flowers-editor">
                    <h2>Flowers</h2>
                    <hr />
                    <h3>Botanical</h3>
                    <div className="flower-menu">
                    {Object.entries(botanical).map(([key, Flower]) => (
                        <button key={key} onClick={() => setFlowers((flowers) => [...flowers, Flower])}>
                            <svg viewBox="0 0 512 512" aria-label={key}><Flower /></svg>
                        </button>
                    ))}
                    </div>
                    <h3>Minimal</h3>
                    <div className="flower-menu">
                    {Object.entries(minimal).map(([key, Flower]) => (
                        <button key={key} onClick={() => setFlowers((flowers) => [...flowers, Flower])}>
                            <svg viewBox="0 0 512 512" aria-label={key}><Flower /></svg>
                        </button>
                    ))}
                    </div>
                </section>
            </div>
        </motion.main>
    )
}

export default Editor