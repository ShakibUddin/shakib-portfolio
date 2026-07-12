import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-[72px] border-t border-[#e3e5ea]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#14171c] text-white rounded-[20px] p-12 max-md:p-6 grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
          <div>
            <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] mb-3 font-bold">
              Let's build something that works.
            </h2>
            <p className="text-[#aeb4c0] m-0 max-w-[44ch]">
              Open to new opportunities — happy to talk about a role, a project,
              or just frontend engineering in general.
            </p>
          </div>
          <div className="flex flex-col gap-2.5">
            {[
              {
                label: "EMAIL",
                val: "shakibuddinbhuiyan@gmail.com",
                href: "mailto:shakibuddinbhuiyan@gmail.com",
                icon: "→",
              },
              {
                label: "PHONE",
                val: "+880 1794 508014",
                href: "tel:+8801794508014",
                icon: "→",
              },
              {
                label: "LINKEDIN",
                val: "linkedin.com/in/md-shakib-uddin",
                href: "https://linkedin.com/in/md-shakib-uddin",
                icon: "↗",
              },
              {
                label: "GITHUB",
                val: "github.com/ShakibUddin",
                href: "https://github.com/ShakibUddin",
                icon: "↗",
              },
            ].map((link, i) => (
              <a
                key={i}
                href={link.href}
                target={link.icon === "↗" ? "_blank" : undefined}
                rel={link.icon === "↗" ? "noopener noreferrer" : undefined}
                className="flex items-center justify-between gap-3 no-underline text-white bg-[#1e222a] border border-[#2b303a] rounded-5 p-3 px-4 text-[0.92rem] hover:border-[#2e5eff] hover:bg-[#20242d] transition-colors"
              >
                <span className="flex flex-col">
                  <small className="text-[#8b93a1] font-mono text-[0.72rem] mb-0.5">
                    {link.label}
                  </small>
                  {link.val}
                </span>
                <span className="text-[#2e5eff]">{link.icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
