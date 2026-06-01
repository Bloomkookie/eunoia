"use client"

import { motion } from "framer-motion"

export default function CSS() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-purple-950 mb-8">
                🎨 CSS Master Sheet
            </h1>

            {/* Selectors */}
            <Section title="Selectors">
                <Point text="* { } - Universal selector." />
                <Point text="element { } - Type selector." />
                <Point text=".class { } - Class selector." />
                <Point text="#id { } - ID selector." />
            </Section>

            {/* Box Model */}
            <Section title="Box Model">
                <Point text="Content - The actual content." />
                <Point text="Padding - Space inside border." />
                <Point text="Border - Line around padding." />
                <Point text="Margin - Space outside border." />
            </Section>

            {/* Flexbox */}
            <Section title="Flexbox">
                <Point text="display: flex;" />
                <Point text="justify-content: center | space-between." />
                <Point text="align-items: center | flex-start." />
                <Point text="flex-direction: row | column." />
            </Section>

            {/* Grid */}
            <Section title="Grid Layout">
                <Point text="display: grid;" />
                <Point text="grid-template-columns: 1fr 1fr;" />
                <Point text="gap: 10px;" />
            </Section>

            {/* Positioning */}
            <Section title="Positioning">
                <Point text="static - Default." />
                <Point text="relative - Relative to itself." />
                <Point text="absolute - Relative to nearest positioned ancestor." />
                <Point text="fixed - Relative to viewport." />
            </Section>

            {/* Responsive */}
            <Section title="Responsive Design">
                <Point text="@media (max-width: 768px) { ... }" />
                <Point text="rem / em units instead of px." />
                <Point text="max-width: 100%; for images." />
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