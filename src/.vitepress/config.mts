import {defineConfig} from 'vitepress'

// Will be displayed in left sidebar and navigation
const links = [
  { text: 'Introduction', link: '/introduction' },
  { text: 'Languages', items: [
    { text: 'JavaScript', link: '/languages/javascript',items: [
        { text: 'React', link: '/languages/framework/Reactjs'},
      ]},
    { text: 'Rust', link: '/languages/Rust'},
    { text: 'Java', link: '/languages/Java'},
    { text: 'PHP', link: '/languages/Php', items: [
        { text: 'Slim', link: '/languages/framework/Slim'},
      ]},
    { text: 'HTML CSS', link: '/languages/HTML-CSS', items: [
        { text: 'Tailwind', link: '/languages/framework/Tailwindcss'},
      ]},

  ]},
  { text: 'Projects', items: [
    { text: 'Rust todo list', link: '/projects/rust-todo'},
    { text: 'Java TicTacToe', link: '/projects/Java-TicTacToe'},
    { text: 'JavaScript Grade calculator', link: '/projects/grades-calculator'},
    { text: 'Web integration', link: '/projects/webIntegration'},
    { text: 'Blakiti website', link: '/projects/BlakitiWebsite'},
    { text: 'PHP todo list', link: '/projects/Php-Todolist'},
    { text: 'Slim todo list', link: '/projects/Slim_Todolist'},

    ]},
]

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // Update your title and description with username
  title: "My Progress Report - Alex",
  description: "The training report outlines all the skills acquired during the CFC of computer scientist applications development.",
  cleanUrls: true,
  lang: 'en',
  base: "/progress-report/",
  lastUpdated: true,
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      ...links,
      { text: 'How to', link: '/how-to-use' }
    ],

    outline: [2,3],
    sidebar: [
      ...links,
      {
        text: 'Others',
        items: [
          { text: 'How to use', link: '/how-to-use'}
        ]
      }
    ],

    search: {
      provider: 'local',
    },

    socialLinks: [
      // Replace link with yor own GitHub repo or GitHub profile
      { icon: 'github', link: 'https://github.com/Alex-zReeZ/progress-report' }
    ],

    editLink: {
      // Change first part of path to your repo name
      pattern: 'https://github.com/Alex-zReeZ/progress-report/edit/main/src/:path',
      text: 'Edit this page on GitHub'
    }
  }
})
