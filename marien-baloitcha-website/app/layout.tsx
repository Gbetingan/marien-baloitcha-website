import './globals.css';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';

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
            <a href="mailto:contacts@marien-baloitcha.dev" className="text-slate-400 hover:text-blue-500"><Mail size={20} /></a>
            <a href="https://www.linkedin.com/in/marienbaloitcha" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-500"><FaLinkedin size={20} /></a>
          </div>
        </nav>
        <main className="max-w-6xl mx-auto p-8 md:p-12 flex-grow w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
