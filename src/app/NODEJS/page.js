"use client"

import { motion } from "framer-motion"

export default function NODEJS() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-purple-950 mb-8">
                🟢 Node.js Master Sheet
            </h1>

            {/* Introduction */}
            <Section title="Introduction">
                <Point text="Runtime environment for executing JavaScript." />
                <Point text="Built on Chrome V8 Engine." />
                <Point text="Non-blocking I/O event loop." />
                <Point text="Single-threaded architecture." />
            </Section>

            {/* Modules */}
            <Section title="Modules">
                <Point text="CommonJS: require() and module.exports." />
                <Point text="ES Modules: import and export." />
                <Point text="Built-in: fs, http, path, os, events." />
            </Section>

            {/* NPM */}
            <Section title="NPM (Node Package Manager)">
                <Point text="package.json: Project metadata & dependencies." />
                <Point text="npm install <package>: Install dependencies." />
                <Point text="node_modules: Where packages are stored." />
            </Section>

            {/* Express.js (Popular Framework) */}
            <Section title="Express.js Basics">
                <Point text="const app = express();" />
                <Point text="app.get('/', (req, res) => { ... })" />
                <Point text="Middleware: app.use(express.json())" />
                <Point text="Routing: app.use('/api', router)" />
            </Section>

            {/* File System (fs) */}
            <Section title="File System">
                <Point text="fs.readFile() / fs.readFileSync()" />
                <Point text="fs.writeFile() / fs.appendFile()" />
                <Point text="Always prefer async methods." />
            </Section>

            {/* Events */}
            <Section title="Events">
                <Point text="EventEmitter class." />
                <Point text="emit('event') triggers listeners." />
                <Point text="on('event', callback) listens for events." />
            </Section>
        </div>
    )
}

function Section({ title, children }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-md mb-6"
        >
            <h2 className="text-xl font-semibold text-purple-900 mb-3">
                {title}
            </h2>
            <ul className="space-y-2 text-gray-700 text-sm">
                {children}
            </ul>
        </motion.div>
    )
}

function Point({ text }) {
    return (
        <li className="flex gap-2">
            <span className="text-purple-600">•</span>
            <span>{text}</span>
        </li>
    )
}