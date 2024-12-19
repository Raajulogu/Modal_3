import { motion } from 'framer-motion';

const particleColors = [
  '#4f46e5', // Indigo
  '#7c3aed', // Purple
  '#2563eb', // Blue
  '#ec4899', // Pink
];

export const Particles = () => {
  return (
    <div className="particles absolute inset-0 opacity-0 pointer-events-none">
      {Array.from({ length: 16 }).map((_, i) => (
        <motion.div
          key={i}
          className="particle absolute left-1/2 top-1/2 w-2 h-2 rounded-full opacity-0 scale-0"
          style={{
            backgroundColor: particleColors[i % particleColors.length],
            boxShadow: `0 0 15px ${particleColors[i % particleColors.length]}`,
          }}
        />
      ))}
    </div>
  );
};