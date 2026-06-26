"use client";

import { motion } from "framer-motion";

export default function SoftwareSolutions() {
  const codeLines = [
    { num: 1, text: 'import { App } from "thaproban-core";', indent: 0, color: "text-[#7c2ebd]" },
    { num: 2, text: "", indent: 0, color: "" },
    { num: 3, text: "export default function Service() {", indent: 0, color: "text-blue-400" },
    { num: 4, text: "const [active, setActive] = useState(true);", indent: 1, color: "text-zinc-300" },
    { num: 5, text: "return (", indent: 1, color: "text-blue-400" },
    { num: 6, text: '<div className="container bg-zinc-950">', indent: 2, color: "text-emerald-400" },
    { num: 7, text: '<Header title="Custom SaaS Integration" />', indent: 3, color: "text-amber-400" },
    { num: 8, text: "<Workflow step={4} status=\"completed\" />", indent: 3, color: "text-amber-400" },
    { num: 9, text: "</div>", indent: 2, color: "text-emerald-400" },
    { num: 10, text: ");", indent: 1, color: "text-blue-400" },
    { num: 11, text: "}", indent: 0, color: "text-blue-400" }
  ];

  return (
    <section id="software-solutions" className="pt-10 pb-20 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-900 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <div className="flex flex-col items-start space-y-3">
              <span className="text-[#ff0000] text-sm font-bold tracking-wider uppercase">Our Services</span>
              <h2 className="text-[#ff0000] text-3xl sm:text-4xl font-black uppercase leading-tight">Software & Web Development</h2>
              <div className="w-[60px] h-1 bg-[#ff0000] rounded-full" />
            </div>
            <p className="text-zinc-800 dark:text-zinc-200 text-lg font-semibold leading-relaxed tracking-wide">
              Custom web applications, cloud architecture, and software solutions built to scale.
            </p>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed max-w-lg">
              We design and develop high-performance software systems tailored to your workflows. From sleek Next.js applications and robust API architectures to dedicated administrative dashboards, we deliver scalable digital infrastructure.
            </p>
          </div>
          
          <div className="lg:col-span-6 flex justify-center w-full">
            {/* Realistic VS-Code Style Editor Mockup */}
            <div className="w-full max-w-[500px] rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-[#0f0f11] shadow-2xl overflow-hidden font-mono text-[11px] sm:text-xs text-zinc-400">
              
              {/* Editor Tab Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0a0a0c] border-b border-zinc-800">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                </div>
                <div className="flex items-center space-x-1.5 px-3 py-1 rounded bg-[#0f0f11] border border-zinc-800 text-[10px] text-zinc-400 select-none">
                  <span className="text-[#ff0000] font-bold">TS</span>
                  <span>SoftwareSolutions.tsx</span>
                </div>
                <div className="w-10" />
              </div>

              {/* Editor Workspace */}
              <div className="p-5 sm:p-6 bg-[#0f0f11] flex flex-col space-y-2 select-none overflow-x-auto">
                {codeLines.map((line, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <span className="text-zinc-600 dark:text-zinc-700 w-4 text-right select-none">{line.num}</span>
                    <span 
                      style={{ paddingLeft: `${line.indent * 16}px` }} 
                      className={`whitespace-pre font-mono ${line.color || "text-zinc-400"}`}
                    >
                      {line.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Terminal Mockup */}
              <div className="border-t border-zinc-850 bg-[#070708] p-4 flex flex-col space-y-1.5 border-zinc-800">
                <div className="flex items-center space-x-2 text-[10px] text-zinc-500 font-bold uppercase select-none tracking-wider">
                  <span>Terminal</span>
                  <span>•</span>
                  <span className="text-[#27c93f]">node</span>
                </div>
                <div className="flex flex-col font-mono text-[10px] sm:text-[11px] space-y-1">
                  <div className="flex items-center space-x-1.5">
                    <span className="text-[#ff0000]">$</span>
                    <span className="text-zinc-300">npm run deploy</span>
                  </div>
                  <div className="text-zinc-400">Deploying custom SaaS solution to Vercel...</div>
                  <div className="text-[#27c93f] font-semibold">Done in 4.2s! ✓ [Production Ready]</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
