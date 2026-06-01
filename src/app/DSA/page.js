"use client"

import { motion } from "framer-motion"

export default function DSA() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-purple-950 mb-8">
                📚 My DSA Master Sheet
            </h1>

            {/* Arrays */}
            <Section title="Arrays">
                <Point text="Contiguous memory allocation." />
                <Point text="Access → O(1)" />
                <Point text="Insert/Delete (middle) → O(n)" />
                <Point text="Patterns: Sliding Window, Two Pointers, Prefix Sum." />
            </Section>

            {/* Linked List */}
            <Section title="Linked List">
                <Point text="Dynamic memory allocation." />
                <Point text="Insert/Delete at head → O(1)" />
                <Point text="Cycle Detection → Floyd’s Algorithm." />
                <Point text="Reverse Linked List pattern." />
            </Section>

            {/* Stack */}
            <Section title="Stack">
                <Point text="LIFO structure." />
                <Point text="Push/Pop → O(1)" />
                <Point text="Used in: Balanced Parentheses, Next Greater Element." />
                <Point text="Monotonic Stack pattern." />
            </Section>

            {/* Queue / Deque */}
            <Section title="Queue / Deque">
                <Point text="FIFO structure." />
                <Point text="Enqueue/Dequeue → O(1)" />
                <Point text="Used in: BFS, Sliding Window Maximum." />
            </Section>

            {/* Hashing */}
            <Section title="Hashing">
                <Point text="HashMap / HashSet → O(1) average." />
                <Point text="Collision handling: Chaining." />
                <Point text="Used in: Two Sum, Frequency Counter." />
            </Section>

            {/* Searching */}
            <Section title="Searching">
                <Point text="Linear Search → O(n)" />
                <Point text="Binary Search → O(log n)" />
                <Point text="Binary Search on Answer pattern." />
            </Section>

            {/* Sorting */}
            <Section title="Sorting">
                <Point text="Bubble / Selection / Insertion → O(n²)" />
                <Point text="Merge Sort → O(n log n)" />
                <Point text="Quick Sort → Avg O(n log n)" />
                <Point text="Heap Sort → O(n log n)" />
            </Section>

            {/* Trees */}
            <Section title="Trees">
                <Point text="Binary Tree Traversals: Inorder, Preorder, Postorder." />
                <Point text="BST Search → O(log n) if balanced." />
                <Point text="Heap → Complete Binary Tree." />
            </Section>

            {/* Graphs */}
            <Section title="Graphs">
                <Point text="Representation: Adjacency List." />
                <Point text="BFS / DFS → O(V + E)" />
                <Point text="Topological Sort (DAG)." />
                <Point text="Dijkstra’s Algorithm → O(E log V)." />
            </Section>

            {/* Recursion */}
            <Section title="Recursion">
                <Point text="Base case + recursive case." />
                <Point text="Uses call stack." />
                <Point text="Backtracking = recursion + undo choice." />
            </Section>

            {/* Dynamic Programming */}
            <Section title="Dynamic Programming">
                <Point text="Overlapping subproblems + optimal substructure." />
                <Point text="Memoization (Top Down)." />
                <Point text="Tabulation (Bottom Up)." />
                <Point text="Classic: Knapsack, LIS, Matrix Chain." />
            </Section>

            {/* Advanced */}
            <Section title="Advanced Structures">
                <Point text="Trie → Prefix search O(L)." />
                <Point text="Segment Tree → Range Query O(log n)." />
                <Point text="Union Find → Nearly O(1)." />
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
