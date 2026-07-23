import { useState, type ComponentType } from "react"
import { motion } from "framer-motion"
import * as botanical from "../assets/botanical"
import * as minimal from "../assets/minimal"
import "./Editor.css"

interface Flower {
    id: string;
    Component: ComponentType;
    x: number;
    y: number;
    scale: number;
    rotation: number;
};

function Editor() {

    const [bg, setBg] = useState("#ffffff");
    const [width, setWidth] = useState(1600);
    const [height, setHeight] = useState(900);

    const [flowers, setFlowers] = useState<Flower[]>([]);

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
                    viewBox={`0 0 ${width} ${height}`}
                    preserveAspectRatio="xMidYMid meet"
                    width="100%"
                    height="100%"
                >
                    <rect x="0" y="0" width={width} height={height} fill={bg} />
                    {flowers.map((flower) => (
                    <g
                        key={flower.id}
                        transform={`translate(${flower.x} ${flower.y}) rotate(${flower.rotation}) scale(${flower.scale})`}
                    >
                        <flower.Component />
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
                    <div className="field">
                        <label htmlFor="aspect-ratio">Aspect ratio</label>
                        <select
                            id="aspect-ratio"
                            value={`${width/100}:${height/100}`}
                            onChange={(e) => {
                                let sides = e.target.value.split(":").map(Number);
                                setWidth(sides[0] * 100);
                                setHeight(sides[1] * 100);
                            }}
                        >
                            <option value="16:9">16:9</option>
                            <option value="10:10">1:1</option>
                            <option value="9:16">9:16</option>
                        </select>
                    </div>
                    <hr />
                </section>
                <section className="flowers-editor">
                    <h2>Flowers</h2>
                    <hr />
                    <h3>Botanical</h3>
                    <div className="flower-menu">
                    {Object.entries(botanical).map(([key, FlowerComponent]) => (
                        <button key={key} onClick={() => setFlowers((flowers) => [...flowers, {
                            id: crypto.randomUUID(),
                            Component: FlowerComponent,
                            x: 0,
                            y: 0,
                            scale: 1,
                            rotation: 0,
                        }])}>
                            <svg viewBox="0 0 512 512" aria-label={key}><FlowerComponent /></svg>
                        </button>
                    ))}
                    </div>
                    <h3>Minimal</h3>
                    <div className="flower-menu">
                    {Object.entries(minimal).map(([key, FlowerComponent]) => (
                        <button key={key} onClick={() => setFlowers((flowers) => [...flowers, {
                            id: crypto.randomUUID(),
                            Component: FlowerComponent,
                            x: 0,
                            y: 0,
                            scale: 1,
                            rotation: 0,
                        }])}>
                            <svg viewBox="0 0 512 512" aria-label={key}><FlowerComponent /></svg>
                        </button>
                    ))}
                    </div>
                </section>
            </div>
        </motion.main>
    )
}

export default Editor