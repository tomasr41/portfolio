import React from "react";
import { projects } from "@/lib/data";
import {
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "./ui/card";
import { Github } from "lucide-react"; 
import { GlassCard } from "./ui/glass-card";
import MotionWrapper from "./MotionWrapper";
import { motion } from "framer-motion";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-12 relative">
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
            🚀 Proyectos
          </h2>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start"> {/* items-start evita que las tarjetas se estiren verticalmente por defecto */}
          {projects.map((project, index) => (
            <MotionWrapper key={project.title} delay={index * 0.2}>
              <GlassCard className="group overflow-hidden dark:border-purple-500/10 flex flex-col transition-all duration-300 hover:shadow-xl">
                <CardHeader className="bg-gradient-to-r from-blue-900/5 to-blue-500/5">
                  <CardTitle className="text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="flex flex-col gap-4 p-5">
                  {/* SOLO renderiza el contenedor si existe el video */}
                  {project.video && (
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg border border-border/20">
                      <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src={project.video}
                        title={`Video demo ${project.title}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  )}

                  {/* Descripción: Se adapta al espacio disponible */}
                  <ul className="list-disc ml-4 space-y-2 text-sm">
                    {project.description.map((desc, i) => (
                      <motion.li
                        key={i}
                        className="text-muted-foreground leading-tight"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        {desc}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {project.techStack?.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-0.5 text-[9px] font-bold uppercase rounded bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="flex justify-between items-center border-t border-border/10 bg-muted/5 pt-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    className="flex items-center text-xs font-semibold text-muted-foreground hover:text-blue-600 transition-colors"
                    whileHover={{ x: 2 }}
                  >
                    <Github className="h-3.5 w-3.5 mr-1.5" />
                    GitHub
                  </motion.a>
                  
                  {project.livedemo && (
                    <motion.a
                      href={project.livedemo}
                      target="_blank"
                      className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                      whileHover={{ scale: 1.05 }}
                    >
                      Live Demo 🔗
                    </motion.a>
                  )}
                </CardFooter>
              </GlassCard>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}