import { PROJECTS } from "../constants"
import { motion } from "framer-motion"
import Card from "./Card"
import { GiDuration } from "react-icons/gi"


const containerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.4,
    },
  },
}

const itemVaraints = {
  hidden: { opacity:0, y:0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
}

const Projects = () => {
  return(
    <div id="projects">
        <motion.h2 
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={ {once: true} }
        className="mt-20 text-center text-4xl font-semibold">Projects</motion.h2>
        <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{once: true}} 
        className="flex flex-wrap justify-center py-8">
            {PROJECTS.map((project, index) => (
              <motion.div
              variants={itemVaraints} 
              key={index}>
                < Card  image={project.image}
                title={project.title}
                subtitle={project.subtitle}
                link={project.link}
                />
              </motion.div>
            ))}
        </motion.div>
    </div>
  )
}

export default Projects