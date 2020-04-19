let localDrag = null;
export const setDrag = (drag) => localDrag = drag;
export const getDrag = () => localDrag;

let localDrop;
export const setDrop = (drop) => localDrop = drop;
export const getDrop = () => localDrop;

let localDirection;
export const setDirection = (direction) => localDirection = direction;
export const getDirection = () => localDirection;