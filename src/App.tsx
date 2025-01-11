import { motion } from 'framer-motion';
import Experience from './components/Experience';
import { Github, Linkedin, Mail, Code, Microscope } from 'lucide-react';

function App() {
  return (
    <div className="h-screen w-screen overflow-hidden relative">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 animate-gradient-xy filter blur-[100px] opacity-50" />

      <Experience />

      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >

          <h1 className="text-7xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-sky-200 to-white tracking-tight">
            Elayabarathi M V
          </h1>

          <div className="flex items-center justify-center gap-4 text-2xl mb-8 font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-sky-200 to-white text-glow w-screen">
            <span className="mx-2 text-white">|</span>
            <Microscope className="inline-block text-white" />
            <span className='font-extrabold'>Biotechnologist</span>
            <span className="mx-2 text-white">|</span>
            <Code className="inline-block text-white" />
            <span className='font-extrabold'>Full Stack Developer</span>
            <span className="mx-2 text-white">|</span>

          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-8 z-10"
      >
        <a
          href="https://github.com/BadBoy-Github"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-white transition-colors transform hover:scale-110 duration-200"
        >
          <Github size={28} />
        </a>
        <a
          href="https://www.linkedin.com/in/elayabarathi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-white transition-colors transform hover:scale-110 duration-200"
        >
          <Linkedin size={28} />
        </a>
        <a
          href="mailto:elayabarathiedison@gmail.com?subject=Hello%20Elayabarathi&body=Hi%20Elayabarathi,%0A%0AI%20saw%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you."
          className="text-white hover:text-white transition-colors transform hover:scale-110 duration-200"
        >
          <Mail size={28} />
        </a>
      </motion.div>
    </div>
  );
}

export default App;