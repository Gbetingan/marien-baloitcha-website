'use client';

import { NextStudio } from 'next-sanity/studio';
import config from '../../../sanity.config';

export default function AdminPage() {
  return (
    /* The 'fixed inset-0 z-50' classes force the dashboard to cover the main website's dark theme layout */
    <div className="fixed inset-0 z-50 bg-white text-slate-900 overflow-y-auto">
      <NextStudio config={config} />
    </div>
  );
}