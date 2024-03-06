import './App.css'
import { motion } from 'framer-motion'

function App() {
  return (
   <div>

      <motion.div className='box' 
      initial={{scale:1}}
      transition={{duration:2}}
      animate={{scale:2, rotate:360}}
      
      
      />

   </div>   

  )
}
export default App

