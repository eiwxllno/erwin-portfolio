import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi"; // Using Feather Icons

function WorkItem({ imgUrl, title, tech, workUrl, sourceUrl }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
      {/* Project Image (Non-clickable) */}
      <img src={imgUrl} alt={title} className="w-full h-48 object-cover" />

      {/* Project Info (Non-clickable) */}
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {tech.join(" • ")}
        </p>

        {/* Links (Only these are clickable) */}
        <div className="flex items-center space-x-4">
          {/* Live Project Link */}
          <a
            href={workUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm text-blue-600 hover:underline dark:text-blue-400"
          >
            <FiExternalLink className="mr-1" /> Live Demo
          </a>

          {/* Source Code Link (Conditional) */}
          {sourceUrl && (
            <a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm text-gray-600 hover:underline dark:text-gray-400"
            >
              <FiGithub className="mr-1" /> Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default WorkItem;
