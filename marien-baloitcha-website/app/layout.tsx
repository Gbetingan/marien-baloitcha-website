import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Marien Baloitcha | AI-Driven VDC/BIM & Cybersecurity Engineer',
  description: 'Portfolio of Marien Baloitcha - Bridging Smart Infrastructure, Digital Twins & Secure Intelligent Systems',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-300 font-sans antialiased min-h-screen flex flex-col">
        <nav className="flex justify-between items-center px-8 md:px-12 py-6 border-b border-slate-800 bg-slate-950">
          <div className="font-bold text-xl tracking-tight text-white">Marien Baloitcha</div>
          
          <div className="hidden md:flex space-x-6 text-sm font-medium text-slate-400">
            <Link href="/" className="hover:text-blue-500 transition-colors">Bio</Link>
            <Link href="/services" className="hover:text-blue-500 transition-colors">Services</Link>
            <Link href="/projects" className="hover:text-blue-500 transition-colors">Projects</Link>
            <Link href="/research" className="hover:text-blue-500 transition-colors">Research</Link>
            <Link href="/resume" className="hover:text-blue-500 transition-colors">CV</Link>
          </div>

          <div className="flex space-x-4">
            <a href="mailto:contacts@marien-baloitcha.dev" className="text-slate-400 hover:text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/marienbaloitcha" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </nav>
        <main className="max-w-6xl mx-auto p-8 md:p-12 flex-grow w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
