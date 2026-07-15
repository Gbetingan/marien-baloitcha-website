export const projectSchema = {
  name: 'project',
  title: 'Portfolio Projects',
  type: 'document',
  fields: [
    { name: 'title', title: 'Project Title', type: 'string' },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'VDC/BIM Projects', value: 'VDC/BIM Projects' },
          { title: 'Cybersecurity/IT', value: 'Cybersecurity/IT' },
          { title: 'VDC/BIM + AI Fusion', value: 'VDC/BIM + AI Fusion' }
        ],
      }
    },
    { name: 'description', title: 'Project Description', type: 'text' },
    { name: 'githubLink', title: 'Repository / Lab Link', type: 'url' },
  ]
}

export const articleSchema = {
  name: 'article',
  title: 'Research Articles',
  type: 'document',
  fields: [
    { name: 'title', title: 'Article Title', type: 'string' },
    { name: 'abstract', title: 'Abstract / Summary', type: 'text' },
    { name: 'documentUrl', title: 'Link to PDF or Publication', type: 'url' }
  ]
}

export const resumeSchema = {
  name: 'resume',
  title: 'Resume / CV',
  type: 'document',
  fields: [
    { name: 'title', title: 'Document Title (e.g., 2026 CV)', type: 'string' },
    { name: 'resumeFile', title: 'Upload PDF', type: 'file' }
  ]
}

export const schemaTypes = [projectSchema, articleSchema, resumeSchema]