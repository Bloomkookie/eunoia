# EUNOIA Learning Platform

EUNOIA is a modern, interactive learning dashboard built to provide students with a streamlined educational experience. This project features a beautiful and responsive user interface where users can browse, search, and enroll in various programming and web development courses.

## 🚀 Features

- **Interactive Dashboard**: A sleek sidebar navigation system allowing users to switch between their Feed, Dashboard, Courses, Articles, and Settings.
- **Course Library**: Browse a catalog of structured courses including:
  - Data Structures and Algorithms (DSA)
  - Python
  - Web Development (HTML, CSS, JavaScript)
  - Modern Frameworks & Tools (React, Tailwind CSS, Node.js)
- **Search & Filtering**: Quickly find relevant courses using the built-in search functionality that filters by course titles and tags.
- **Dynamic Content rendering**: Seamless switching between different sections (Feed, Analytics Dashboard, Settings) without page reloads.
- **Modern UI**: Styled with Tailwind CSS, featuring a cohesive color palette (predominantly a soft pink theme), micro-animations, and glassmorphism-inspired elements.

## 🛠️ Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Library**: [React](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons & Fonts**: Custom SVGs / PNGs and [Geist](https://vercel.com/font) font.

## 📦 Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The application entry point is `src/app/page.js`.

## 📂 Project Structure

- `src/app/page.js`: The main dashboard entry containing the sidebar, navigation logic, and dynamic content rendering (Courses, Feed, Dashboard).
- `src/app/layout.js`: The root layout defining global fonts and styles.
- `public/`: Contains static assets like course thumbnails and icons.
- `src/app/[CourseName]/`: Individual pages/routes for each specific course (e.g., DSA, HTML, REACT).

## 💡 Future Enhancements

- Integrating an authentication system (e.g., Firebase or NextAuth).
- Connecting a database to track real user progress and statistics.
- Expanding the "Articles" and "Feed" sections with real data.
