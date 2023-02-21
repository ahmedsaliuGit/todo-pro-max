import { memo, MouseEvent, useEffect, useRef, useState } from "react";
import classes from "./CanvasField.module.scss";

type CanvasFieldPropsType = {
  label?: string;
  value: string;
  onInput: (value: string) => void;
};

type CordinatePropsType = {
  x: number;
  y: number;
};

export const CanvasField = memo(
  ({ label, value, onInput }: CanvasFieldPropsType) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isDrawing, setIsDrawing] = useState<boolean>(false);
    const [prevCordinates, setPrevCordinates] = useState<CordinatePropsType>({
      x: 0,
      y: 0,
    });

    const canvasContext = canvasRef.current?.getContext("2d");

    useEffect(() => {
      if (value) {
        let image = new Image();
        image.onload = () => {
          canvasContext?.drawImage(image, 0, 0);
        };
        image.src = value;
      }
    }, [value, canvasContext]);

    const startDrawing = (event: MouseEvent<HTMLCanvasElement>) => {
      if (!(isDrawing && canvasContext && canvasRef.current)) {
        return;
      }

      const canvasEl = canvasRef.current;
      const { x: offsetX, y: offsetY } = canvasEl.getBoundingClientRect();

      // get canvas scale
      const scaleX = canvasEl.width / canvasEl.clientWidth;
      const scaleY = canvasEl.height / canvasEl.clientHeight;
      const updatedCordinates = {
        x: (event.clientX - offsetX) * scaleX,
        y: (event.clientY - offsetY) * scaleY,
      };

      if (prevCordinates.x === 0 && prevCordinates.y === 0) {
        setPrevCordinates(updatedCordinates);
        return;
      }

      canvasContext.fillStyle = "blue";
      canvasContext.lineWidth = 8;
      canvasContext.stroke();
      canvasContext.moveTo(prevCordinates.x, prevCordinates.y);
      canvasContext.lineTo(updatedCordinates.x, updatedCordinates.y);
      setPrevCordinates(updatedCordinates);
    };

    const enableDrawing = () => setIsDrawing(true);

    const endDrawing = () => {
      setPrevCordinates({ x: 0, y: 0 });
      setIsDrawing(false);
      onInput(canvasRef.current?.toDataURL() || "");
    };

    return (
      <>
        {label ? <label htmlFor={label}>{label}</label> : null}
        <canvas
          width="1028"
          height="768"
          ref={canvasRef}
          onMouseDown={enableDrawing}
          onMouseMove={startDrawing}
          onMouseUp={endDrawing}
          onMouseLeave={endDrawing}
          className={classes.CanvasField}
        />
      </>
    );
  }
);
