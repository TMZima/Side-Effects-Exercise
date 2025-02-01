import { useEffect, useRef } from "react";
import "./Star.css";

function Star({ id, position, destroyStar }) {
  const starRef = useRef(null);

  useEffect(() => {
    const star = starRef.current;
    star.focus();
  }, []);

  function handleClick() {
    destroyStar(id);
  }

  return (
    <div
      ref={starRef}
      tabIndex="0"
      onClick={handleClick}
      style={{ left: position.x, top: position.y }}
      className="Star"
    >
      ⭐️
    </div>
  );
}
export default Star;
