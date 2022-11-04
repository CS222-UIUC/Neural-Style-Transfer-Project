import React, { useEffect, useRef } from "react"
import Button from "../components/UI/Button.js";

const Draw = () => {

    const canvasRef = useRef(null)

    const draw = () => {
        let ctx = canvasRef.current.getContext("2d");
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(0, 0, 300, 300);
    }

    return (
        <>
            <canvas data-testid="testCanvas" ref={canvasRef}></canvas>
            <Button data-testid="drawButton" onClick={() => draw()}>
                Draw
            </Button>
        </>
    )
}

export default Draw;