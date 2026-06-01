"use client"

import { motion } from "framer-motion"

export default function HTML() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-purple-950 mb-8">
                🌐 HTML Master Sheet
            </h1>

            {/* Document Structure */}
            <Section title="Document Structure">
                <Point text="<!DOCTYPE html> - Defines HTML5." />
                <Point text="<html> - Root element." />
                <Point text="<head> - Meta, title, links." />
                <Point text="<body> - Visible content." />
            </Section>

            {/* Text Formatting */}
            <Section title="Text Formatting">
                <Point text="<h1> to <h6> - Headings." />
                <Point text="<p> - Paragraph." />
                <Point text="<strong>, <em> - Bold, Italic." />
                <Point text="<span>, <div> - Inline, Block containers." />
            </Section>

            {/* Links & Images */}
            <Section title="Links & Images">
                <Point text="<a href='url'>Link</a> - Anchor tag." />
                <Point text="<img src='url' alt='text'> - Image tag." />
                <Point text="target='_blank' - Open in new tab." />
            </Section>

            {/* Lists */}
            <Section title="Lists">
                <Point text="<ul> - Unordered List (bullets)." />
                <Point text="<ol> - Ordered List (numbers)." />
                <Point text="<li> - List Item." />
            </Section>

            {/* Forms */}
            <Section title="Forms">
                <Point text="<form action='url'> - Form container." />
                <Point text="<input type='text|password|email'>." />
                <Point text="<textarea> - Multi-line text." />
                <Point text="<button type='submit'> - Submit button." />
            </Section>

            {/* Semantic HTML */}
            <Section title="Semantic HTML (SEO)">
                <Point text="<header>, <footer>, <nav>." />
                <Point text="<main>, <article>, <section>." />
                <Point text="Better accessibility & SEO ranking." />
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