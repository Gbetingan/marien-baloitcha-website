const services = [
  {
    title: "Civil Engineering & Infrastructure Systems",
    items: ["Constructability analysis & design consistency checks", "Standards compliance (ASTM, ISO, Eurocode)", "Translating field conditions into digital models", "Sewer network validation (Civil 3D) & water quality assessment"],
    audience: "Engineering firms, NGOs, infrastructure owners, researchers"
  },
  {
    title: "BIM / VDC & Digital Construction",
    items: ["Navisworks-based coordination & multi-discipline clash resolution", "BIM Collaborate Pro setup, access control & versioning", "Schedule-informed (4D) & cost-informed (5D) model validation"],
    audience: "Contractors, owners, EPC firms, digital construction teams"
  },
  {
    title: "Cybersecurity for Built Environment",
    items: ["Threat modeling for BIM platforms & smart buildings", "Secure model sharing, access governance & data integrity", "AWS & Azure security posture review & IAM design"],
    audience: "Smart building teams, infrastructure owners, research labs"
  },
  {
    title: "Training, Teaching & Capacity Building",
    items: ["BIM fundamentals & civil engineering digital workflows", "Intro to cybersecurity for engineers", "Professional upskilling & applied engineering reasoning"],
    audience: "Universities, NGOs, training programs, engineering firms"
  },
  {
    title: "Research & Applied Innovation",
    items: ["Infrastructure resilience & digital twins lifecycle analysis", "Domain-specific question creation & AI output validation", "Literature review, data analysis & grant support"],
    audience: "Universities, AI labs, research institutions"
  },
  {
    title: "AI × Construction × Security (Vision)",
    items: ["Reviewing & validating AI-generated engineering outputs", "AI-assisted design checks & automated risk detection", "IoT + BIM + Security concept prototyping"],
    audience: "AI companies, startups, innovation teams"
  }
];

export default function ServicesPage() {
  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Services & Expertise</h2>
        <p className="text-slate-400 text-lg max-w-3xl">
          Leveraging a unique intersection of civil engineering, digital construction, and cybersecurity to deliver resilient, data-driven infrastructure systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-slate-900 p-6 rounded-xl border border-slate-800 flex flex-col h-full hover:border-blue-500/50 transition-colors">
            <h3 className="text-lg font-bold text-white mb-4">{service.title}</h3>
            
            <ul className="list-disc list-outside ml-4 space-y-2 text-slate-300 mb-6 flex-grow text-sm">
              {service.items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            
            <div className="mt-auto pt-4 border-t border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-500">Audience</span>
              <p className="text-sm text-slate-400 mt-1">{service.audience}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}