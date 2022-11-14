import React from "react";
import styles from "./Text_Animation.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
const TextAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);
  const circleRef = useRef(null);


  useEffect(() => {
    const tl = gsap.timeline({
        scrollTrigger:{
            trigger:".heading",
            start: "0%",
            end: "100%",
            scrub: "1",
        }
    })


    tl.fromTo(".heading", { scale: 6 }, { scale: 1, top: "0" , left:"50%", x:"-50%", y:"-50%" });


  })



//   const tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: "nav",
//       start: "0%",
//       end: "100%",
//       scrub: "1",
//     },
//   });
//   const tl2 = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".logo",
//       start: "0%",
//       end: "100%",
//       scrub: "1",
//       scrub: "1",
//     },
//   });

//   tl2.fromTo(".logo", { scale: 6 }, { scale: 1, top: "2rem", left: "3rem" });

  return (
    <nav ref={circleRef}>
      <ul>
        <li>Fabric</li>
        <li>Wallpaper</li>
        <li>Inspiration</li>
        <li>The Fold</li>
      </ul>
      <div className="logo">
        <h1 className="heading">REBECCAATWOOD</h1>
      </div>
      <ul>
        <li>Fabric</li>
        <li>Wallpaper</li>
        <li>Inspiration</li>
        <li>The Fold</li>
      </ul>
    </nav>
  );
};

export default TextAnimation;
