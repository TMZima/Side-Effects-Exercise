import { useState, useRef } from "react";
import Star from "./Star";

function Space() {
  const [stars, setStars] = useState([]);
  const starIdRef = useRef(0);

  // function to generate a star object with random x/y coordinates and a unique id.
  const createStar = () => {
    const x = Math.random() * (window.innerWidth - STAR_SIZE);
    const y = Math.random() * (window.innerHeight - STAR_SIZE);
    const id = starIdRef.current++;
    return { id, x, y };
  };

  // function to add a new star to the stars array by updating the state.
  const addStar = () => {
    const newStar = createStar();
    setStars((prevStars) => [...prevStars, newStar]);
  };

  // useEffect hook to set interval to call create a star every 2.5 seconds.
  useEffect(() => {
    const intervalId = setInterval(() => {
      addStar();
    }, 2500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {stars.map((star) => (
        <Star key={star.id} x={star.x} y={star.y} />
      ))}
    </div>
  );
}

export default Space;
