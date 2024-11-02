import { RiReactjsLine } from "react-icons/ri";
import { TbBrandDjango } from "react-icons/tb"; 
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaServer } from "react-icons/fa"; // Imported Express icon
import { motion } from "framer-motion";

const iconvariants = (duration) => ({
    initial: {y: 0},
    animate: {
        y: [ 10, -10 ],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: "infinity",
            repeatType: "reverse", 
        }
    }
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 
      whileInView={{opacity:1, y: 0}}
      initial={{opacity:0, y:-100}}
      transition={{duration: 1.5}}
      className="my-20 text-center text-4xl">Technologies</motion.h2>
      <motion.div 
      whileInView={{opacity: 1,x:0}}
      initial={{opacity:0, x: -100}}
      transition={{duration: 1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
      <motion.div 
      variants={iconvariants(2.5)}
      initial="initial"
      animate="animate"
      className="rounded-2xl border-4 border-neutral-800 p-4"><RiReactjsLine className="text-7xl text-cyan-400" /> {/* React icon */}</motion.div>
      <div className="rounded-2xl border-4 border-neutral-800 p-4"><TbBrandDjango className="text-7xl text-yellow-600" /> {/* Django icon */}</div>
      <div className="rounded-2xl border-4 border-neutral-800 p-4"><SiMongodb className="text-7xl text-green-600" /> {/* MongoDB icon */}</div>
      <div className="rounded-2xl border-4 border-neutral-800 p-4"><FaNodeJs className="text-7xl text-green-500" /> {/* Node.js icon */}</div>
      <div className="rounded-2xl border-4 border-neutral-800 p-4"><FaServer className="text-7xl text-gray-700" /> {/* Express icon */}</div>
      </motion.div>
    </div>
  )
}

export default Technologies
