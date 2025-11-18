import { useState, useRef, useEffect } from "react";
import CountUp from "react-countup";

const Counter = ({ value }) => {
  const [startCounter, setStartCounter] = useState(false);
  const counterRef = useRef(null);

  // const Wrapper = animate ? motion.div : "div";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCounter(true);
        }
      },
      { threshold: 0.3 } // better than 1.0
    );

    if (counterRef.current) observer.observe(counterRef.current);

    return () => {
      if (counterRef.current) observer.unobserve(counterRef.current);
    };
  }, []);

  return (
    <div className="statistic" ref={counterRef}>
      <h2>
        {startCounter ? (
          <CountUp
            start={0}
            end={value.end}
            duration={6}
            suffix={value.suffix}
          />
        ) : (
          <h1 className="counterUp">0</h1>
        )}
      </h2>
      <p>{value.label}</p>
    </div>
  );
};

export default Counter;

// import { useState, useRef, useEffect } from "react";
// import CountUp from "react-countup";
// import "../../styles/ReusableComponents/Countup.css";
// import { motion } from "framer-motion";
// import { useTranslation } from "react-i18next";

// export default function Counter({ value, animate }) {
//   const { t } = useTranslation();

//   const [startCounter, setStartCounter] = useState(false);
//   const counterRef = useRef(null);

//   const Wrapper = animate ? motion.div : "div";

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           setStartCounter(true);
//         }
//       },
//       { threshold: 0.3 } // better than 1.0
//     );

//     if (counterRef.current) observer.observe(counterRef.current);

//     return () => {
//       if (counterRef.current) observer.unobserve(counterRef.current);
//     };
//   }, []);

//   return (
//     <div
//       {...(animate && {
//         initial: { opacity: 0, y: 40 },
//         whileInView: { opacity: 1, y: 0 },
//         transition: { duration: 0.6 },
//         viewport: { once: true },
//       })}
//       className="statistic"
//       ref={counterRef}
//     >
//       {startCounter ? (
//         <CountUp start={0} end={value.end} duration={6} separator="" suffix={value.suffix}>
//           {({ countUpRef }) => <h1 className="counterUp" ref={countUpRef}></h1>}
//         </CountUp>
//       ) : (
//         <h1 className="counterUp">0</h1>
//       )}
//       <h6>{value.label}</h6>
//     </div>
//   );
// }

// import { useState, useRef, useEffect } from "react";
// import CountUp from "react-countup";
// import "../../styles/ReusableComponents/Countup.css";
// import { motion } from "framer-motion";
// import { useTranslation } from "react-i18next";

// export default function Counter({ value, animate }) {
//   const { t } = useTranslation();

//   const [startCounter, setStartCounter] = useState(false);
//   const counterRef = useRef(null);

//   const Wrapper = animate ? motion.div : "div";

//   useEffect(() => {
//   if (typeof window === "undefined") return;  // FIX for Vercel

//   const observer = new IntersectionObserver((entries) => {
//     if (entries[0].isIntersecting) setStartCounter(true);
//   }, { threshold: 0.3 });

//   if (counterRef.current) observer.observe(counterRef.current);

//   return () => {
//     if (counterRef.current) observer.unobserve(counterRef.current);
//   };
// }, []);

//   return (
//     <div ref={counterRef} className="statistic">
//     <motion.div
//       {...(animate && {
//         initial: { opacity: 0, y: 40 },
//         whileInView: { opacity: 1, y: 0 },
//         transition: { duration: 0.6 },
//       })}
//       // viewport={{ once: true }}
//       viewport={{ once: true, margin: "200px" }}
//     >
//       {startCounter ? (
//         <CountUp
//           start={0}
//           end={value.end}
//           duration={6}
//           separator=""
//           suffix={value.suffix}
//         >
//           {({ countUpRef }) => <h1 className="counterUp" ref={countUpRef}></h1>}
//         </CountUp>
//       ) : (
//         <h1 className="counterUp">0</h1>
//       )}

//       <h6>{value.label}</h6>
//     </motion.div>
//   </div>
//   );
// }
