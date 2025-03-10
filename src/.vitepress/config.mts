import { defineConfig } from "vitepress";

// Will be displayed in left sidebar and navigation
const links = [
  { text: "Introduction", link: "/introduction" },
  {
    text: "Projects",
    items: [
      {
        text: "Html Css",
        items: [
          { text: "Web integration", link: "/projects/webIntegration" },
          { text: "Blakiti website", link: "/projects/BlakitiWebsite" },
        ],
      },
      {
        text: "Java",
        items: [{ text: "TicTacToe", link: "/projects/Java-TicTacToe" }],
      },
      {
        text: "Javascript",
        items: [
          { text: "Grade calculator", link: "/projects/grades-calculator" },
        ],
      },
      {
        text: "PHP",
        items: [
          { text: "Todo list", link: "/projects/Php-Todolist" },
          { text: "Slim todo list", link: "/projects/Slim_Todolist" },
        ],
      },
      {
        text: "Python",
        items: [
          { text: "Todo list", link: "/projects/python-todo" },
        ],
      },
      {
        text: "Rust",
        items: [{ text: "Todo list", link: "/projects/rust-todo" }],
      },
      {
        text: "Website",
        items: [
          { text: "Ascencio", link: "/projects/ascencio" },
          { text: "BDRP", link: "/projects/bdrp" },
          { text: "Climate Guardian", link: "/projects/climateGuardian" },
          { text: "Ergopix Dashboard", link: "/projects/ergopix-dashboard" },
          { text: "GradiX", link: "/projects/gradix" },
          { text: "Scolcast", link: "/projects/scolcast" },
        ],
      },
    ],
  },
];

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // Update your title and description with username
  title: "My Progress Report - Alex",
  description:
    "The training report outlines all the skills acquired during the CFC of computer scientist applications development.",
  cleanUrls: true,
  lang: "en",
  base: "/progress-report/",
  lastUpdated: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }, ...links],

    outline: [2, 3],
    sidebar: [...links, {}],

    search: {
      provider: "local",
    },

    socialLinks: [
      // Replace link with yor own GitHub repo or GitHub profile
      { icon: "github", link: "https://github.com/Alex-zReeZ/progress-report" },
    ],

    editLink: {
      // Change first part of path to your repo name
      pattern:
        "https://github.com/Alex-zReeZ/progress-report/edit/main/src/:path",
      text: "Edit this page on GitHub",
    },
  },
});
