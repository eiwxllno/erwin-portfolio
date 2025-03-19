import React from "react";

function SkillItem({ name, icon }) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
      <div className="text-gray-800 dark:text-gray-200 mb-2">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
        {name}
      </h3>
    </div>
  );
}

export default SkillItem;
