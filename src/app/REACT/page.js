"use client"

import { motion } from "framer-motion"

export default function REACT() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-purple-950 mb-8">
                ⚛️ React Master Sheet
            </h1>

            {/* Core Concepts */}
            <Section title="Core Concepts">
                <Point text="Components: Building blocks (Functional)." />
                <Point text="JSX: JavaScript XML syntax." />
                <Point text="Virtual DOM: Efficient updates." />
                <Point text="One-way Data Flow (Parent to Child)." />
            </Section>

            {/* Props & State */}
            <Section title="Props & State">
                <Point text="Props: Read-only data passed to components." />
                <Point text="State: Managed data within component (useState)." />
                <Point text="State updates trigger re-renders." />
            </Section>

            {/* Hooks */}
            <Section title="Common Hooks">
                <Point text="useState: Manage local state." />
                <Point text="useEffect: Side effects (API calls, subscriptions)." />
                <Point text="useContext: Global state management." />
                <Point text="useRef: Reference DOM elements." />
            </Section>

            {/* Event Handling */}
            <Section title="Event Handling">
                <Point text="camelCase events (onClick, onChange)." />
                <Point text="Pass function references, don't call them." />
                <Point text="e.preventDefault() for form submission." />
            </Section>

            {/* Conditional Rendering */}
            <Section title="Conditional Rendering">
                <Point text="Ternary Operator: condition ? true : false" />
                <Point text="Logical &&: condition && component" />
            </Section>

            {/* Routing (React Router / Next.js) */}
            <Section title="Routing">
                <Point text="Link component for client-side navigation." />
                <Point text="Dynamic routes (e.g., /users/[id])." />
                <Point text="useRouter / useNavigate hook." />
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