import React from "react";

const Traits = () => {
  const traits = [
    "Fast Learner",
    "Ownership Mindset",
    "Cross-functional Collaboration",
    "Problem Solver",
    "Feature Delivery",
    "Clear Communication",
  ];

  return (
    <div className="mt-auto py-10">
      <div className="flex flex-wrap gap-3">
        {[
          "🚀 Fast Learner",
          "🎯 Ownership Mindset",
          "🤝 Cross-functional Collaboration",
          "⚡ Problem Solver",
          "📦 Feature Delivery",
          "💬 Clear Communicator",
        ].map((trait) => (
          <span
            key={trait}
            className="
        inline-flex items-center
        rounded-xl
        border border-[#d8e4ff]
        bg-gradient-to-r from-[#f5f8ff] to-[#eef4ff]
        px-4 py-2.5
        text-[0.9rem]
        font-semibold
        text-[#2b3b5f]
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-md
        hover:border-[#2e5eff]
      "
          >
            {trait}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Traits;
