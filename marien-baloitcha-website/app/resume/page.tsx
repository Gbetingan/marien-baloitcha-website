export default function ResumePage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in duration-700">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl font-bold text-slate-900">Curriculum Vitae</h2>
        <p className="text-slate-500">
          This section provides a direct link to my comprehensive professional document detailing my experience, education, and technical certifications.
        </p>
      </div>

      <div className="bg-white p-12 rounded-2xl border border-slate-200 text-center shadow-sm">
        <div className="mb-6">
          <span className="inline-block p-4 bg-blue-50 rounded-full text-blue-600 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M12 18v-6"/><path d="m9 15 3 3 3-3"/></svg>
          </span>
          <h3 className="text-xl font-bold text-slate-900">Download Professional CV</h3>
          <p className="text-slate-500 mt-2 text-sm">PDF Format • Updated 2026</p>
        </div>
        
        {/* Note: Once you have your PDF, you will place it in the 'public' folder and link to it here */}
        <a 
          href="mailto:contacts@marien-baloitcha.dev?subject=Request for Curriculum Vitae" 
          className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Request Full Resume
        </a>
      </div>
    </div>
  );
}