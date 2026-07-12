import { experiences, projects } from "../utils/constants";
import EditorMock from "./EditorMock";
import Section from "./Section";
import Contact from "./Contact";
import Writing from "./Writing";
import Skills from "./Skills";
import Project from "./Project";
import Experience from "./Experience";
import Intro from "./Intro";
import Navigation from "./Navigation";
import Traits from "./Traits";

export default function Portfolio() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-[#f5f6f8] text-[#14171c] antialiased min-h-screen font-sans selection:bg-[#eaefff] selection:text-[#1c3fcc]">
      <a
        href="#main"
        className="absolute left-[-999px] focus:left-4 focus:top-4 bg-[#14171c] text-white px-4 py-2.5 rounded-lg z-[200]"
      >
        Skip to content
      </a>

      {/* Navigation */}
      <Navigation />

      <main id="main">
        {/* Hero Section */}
        <section
          id="top"
          className="min-h-screen max-w-7xl mx-auto px-6 py-16 flex flex-col"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start flex-1">
            <Intro />
            <EditorMock />
          </div>

          <Traits />
        </section>

        {/* Experience Section */}
        <Section
          id="experience"
          label="// EXPERIENCE"
          title="Where I've built things"
          description="Two roles, one throughline: turning designs and requirements into interfaces real users depend on."
        >
          <div className="flex flex-col gap-4">
            {experiences.map((exp, idx) => (
              <Experience exp={exp} key={idx} />
            ))}
          </div>
        </Section>

        {/* Selected Work Section */}
        <Section
          id="work"
          label="// SELECTED WORK"
          title="Things I've shipped"
          description="Two systems, two very different stakes — one moves inventory and money, the other handles patient care."
        >
          <div className="flex flex-col gap-6">
            {projects.map((proj, idx) => (
              <Project proj={proj} key={idx} />
            ))}
          </div>
        </Section>

        {/* Skills Section */}
        <Skills />

        {/* Writing/Elsewhere Section */}
        <Writing />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-7 pb-10">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4 flex-wrap text-[#9aa1ac] text-[0.85rem]">
          <span>
            © {currentYear} Shakib Uddin Bhuiyan. Nikunja-02, Dhaka, Bangladesh.
          </span>
          <span className="font-mono">Built with passion</span>
        </div>
      </footer>
    </div>
  );
}
