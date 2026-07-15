import { client } from '../../sanity/client';

export const revalidate = 60;

export default async function ResearchPage() {
  const articles = await client.fetch(`*[_type == "article"] | order(_createdAt desc)`);

  return (
    <div className="space-y-10 animate-in fade-in duration-700">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-slate-900">Research Articles & White Papers</h2>
        <p className="text-slate-500">Applied research in AI for the built environment.</p>
      </div>

      {articles.length === 0 ? (
        <div className="bg-white p-8 rounded-xl border border-slate-200 text-center">
          <p className="text-slate-500">Publications are currently being indexed. Check back soon.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {articles.map((article: any) => (
            <div key={article._id} className="bg-white p-6 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">{article.title}</h3>
              <p className="text-slate-600 text-sm mb-4">{article.abstract}</p>
              {article.documentUrl && (
                <a href={article.documentUrl} target="_blank" rel="noreferrer" className="text-blue-600 text-sm font-semibold hover:underline">
                  Read Full Publication &rarr;
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}