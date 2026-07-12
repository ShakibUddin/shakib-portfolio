import React from "react";
import Section from "./Section";

const frontend = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Redux Toolkit",
  "Zustand",
  "TanStack Query",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
];

const backend = ["C#", ".NET", "PostgreSQL", "Docker", "REST APIs"];

const engineering = [
  "Git",
  "API Integration",
  "Responsive Design",
  "Feature Development",
  "Code Reviews",
  "Agile",
];

const collaboration = [
  "Cross-functional Collaboration",
  "Requirements Gathering",
  "Feature Planning",
  "Working with Backend Teams",
  "Working with QA Teams",
  "Bug Investigation",
  "Problem Solving",
  "Ownership",
  "Clean Code",
];

const SkillGroup = ({ title, skills }) => (
  <div>
    <p className="font-mono text-[0.78rem] text-[#9aa1ac] font-semibold uppercase tracking-wider mb-3">
      {title}
    </p>

    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="text-[0.87rem] text-[#14171c] bg-white border border-[#e3e5ea] rounded-lg py-2 px-3 hover:border-[#2e5eff] hover:-translate-y-0.5 transition-all"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <Section
      id="skills"
      label="// SKILLS"
      title="What I work with"
      description="Frontend-first engineer with growing backend expertise and a collaborative approach to delivering quality software."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
        <SkillGroup title="Frontend" skills={frontend} />

        <SkillGroup title="Backend" skills={backend} />

        <SkillGroup title="Engineering" skills={engineering} />

        <SkillGroup title="Collaboration" skills={collaboration} />
      </div>
    </Section>
  );
};

export default Skills;
