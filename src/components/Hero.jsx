import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/vbRushProfile.png";
import { motion } from "framer-motion"

const container = (delay) => ({
    hidden: {x: 100, opacity: 0},
    visible: {x: 0, opacity: 1}, 
    transition: {duration: 1, delay: delay}
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-36">
      <div className="flex flex-row">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 
            variants={container(1.2)}
            initial="hidden"
            animate="visible"
            className="pb-10 text-6xl font-thin tracking-tight lg:mt-16 text-8xl pl-10">Vansh Bhardwaj</motion.h1>
            <motion.span 
            variants={container(1.7)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-cyan-500 via-blue-700 to-purple-600 bg-clip-text text-3xl tracking-tight text-transparent pl-10">
              Full Stack Developer
            </motion.span>
            <motion.p 
            variants={container(2.2)}
            initial="hidden"
            animate="visible"
            className="pl-10 my-2 max-w-xl py-6 font-light tracking-tighter">{HERO_CONTENT}</motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 lg:-mt-10 flex justify-center lg:justify-end">
          <motion.img 
          initial={{x:100,opacity:0}}
          animate={{x:0,opacity:1}}
          transition={{duration:1, delay:1.2}}
          src={profilePic} alt="Vansh Bhardwaj Profile Pic" className="rounded-2xl shadow-lg" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
