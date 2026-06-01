"use client"

import Link from 'next/link';
import { useState } from 'react';


// Data for Courses
const coursesData = [
  { title: "DSA", parts: "32", img: "/dsa.png", link: "/DSA", tags: ["algorithm", "data structure", "coding"] },
  { title: "PYTHON", parts: "25", img: "/python.png", link: "/PYTHON", tags: ["backend", "scripting", "ai"] },
  { title: "HTML", parts: "25", img: "/html.png", link: "/HTML", tags: ["frontend", "web", "markup"] },
  { title: "CSS", parts: "25", img: "/CSS.png", link: "/CSS", tags: ["frontend", "web", "design"] },
  { title: "JAVASCRIPT", parts: "25", img: "/javascript.png", link: "/JAVASCRIPT", tags: ["frontend", "backend", "web"] },
  { title: "Tailwind CSS", parts: "12", img: "/tailwindcss.png", link: "/TAILWINDCSS", tags: ["frontend", "css", "design"] },
  { title: "Node JS", parts: "25", img: "/nodejs.png", link: "/NODEJS", tags: ["backend", "server", "js"] },
  { title: "REACT", parts: "25", img: "/react.png", link: "/REACT", tags: ["frontend", "framework", "js"] },
];

export default function Page() {
  const [activeTab, setActiveTab] = useState("Courses");
  const [searchQuery, setSearchQuery] = useState("");
  const [hasNewMail, setHasNewMail] = useState(false);
  const [hasNotification, setHasNotification] = useState(true);

  // Filter courses based on search query
  const filteredCourses = coursesData.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleNavClick = (tabName) => {
    setActiveTab(tabName);
  };

  const toggleMail = () => {
    setHasNewMail(!hasNewMail);
    alert(hasNewMail ? "No new messages." : "You have 1 new message from Admin.");
  };

  const toggleNotification = () => {
    setHasNotification(!hasNotification);
    alert(hasNotification ? "Notifications cleared." : "You have a new course alert!");
  };

  // Logic to render different content based on activeTab
  const renderContent = () => {
    switch (activeTab) {
      case "Courses":
        return (
          <>
            {/* Top Bar with Search */}
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-semibold text-gray-800">COURSES</h2>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search courses..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-4 pr-10 py-2 border rounded-full text-sm text-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all w-64"
                  />
                  <span className="absolute right-3 top-2.5 text-gray-400 text-sm">🔍</span>
                </div>
                <div className="w-9 h-9 flex items-center justify-center bg-white rounded-full shadow cursor-pointer hover:scale-105 transition-transform" onClick={toggleMail}>
                  ✉️ {hasNewMail && <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-pink-500 rounded-full border-2 border-white"></span>}
                </div>
                <div className="relative w-9 h-9 flex items-center justify-center bg-white rounded-full shadow cursor-pointer hover:scale-105 transition-transform" onClick={toggleNotification}>
                  🔔 {hasNotification && <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-pink-500 rounded-full border-2 border-white animate-pulse"></span>}
                </div>
              </div>
            </div>

            {/* Courses Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.length > 0 ? (
                filteredCourses.map((course) => (
                  <CourseCard key={course.title} {...course} />
                ))
              ) : (
                <div className="col-span-full text-center py-10 text-gray-500 bg-white rounded-xl shadow-sm">
                  <p className="text-lg">No courses found matching "{searchQuery}"</p>
                  <button onClick={() => setSearchQuery("")} className="mt-4 text-pink-500 hover:underline">Clear Search</button>
                </div>
              )}
            </div>
          </>
        );

      case "Feed":
        return (
          <div className="bg-white p-6 rounded-xl shadow-md min-h-[50vh]">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Feed</h2>
            <div className="space-y-4">
              <FeedItem title="New React Course Added!" date="2 hours ago" desc="Check out the new React Master Sheet." />
              <FeedItem title="System Update" date="1 day ago" desc="We have improved the search functionality." />
              <FeedItem title="Welcome to EUNOIA" date="3 days ago" desc="Start your learning journey today!" />
            </div>
          </div>
        );

      case "Dashboard":
        return (
          <div className="bg-white p-6 rounded-xl shadow-md min-h-[50vh]">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Learning Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <StatCard title="Courses Enrolled" value="8" />
              <StatCard title="Completed" value="0" />
              <StatCard title="Hours Spent" value="1.5" />
            </div>
            <p className="text-gray-500 italic">More detailed analytics coming soon...</p>
          </div>
        );

      case "Settings": // "Setting" in nav, normalizing here if needed or keeping logic simple
      case "Setting":
        return (
          <div className="bg-white p-6 rounded-xl shadow-md max-w-lg mx-auto mt-10">
            <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-2">Profile Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Display Name</label>
                <input type="text" defaultValue="User" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Email Notifications</span>
                <button className="bg-pink-500 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none">
                  <span className="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
                </button>
              </div>
              <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500" onClick={() => alert("Settings Saved!")}>
                Save Changes
              </button>
            </div>
          </div>
        );

      default:
        return (
          <div className="bg-white p-10 rounded-xl shadow-md text-center">
            <h2 className="text-2xl font-bold text-gray-400 mb-4">Coming Soon</h2>
            <p className="text-gray-500">The <strong>{activeTab}</strong> page is under construction.</p>
            <button onClick={() => setActiveTab("Courses")} className="mt-6 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition">Go Back to Courses</button>
          </div>
        );
    }
  };

  return (
    <div className="flex">
      {/* Sidebar - Remains mostly static but logic drives functionality */}
      <aside className="w-64 bg-white px-5 py-6 shadow-md flex flex-col h-screen sticky top-0">
        <h1 className="text-xl font-bold text-pink-500 mb-8 cursor-pointer" onClick={() => setActiveTab("Courses")}>EUNOIA</h1>

        <div className="flex items-center gap-3 mb-8 cursor-pointer" onClick={() => setActiveTab("Setting")}>
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          <div>
            <p className="text-sm font-semibold text-gray-800">Hi, User</p>
            <p className="text-xs text-gray-500">Student</p>
          </div>
        </div>

        <nav className="space-y-2 text-gray-600 text-sm flex-1">
          <NavItem icon="📄" text="Feed" isActive={activeTab === "Feed"} onClick={() => handleNavClick("Feed")} />
          <NavItem icon="📊" text="Dashboard" isActive={activeTab === "Dashboard"} onClick={() => handleNavClick("Dashboard")} />
          <NavItem icon="📚" text="Courses" isActive={activeTab === "Courses"} onClick={() => handleNavClick("Courses")} />
          <NavItem icon="📰" text="Articles" isActive={activeTab === "Articles"} onClick={() => handleNavClick("Articles")} />
          <NavItem icon="⚙️" text="Setting" isActive={activeTab === "Setting"} onClick={() => handleNavClick("Setting")} />
        </nav>

        <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-500 hover:bg-pink-50 cursor-pointer text-sm" onClick={() => alert("Logging out...")}>
          🚪 <span>Logout</span>
        </div>
      </aside>

      {/* Main Content Area - Dynamic */}
      <main className="flex-1 p-8">
        {renderContent()}
      </main>
    </div>
  );
}

// --- Helper Components ---

function FeedItem({ title, date, desc }) {
  return (
    <div className="border-b pb-3 last:border-0 last:pb-0">
      <div className="flex justify-between items-center mb-1">
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <span className="text-xs text-gray-400">{date}</span>
      </div>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  )
}

function StatCard({ title, value }) {
  return (
    <div className="bg-pink-50 p-4 rounded-lg text-center">
      <h3 className="text-3xl font-bold text-pink-600 mb-1">{value}</h3>
      <p className="text-sm text-gray-600">{title}</p>
    </div>
  )
}

// Helper Components for Cleaner Code

function NavItem({ icon, text, isActive, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors ${isActive
        ? "bg-pink-50 text-pink-500 font-semibold"
        : "hover:bg-pink-50 text-gray-600"
        }`}
    >
      <span>{icon}</span>
      <span>{text}</span>
    </div>
  );
}

function CourseCard({ title, parts, img, link }) {
  return (
    <div className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition-shadow">
      <div className="relative h-36 bg-pink-100 rounded-lg mb-4 overflow-hidden group">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <h3 className="text-lg text-purple-950 font-semibold">{title}</h3>
      <p className="text-sm text-gray-500 mb-4">{parts} parts</p>
      <Link href={link}>
        <button
          className="w-full border border-pink-400 text-pink-500 py-2 rounded-lg hover:bg-pink-500 hover:text-white transition-colors active:scale-95 transform"
          onClick={(e) => {
            // Optional: Add logging or analytics here
            console.log(`Navigating to ${title}`);
          }}
        >
          Start Now
        </button>
      </Link>
    </div>
  );
}
