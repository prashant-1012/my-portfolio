// import { useEffect, useRef, useState } from "react";

// export default function useScrollReveal(options = {}) {
//     const ref = useRef(null);
//     const [isVisible, setIsVisible] = useState(false);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     setIsVisible(true);
//                     observer.disconnect(); // animate once only
//                 }
//             },
//             { threshold: 0.15, ...options }
//         );

//         if (ref.current) observer.observe(ref.current);
//         return () => observer.disconnect();
//     }, []);

//     return { ref, isVisible };
// }