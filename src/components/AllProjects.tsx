import { motion } from 'framer-motion';
import { projects, type Project } from '../data/portfolio';
import { SectionHeading } from './fx';
import ProjectCard from './ProjectCard';

export default function AllProjects({ onOpen }: { onOpen: (project: Project) => void }) {
  return (
    <>
      <SectionHeading
        kicker={`${projects.length} Verified Projects`}
        title="All Projects"
        aside={<p className="max-w-xs text-sm text-mist">Explore the complete project catalogue currently documented in this portfolio.</p>}
      />
      <motion.div
        className="gutter grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-5% 0px' }}
        transition={{ staggerChildren: 0.08 }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} onOpen={() => onOpen(project)} variant="grid" layoutIdPrefix="catalog-" />
        ))}
      </motion.div>
    </>
  );
}
