import { motion } from "framer-motion"

function Editor() {
    return (
        <motion.main
            className='editor'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1>Editor</h1>
        </motion.main>
    )
}

export default Editor