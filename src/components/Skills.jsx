import React from "react";
import skills from "../data/skillsData";
import SectionTitle from "./SectionTitle";
import SkillItem from "./SkillItem";

function Skills() {
  return (
    <div className="py-12">
      <SectionTitle>Skills</SectionTitle>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {skills.map((skill) => (
          <SkillItem key={skill.id} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
