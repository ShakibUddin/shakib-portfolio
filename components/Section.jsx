"use client";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Section({ id, label, title, description, children }) {
  const [revealRef, revealClass] = useScrollReveal();

  return (
    <section
      id={id}
      className="py-[72px] border-t border-[#e3e5ea] first:border-t-0"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={revealRef}
          className={`mb-9 max-w-[60ch] transition-all duration-500 ease-in-out ${revealClass}`}
        >
          <span className="font-mono text-[0.78rem] text-[#2e5eff] font-semibold block mb-[10px] tracking-[0.02em]">
            {label}
          </span>
          <h2 className="font-display font-bold tracking-tight text-[clamp(1.5rem,3vw,2rem)] text-[#14171c] mb-[10px]">
            {title}
          </h2>
          <p className="text-[#5b6270] m-0">{description}</p>
        </div>
        <div
          className={`transition-all duration-500 ease-in-out ${revealClass}`}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
