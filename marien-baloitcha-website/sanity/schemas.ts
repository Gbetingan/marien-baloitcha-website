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
          { title: 'VDC/BIM Projects', value: 'vdc-bim' },
          { title: 'Cybersecurity/IT', value: 'cyber-it' },
          { title: 'VDC/BIM + AI Fusion', value: 'fusion' }
        ],
      }
    },
    { name: 'description', title: 'Project Description', type: 'text' },
    { name: 'githubLink', title: 'Repository / Lab Link', type: 'url' },
  ]
}

export const schemaTypes = [projectSchema]