import { useState, type ComponentType } from "react";
import { motion } from "framer-motion";
import * as botanical from "../assets/botanical";
import * as minimal from "../assets/minimal";
import "./Editor.css";

interface Flower {
    id: string;
    Component: ComponentType;
    x: number;
    y: number;
    scale: number;
    rotation: number;
}

function Editor() {

    const [bg, setBg] = useState("#ffffff");
    const [width, setWidth] = useState(1600);
    const [height, setHeight] = useState(900);

    const [flowers, setFlowers] = useState<Flower[]>([]);
    const [selectedFlowerId, setSelectedFlowerId] = useState<string | null>(null);

    const selectedFlower = flowers.find(
        (flower) => flower.id === selectedFlowerId
    );

    function addFlower(Component: ComponentType) {
        const newFlower: Flower = {
            id: crypto.randomUUID(),
            Component,
            x: width / 2,
            y: height / 2,
            scale: 0.5,
            rotation: 0,
        };

        setFlowers((currentFlowers) => [
            ...currentFlowers,
            newFlower,
        ]);

        setSelectedFlowerId(newFlower.id);
    }

    function updateFlower(id: string, changes: Partial<Omit<Flower, "id" | "Component">>) {
        setFlowers((currentFlowers) =>
            currentFlowers.map((flower) =>
                flower.id === id
                    ? { ...flower, ...changes }
                    : flower
            )
        );
    }

    function deleteFlower(id: string) {
        setFlowers((currentFlowers) =>
            currentFlowers.filter((flower) => flower.id !== id)
        );
        setSelectedFlowerId(null);
    }

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
                    onClick={() => setSelectedFlowerId(null)}
                >
                    <rect x="0" y="0" width={width} height={height} fill={bg} />
                    {flowers.map((flower) => {
                        const FlowerComponent = flower.Component;
                        const isSelected = flower.id === selectedFlowerId;

                        return (
                            <g
                                key={flower.id}
                                transform={`
                                    translate(${flower.x} ${flower.y})
                                    rotate(${flower.rotation})
                                    scale(${flower.scale})
                                    translate(-256 -256)
                                `}
                                onClick={(event) => {
                                    event.stopPropagation();
                                    setSelectedFlowerId(flower.id);
                                }}
                                style={{ cursor: "pointer" }}
                            >
                                <FlowerComponent />
                                {isSelected && (
                                    <rect
                                        x="0"
                                        y="0"
                                        width="512"
                                        height="512"
                                        fill="none"
                                        stroke="#f3f3f380"
                                        strokeWidth="6"
                                        pointerEvents="none"
                                    />
                                )}
                            </g>
                        );
                    })}
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
                            onChange={(event) =>
                                setBg(event.target.value)
                            }
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="aspect-ratio">Aspect ratio</label>
                        <select
                            id="aspect-ratio"
                            value={`${width / 100}:${height / 100}`}
                            onChange={(event) => {
                                const sides = event.target.value.split(":").map(Number);
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
                {selectedFlower && (
                    <section className="flower-editor">
                        <h2>Modify flower</h2>
                        <hr />
                        <div className="field">
                            <label htmlFor="flower-x">Horizontal position</label>
                            <input
                                id="flower-x"
                                type="range"
                                min="0"
                                max={width}
                                value={selectedFlower.x}
                                onChange={(event) =>
                                    updateFlower(
                                        selectedFlower.id,
                                        { x: Number(event.target.value) }
                                    )
                                }
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="flower-y">Vertical position</label>
                            <input
                                id="flower-y"
                                type="range"
                                min="0"
                                max={height}
                                value={selectedFlower.y}
                                onChange={(event) =>
                                    updateFlower(
                                        selectedFlower.id,
                                        { y: Number(event.target.value) }
                                    )
                                }
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="flower-scale">Scale</label>
                            <input
                                id="flower-scale"
                                type="range"
                                min="0.1"
                                max="2"
                                step="0.05"
                                value={selectedFlower.scale}
                                onChange={(event) =>
                                    updateFlower(
                                        selectedFlower.id,
                                        { scale: Number(event.target.value) }
                                    )
                                }
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="flower-rotation">Rotation</label>
                            <input
                                id="flower-rotation"
                                type="range"
                                min="0"
                                max="360"
                                value={selectedFlower.rotation}
                                onChange={(event) =>
                                    updateFlower(
                                        selectedFlower.id,
                                        { rotation: Number(event.target.value) }
                                    )
                                }
                            />
                        </div>
                        <button type="button" onClick={() => deleteFlower(selectedFlower.id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                            Delete flower
                        </button>
                        <hr />
                    </section>
                )}
                <section className="flowers-editor">
                    <h2>Flowers</h2>
                    <hr />
                    <h3>Botanical</h3>
                    <div className="flower-menu">
                        {Object.entries(botanical).map(
                            ([key, FlowerComponent]) => (
                                <button type="button" key={key} onClick={() => addFlower(FlowerComponent)}>
                                    <svg viewBox="0 0 512 512" aria-label={key}><FlowerComponent /></svg>
                                </button>
                            )
                        )}
                    </div>
                    <h3>Minimal</h3>
                    <div className="flower-menu">
                        {Object.entries(minimal).map(
                            ([key, FlowerComponent]) => (
                                <button type="button" key={key} onClick={() => addFlower(FlowerComponent)}>
                                    <svg viewBox="0 0 512 512" aria-label={key}><FlowerComponent /></svg>
                                </button>
                            )
                        )}
                    </div>
                </section>
            </div>
        </motion.main>
    );
}

export default Editor;