import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export function Button({ children, variant = 'primary', className, ...props }: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "px-8 py-3 rounded-xl font-medium transition-all",
        "hover:shadow-lg hover:shadow-blue-500/20",
        variant === 'primary' 
          ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white" 
          : "bg-gray-800 text-gray-100 hover:bg-gray-700",
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}