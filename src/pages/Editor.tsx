import { useState } from "react"
import { motion } from "framer-motion"
import * as botanical from "../assets/botanical"
import * as minimal from "../assets/minimal"
import "./Editor.css"

function Editor() {

    const [bg, setBg] = useState("#f3f3f3");

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
                    <rect
                        x="0"
                        y="0"
                        width="1600"
                        height="900"
                        fill={bg}
                    />
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
                    {Object.keys(botanical).map((key) =>
                        <button key={key}>
                            <img src={botanical[key as keyof typeof botanical]} />
                        </button>
                    )}
                    </div>
                    <h3>Minimal</h3>
                    <div className="flower-menu">
                    {Object.keys(minimal).map((key) =>
                        <button key={key}>
                            <img src={minimal[key as keyof typeof minimal]} />
                        </button>
                    )}
                    </div>
                </section>
            </div>
        </motion.main>
    )
}

export default Editor