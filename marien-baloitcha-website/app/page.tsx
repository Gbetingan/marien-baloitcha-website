export default function Home() {
  return (
    <div className="space-y-16 animate-in fade-in duration-700">
      <section className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
          AI-Driven VDC/BIM & <br/><span className="text-blue-500">Cybersecurity Engineer</span>
        </h1>
        <h2 className="text-xl text-slate-400 font-medium max-w-3xl leading-relaxed">
          Bridging Smart Infrastructure, Digital Twins & Secure Intelligent Systems | Applied Researcher in AI for the Built Environment
        </h2>
        <div className="space-y-4 text-lg text-slate-300 max-w-4xl leading-relaxed">
          <p>
            I’m a bilingual (French & English) AI and Cybersecurity Engineer specializing in BIM/VDC, IoT, and digital twin technologies for the built environment. With 7+ years in civil engineering and over 2 years in cybersecurity, I help organizations design and secure data-driven, intelligent infrastructure systems that merge physical and digital worlds.
          </p>
          <p>
            Currently enrolled in the BIM Professional Course for Engineers at Novatr, I’m deepening my expertise in Revit, Navisworks, Civil 3D, and Dynamo — while exploring how artificial intelligence, automation, and predictive analytics can revolutionize design coordination, project delivery, and building resilience.
          </p>
          <p>
            My mission is to bridge AI innovation with secure digital construction. I’m seeking opportunities with companies building the future of AI in the AEC industry—Construction, smart cities, cyber-physical systems, and secure digital transformation.
          </p>
        </div>
      </section>

      <section className="bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-800">
        <h3 className="text-2xl font-bold mb-6 border-b border-slate-800 pb-4 text-white">How I Work</h3>
        <ul className="flex flex-wrap gap-4">
          {['Systems thinking', 'Standards-driven', 'Security-by-design', 'Research-informed', 'Field-aware'].map((trait) => (
            <li key={trait} className="bg-slate-950 py-2 px-4 rounded-md text-sm font-semibold text-slate-300 border border-slate-800">
              {trait}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}