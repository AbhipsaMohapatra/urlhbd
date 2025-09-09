import { useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import './App.css'
import Lenis from "lenis";
function App() {
  const [loading, setLoading] = useState("");
  const [open, setOpen] = useState(false);
  const [letter, setLetter] = useState(false);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  const positions = [
    // Top edge
    { top: "2%", left: "2%", size: "w-36 h-36" ,src: "aot1.jpg"},
    { top: "3%", left: "25%", size: "w-40 h-40",src: "aot2.jpg" },
    { top: "5%", left: "55%", size: "w-32 h-32" ,src: "aot3.jpg"},
    { top: "4%", left: "85%", size: "w-36 h-36",src: "aot4.jpg" },

    // Upper-mid
    { top: "15%", left: "10%", size: "w-36 h-36",src: "aot5.jpg"  },
    { top: "18%", left: "40%", size: "w-40 h-40",src: "aot6.webp"  },
    { top: "12%", left: "70%", size: "w-32 h-32",src: "aot7.webp"  },

    // Left side
    { top: "25%", left: "2%", size: "w-36 h-36",src: "aot8.webp"  },
    { top: "45%", left: "4%", size: "w-40 h-40",src: "aot6.webp"  },
    { top: "65%", left: "6%", size: "w-36 h-36",src: "aot7.webp"  },
    { top: "85%", left: "3%", size: "w-32 h-32" ,src: "aot8.jpg" },

    // Right side
    { top: "20%", left: "92%", size: "w-36 h-36",src: "aot9.jpg"  },
    { top: "40%", left: "94%", size: "w-40 h-40",src: "aot10.webp"  },
    { top: "60%", left: "90%", size: "w-36 h-36",src: "aot7.webp" },
    { top: "80%", left: "95%", size: "w-32 h-32",src: "aot1.jpg" },

    // Middle scattered
    { top: "30%", left: "30%", size: "w-40 h-40",src: "aot11.jpg" },
    { top: "35%", left: "65%", size: "w-36 h-36",src: "aot13.webp"  },
    { top: "50%", left: "45%", size: "w-40 h-40",src: "aot3.jpg" },
    { top: "55%", left: "70%", size: "w-36 h-36",src: "aot12.jpg" },
    { top: "42%", left: "20%", size: "w-32 h-32",src: "aot14.jpg" },

    // Lower-mid
    { top: "68%", left: "30%", size: "w-40 h-40",src: "aot4.jpg"  },
    { top: "72%", left: "55%", size: "w-36 h-36",src: "aot7.webp" },
    { top: "78%", left: "75%", size: "w-40 h-40",src: "aot2.jpg" },

    // Bottom edge
    { top: "92%", left: "5%", size: "w-36 h-36",src: "aot4.jpg" },
    { top: "94%", left: "30%", size: "w-40 h-40",src: "aot5.jpg" },
    { top: "90%", left: "55%", size: "w-36 h-36",src: "aot10.webp" },
    { top: "95%", left: "80%", size: "w-40 h-40",src: "aot14.jpg"  },
    { top: "92%", left: "92%", size: "w-36 h-36",src: "aot1.jpg" },
  ];

  useGSAP(() => {
    document.querySelectorAll(".elems").forEach((elem) => {
      let image = elem.querySelector("img");
      let xTransform = gsap.utils.random(-100, 100);
      let t = gsap.timeline();

      // Set the initial state of the element to be scaled down
      t.set(
        image,
        { transformOrigin: `${xTransform < 0 ? 0 : "100%"}` },
        "start"
      )
        .to(
          image,
          {
            scale: 0,
            scrollTrigger: {
              trigger: image,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          },
          "start"
        )
        .to(
          image,
          {
            xPercent: xTransform,
            ease: "none",
            scrollTrigger: {
              trigger: image,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
          "start"
        );
    });
  });
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleClick = async () => {
    if(letter){
      setLetter(false);
      return;
    }
    setOpen(true);
    setLoading(
      "Heyyy !! how are you doing, sorry but it might take some time ....."
    );
    await sleep(3000);
    setLoading(
      "Your Device might get hacked but seems like you have already clicked the wrong link ....."
    );
    await sleep(3000);
    setLoading("");
    setOpen(false);
    setLetter(true);
  };

  return (
    <>
      <div className="relative text-4xl min-h-[200vh] w-full bg-slate-900 overflow-hidden">
        {positions.map((pos, index) => (
          <div key={index} className="elems">
            <img
              src={pos.src} // demo images
              alt={`Random ${index}`}
              className={`absolute rounded-xl shadow-lg ${pos.size} image`}
              style={{ top: pos.top, left: pos.left }}
            />
          </div>
        ))}
      </div>
      <div className=" fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center  pb-10">
        <h2 className="text-4xl font-bold text-white font-serif ">
          Happy Birthday 💕
        </h2>
      </div>
      <div className=" relative h-[100vh] w-full  bg-black p-10 cake1">
        <div className="bg-gradient-to-b from-pink-700 via-pink-600 to-white w-full sm:w-1/2 mx-auto p-10 my-[20%] sm:my-20 border-amber-200 animate-pulse ">
          <h2 className="font-mono text-center text-3xl">Happy Birthday Rith</h2>
          <p className="italic text-xl my-3 text-center">
            May you have a wonderful day ahead
          </p>
          <button
            className="text-xl bg-cyan-400 p-3 w-fit block mx-auto rounded-md shadow-xl cursor-pointer hover:bg-amber-300 hover:scale-105 transition-all ease-in-out duration-150"
            onClick={handleClick}
          >
            {letter?"Close Letter":"Click Here"}
          </button>
          {open && (
            <div className="mx-auto p-10 text-2xl text-center border my-3">
              {loading}
            </div>
          )}
          {letter && (
            <div
              className="
    relative mx-auto my-3
    max-w-xs sm:max-w-sm md:max-w-md
    p-6 sm:p-8 md:p-10
    font-display
      font-bold 
    border-4 border-yellow-700
    bg-gradient-to-br from-yellow-50 to-yellow-100
    shadow-lg shadow-yellow-900/40
    rounded-xl
    text-xl
    broken-edges
  "
            >
              <div
                className="absolute inset-0 opacity-10 bg-center bg-no-repeat bg-contain pointer-events-none"
                style={{ backgroundImage: "url('/rose.webp')" }}
              ></div>

              <h2 className="text-xl my-1">Dear Ritesh,</h2>
              <p className="text-xl">Wishing you a very Happy Birthday ,I have recevied your letter and it was lovely,
               well this is a reply letter, Many many happy returns of the day and may all your wishes get fulfilled.</p>
              <p className="my-4 text-xl">Enjoy your day!!</p> 
              <p>Yours Truly</p>
              <p>Abhipsa Mohapatra</p>

            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
