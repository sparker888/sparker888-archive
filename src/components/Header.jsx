import React from "react";

export default function Header() {
  return (
    <nav className="bg-white shadow">
      <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize">
        <a
          href="/"
          className="text-gray-800 border-b-2 border-blue-500 mx-1.5 sm:mx-6"
        >
          About
        </a>

        <a
          href="daily-photo"
          className="border-b-2 border-transparent hover:text-gray-800 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          Daily Photo
        </a>

        <a
          href="skilltree"
          className="border-b-2 border-transparent hover:text-gray-800 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          Skill Tree
        </a>

        <a
          href="projects"
          className="border-b-2 border-transparent hover:text-gray-800 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          Projects
        </a>

        <a
          href="blog"
          className="border-b-2 border-transparent hover:text-gray-800 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          My Blog
        </a>
      </div>
    </nav>
  );
}
