import { defineConfig } from 'tinacms';

const branch = process.env.GITHUB_BRANCH || process.env.HEAD || 'main';

export default defineConfig({
  branch,
  clientId: '774ab672-782d-415a-98d6-49cbb3687780',
  token: process.env.TINA_TOKEN!,

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },

  media: {
    tina: {
      mediaRoot: 'uploads',
      publicFolder: 'public',
    },
  },

  schema: {
    collections: [
      {
        name: 'activity',
        label: 'Activities',
        path: 'src/content/activities',
        format: 'md',
        fields: [
          { type: 'string', name: 'title', label: 'Title', isTitle: true, required: true },
          { type: 'datetime', name: 'date', label: 'Publish Date', required: true },
          { type: 'string', name: 'description', label: 'Description', required: true },
          { type: 'rich-text', name: 'body', label: 'Body', isBody: true },
        ],
      },
      {
        name: 'officer',
        label: 'Club Officers',
        path: 'src/content/officers',
        format: 'md',
        fields: [
          { type: 'string', name: 'name', label: 'Name', isTitle: true, required: true },
          { type: 'string', name: 'position', label: 'Position', required: true },
          { type: 'string', name: 'email', label: 'Email', required: true },
          { type: 'image', name: 'photo', label: 'Photo', description: 'Optional. Leave blank to use a generic avatar.' },
          { type: 'number', name: 'order', label: 'Display Order', description: 'Lower numbers appear first.' },
          { type: 'rich-text', name: 'body', label: 'Description/Bio', isBody: true },
        ],
      },
      {
        name: 'alumni',
        label: 'Alumni / Legacy Officers',
        path: 'src/content/alumni',
        format: 'md',
        fields: [
          { type: 'string', name: 'name', label: 'Name', isTitle: true, required: true },
          { type: 'string', name: 'position', label: 'Position', required: true },
          { type: 'string', name: 'year', label: 'Year', required: true, description: 'Academic year, e.g. 2024-2025' },
          { type: 'image', name: 'photo', label: 'Photo', description: 'Optional.' },
          { type: 'number', name: 'order', label: 'Display Order', description: 'Lower numbers appear first within the same year.' },
        ],
      },
      {
        name: 'settings',
        label: 'Settings',
        path: 'src/content/settings',
        format: 'md',
        ui: {
          allowedActions: { create: false, delete: false },
        },
        fields: [
          { type: 'string', name: 'title', label: 'Title', isTitle: true, required: true },
          { type: 'rich-text', name: 'body', label: 'Content', isBody: true },
        ],
      },
    ],
  },
});
