import { client } from '../../sanity/client';

export const revalidate = 60; 

export default async function ProjectsPage() {
  const projects = await client.fetch(`*[_type == "project"] | order(_createdAt desc)`);
  
  return (
    <div className="space-y-10 animate-in fade-in duration-700">
      <h2 className="text-3xl font-bold text-slate-900">Portfolio Projects</h2>
      
      {projects.length === 0 ? (
        <div className="bg-white p-8 rounded-xl border border-slate-200 text-center">
          <p className="text-slate-500">Projects are currently being updated from the admin dashboard. Check back soon.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project: any) => (
            <div key={project._id} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4 inline-block">
                {project.category}
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
              <p className="text-slate-600 text-sm mb-6 line-clamp-3">{project.description}</p>
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noreferrer" className="text-blue-600 text-sm font-semibold hover:underline">
                  View Repository &rarr;
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}