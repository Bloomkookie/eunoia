"use client"

import { motion } from "framer-motion"

export default function TAILWINDCSS() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-purple-950 mb-8">
                🌊 Tailwind CSS Master Sheet
            </h1>

            {/* Utility First */}
            <Section title="Utility First">
                <Point text="Classes map directly to CSS properties." />
                <Point text="text-center, p-4, m-2, flex." />
                <Point text="No need to write custom CSS files." />
            </Section>

            {/* Colors & Spacing */}
            <Section title="Colors & Spacing">
                <Point text="text-red-500, bg-blue-100." />
                <Point text="p-1 = 0.25rem (4px)." />
                <Point text="m-4 = 1rem (16px)." />
                <Point text="Standard scale (1, 2, 4, 8...)." />
            </Section>

            {/* Typography */}
            <Section title="Typography">
                <Point text="text-xs to text-9xl." />
                <Point text="font-bold, font-light." />
                <Point text="leading-tight (line-height)." />
                <Point text="tracking-wide (letter-spacing)." />
            </Section>

            {/* Flexbox & Grid */}
            <Section title="Flexbox & Grid">
                <Point text="flex, flex-col, items-center, justify-between." />
                <Point text="grid, grid-cols-1, gap-4." />
                <Point text="place-items-center." />
            </Section>

            {/* Responsive Design */}
            <Section title="Responsive Design">
                <Point text="sm: (640px), md: (768px)." />
                <Point text="lg: (1024px), xl: (1280px)." />
                <Point text="Mobile-first approach (Base styles -> sm -> md)." />
            </Section>

            {/* States */}
            <Section title="States">
                <Point text="hover:bg-blue-600." />
                <Point text="focus:ring-2." />
                <Point text="active:scale-95." />
                <Point text="disabled:opacity-50." />
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