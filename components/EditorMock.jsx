// components/EditorMock.js
import { codeLines } from "../utils/constants";

export default function EditorMock() {
  return (
    <div
      className="bg-[#14171c] rounded-[14px] overflow-hidden border border-[#262b33] shadow-[0_20px_50px_-20px_rgba(20,23,28,0.35)]"
      role="img"
      aria-label="Code editor window showing a JavaScript object describing Shakib"
    >
      <div className="flex items-center justify-between p-3 bg-[#1b1f26] border-b border-[#262b33]">
        <div className="flex gap-[7px]">
          <span className="w-[11px] height-[11px] rounded-full bg-[#e5766b]"></span>
          <span className="w-[11px] height-[11px] rounded-full bg-[#e6b45c]"></span>
          <span className="w-[11px] height-[11px] rounded-full bg-[#7ec98c]"></span>
        </div>
        <span className="font-mono text-[0.78rem] text-[#8b93a1]">
          whoami.js
        </span>
      </div>
      <div className="p-5 pb-6 font-mono text-[0.88rem] line-height-[1.6] overflow-x-auto text-[#d6dae2]">
        {codeLines.map((tokens, idx) => (
          <div
            key={idx}
            className="flex gap-[14px] whitespace-pre my-0 py-[2px]"
          >
            <span className="text-[#4b5261] w-4 text-right select-none">
              {idx + 1}
            </span>
            <span>
              {tokens.map((tok, tIdx) => {
                if (tok.cursor) {
                  return (
                    <span
                      key={tIdx}
                      className="inline-block w-[7px] h-[1em] bg-[#0fa982] align-text-bottom ml-[2px] animate-pulse"
                    />
                  );
                }
                return (
                  <span key={tIdx} className={tok.c || ""}>
                    {tok.t}
                  </span>
                );
              })}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
