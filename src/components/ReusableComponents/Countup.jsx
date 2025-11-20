import { useState, useRef, useEffect } from "react";
import CountUp from "react-countup";
import "../../styles/ReusableComponents/Countup.css";

export default function Counter ({ value }) {
  const [startCounter, setStartCounter] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCounter(true);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) observer.observe(counterRef.current);

    return () => {
      if (counterRef.current) observer.unobserve(counterRef.current);
    };
  }, []);

  return (
    <div className="statistic" ref={counterRef}>
      {startCounter ? (
        <h1 className="counterUp">
          <CountUp
            start={0}
            end={value.end}
            duration={6}
            suffix={value.suffix}
            separator=""
          />
        </h1>
      ) : (
        <h1 className="counterUp">0</h1>
      )}
      <h6>{value.label}</h6>
    </div>
  );
};