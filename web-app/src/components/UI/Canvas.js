import React from "react";

export const Canvas = (props) => {
  return (
    <canvas
      id={props.id}
      ref={props.ref}
      width={props.width}
      height={props.height}
    ></canvas>
  );
};

export const MemoizedCanvas = React.memo(Canvas);
