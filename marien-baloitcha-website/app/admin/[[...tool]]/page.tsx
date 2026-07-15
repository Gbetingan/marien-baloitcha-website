'use client';

// @ts-ignore
import { NextStudio } from 'next-sanity/studio';
import config from '../../../sanity.config';

export default function AdminPage() {
  return (
    <div className="fixed inset-0 z-50 bg-white text-slate-900 overflow-y-auto">
      <NextStudio config={config} />
    </div>
  );
}