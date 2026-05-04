import { useState } from 'react'
import { motion } from 'framer-motion'
import {ExternalLink, ArrowUpRight } from 'lucide-react'
import { projects } from '../constants/data'
import { FaGithub } from 'react-icons/fa'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' }
  })
}

const ProjectCard = ({ project, index }) => {
  const [imgLoaded, setImgLoaded] = useState(false)
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index * 0.15}
      className="group flex flex-col rounded-2xl overflow-hidden bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 shadow-sm hover:shadow-xl hover:border-purple-200 dark:hover:border-purple-800/60 transition-all duration-300 hover:-translate-y-1"
    >
      {/* Project image */}
      <div className="relative overflow-hidden h-52">
        {!imgLoaded && (
          <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 dark:via-white/5 to-transparent -translate-x-full animate-[shimmer_1.5s_infinite]" />
          </div>
        )}
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          onLoad={() => setImgLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-purple-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/20 backdrop-blur-sm text-white text-sm font-medium hover:bg-white/30 transition-all border border-white/20"
            onClick={e => e.stopPropagation()}
          >
            <FaGithub size={16} />
            Code
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/20 backdrop-blur-sm text-white text-sm font-medium hover:bg-white/30 transition-all border border-white/20"
            onClick={e => e.stopPropagation()}
          >
            <ExternalLink size={16} />
            Live
          </a>
        </div>
      </div>

      {/* Card content */}
      <div className="flex flex-col flex-1 p-6">

        {/* Title row */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200">
            {project.title}
          </h3>
          <ArrowUpRight
            size={18}
            className="shrink-0 text-gray-300 dark:text-gray-600 group-hover:text-purple-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
          />
        </div>

        {/* Description */}
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1 mb-5">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-medium rounded-full bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border border-purple-100 dark:border-purple-800"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer links */}
        <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-gray-700/50">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <FaGithub size={14} />
            View Code
          </a>
          <div className="w-px h-4 bg-gray-200 dark:bg-gray-700" />
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <ExternalLink size={14} />
            Live Demo
          </a>
        </div>

      </div>
    </motion.div>
  )
}

const Projects = () => {
  return (
    
    <section
      id="projects"
      className="py-24 px-6 bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-purple-600 dark:text-purple-400">
            Projects
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
            Things I've built
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            A selection of projects that showcase my frontend skills — from scalable SaaS platforms to real-time features.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
            />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.4}
          className="text-center mt-14"
        >
          <p className="text-gray-500 dark:text-gray-400 mb-4 text-sm">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/prashant-1012"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium text-sm hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <FaGithub size={18} />
            View GitHub Profile
          </a>
        </motion.div>

      </div>
    </section>
   
  )
}

export default Projects