"use client"

import { motion } from "framer-motion"

export default function JAVASCRIPT() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-purple-950 mb-8">
                ⚡ JavaScript Master Sheet
            </h1>

            {/* Variables */}
            <Section title="Variables">
                <Point text="var - Function scoped (avoid using)." />
                <Point text="let - Block scoped, reassignable." />
                <Point text="const - Block scoped, constant reference." />
            </Section>

            {/* Datatypes */}
            <Section title="Data Types">
                <Point text="Primitives: String, Number, Boolean, Null, Undefined, Symbol." />
                <Point text="Objects: Arrays, Functions, Objects." />
                <Point text="typeof operator checks type." />
            </Section>

            {/* Functions */}
            <Section title="Functions">
                <Point text="Function Declaration: function name() {}" />
                <Point text="Arrow Function: const name = () => {}" />
                <Point text="Callback Functions." />
                <Point text="Higher Order Functions (map, filter, reduce)." />
            </Section>

            {/* DOM Manipulation */}
            <Section title="DOM Manipulation">
                <Point text="document.getElementById('id')" />
                <Point text="document.querySelector('.class')" />
                <Point text="element.addEventListener('click', func)" />
                <Point text="element.innerHTML / element.textContent" />
            </Section>

            {/* Async JS */}
            <Section title="Asynchronous JavaScript">
                <Point text="Promises: .then() .catch()" />
                <Point text="Async / Await syntax." />
                <Point text="fetch API for network requests." />
                <Point text="Event Loop & Callback Queue." />
            </Section>

            {/* ES6+ Features */}
            <Section title="ES6+ Features">
                <Point text="Template Literals (`Hello ${name}`)." />
                <Point text="Destructuring Assignment." />
                <Point text="Spread (...) and Rest (...) operators." />
                <Point text="Modules (import / export)." />
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