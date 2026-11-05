import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/tshirt-competitive-landscape/',
  title: 'Blank Theory · Market Notes',
  description: 'A source-backed review of the plain white T-shirt landscape and Blank Theory opportunity.',
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: 'Overview', link: '/' },
      { text: 'Competition', link: '/competition' },
      { text: 'Opportunities', link: '/opportunities' },
      { text: 'Concepts', link: '/concepts' },
      { text: 'Sources', link: '/sources' },
      { text: 'Plan & revisions', link: '/project-plan' }
    ],
    sidebar: [
      { text: 'Market review', items: [
        { text: 'Overview', link: '/' },
        { text: 'Competitive landscape', link: '/competition' },
        { text: 'Product opportunities', link: '/opportunities' },
        { text: 'Design concepts', link: '/concepts' },
        { text: 'Sources and method', link: '/sources' },
        { text: 'Project plan and issues', link: '/project-plan' },
        { text: 'Revisions', link: '/revisions' }
      ]}
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ors2222/tshirt-competitive-landscape' }
    ],
    editLink: {
      pattern: 'https://github.com/ors2222/tshirt-competitive-landscape/edit/main/docs/:path',
      text: 'Suggest an edit'
    },
    footer: {
      message: 'A working research board · observations checked November 3, 2026',
      copyright: 'Research snapshot, not a controlled market or customer study.'
    }
  }
})
