"use client"

import { motion } from "framer-motion"

export default function PYTHON() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-purple-950 mb-8">
                🐍 Python Master Sheet
            </h1>

            {/* Basics */}
            <Section title="Basics & Syntax">
                <Point text="Interpreted, high-level language." />
                <Point text="Indentation is mandatory (4 spaces)." />
                <Point text="Variables: Dynamic typing (no 'int', 'char')." />
                <Point text="Comments: # for single line, ''' ''' for multi-line." />
            </Section>

            {/* Data Types */}
            <Section title="Data Types">
                <Point text="int, float, bool, str, None." />
                <Point text="List: [1, 2, 3] (Mutable, Ordered)." />
                <Point text="Tuple: (1, 2, 3) (Immutable, Ordered)." />
                <Point text="Set: {1, 2, 3} (Mutable, Unordered, Unique)." />
                <Point text="Dict: {'key': 'value'} (Key-Value pair)." />
            </Section>

            {/* Control Flow */}
            <Section title="Control Flow">
                <Point text="if, elif, else statements." />
                <Point text="for loop: iterate over sequences." />
                <Point text="while loop: execute as long as condition is true." />
                <Point text="break, continue, pass keywords." />
            </Section>

            {/* Functions */}
            <Section title="Functions">
                <Point text="def function_name(args):" />
                <Point text="return statement to send back result." />
                <Point text="Lambda functions: lambda x: x + 1" />
                <Point text="Args (*args) and Kwargs (**kwargs)." />
            </Section>

            {/* OOP */}
            <Section title="Object Oriented Programming">
                <Point text="Class & Object creation." />
                <Point text="__init__ method (Constructor)." />
                <Point text="self parameter refers to current instance." />
                <Point text="Inheritance, Encapsulation, Polymorphism." />
            </Section>

            {/* Exception Handling */}
            <Section title="Exception Handling">
                <Point text="try, except, else, finally blocks." />
                <Point text="Catching specific exceptions." />
                <Point text="Raising exceptions with 'raise'." />
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