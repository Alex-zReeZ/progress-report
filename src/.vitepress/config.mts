import { defineConfig } from "vitepress";

// Will be displayed in left sidebar and navigation
const links = [
    {text: "Introduction", link: "/introduction"},
    {
        text: "Projects",
        items: [
            {
                text: "Centre de formation",
                collapsed: true,
                items: [
                    {
                        text: "Exercices",
                        collapsed: true,
                        items: [
                            { text: "Web integration", link: "/projects/jobtrek/webIntegration" },
                            { text: "Blakiti website", link: "/projects/jobtrek/BlakitiWebsite" },
                            { text: "TicTacToe", link: "/projects/jobtrek/Java-TicTacToe" },
                            { text: "Grade calculator", link: "/projects/jobtrek/grades-calculator" },
                            { text: "Todo list", link: "/projects/jobtrek/Php-Todolist" },
                            { text: "Slim todo list", link: "/projects/jobtrek/Slim_Todolist" },
                            { text: "Python todo list", link: "/projects/jobtrek/python-todo" },
                            { text: "Rust tsodo list", link: "/projects/jobtrek/rust-todo" },
                        ]
                    },
                    {
                        text: "Projets",
                        collapsed: false,
                        items: [
                            { text: "GradiX", link: "/projects/jobtrek/gradix" },
                            { text: "Ascencio", link: "/projects/jobtrek/ascencio" },
                            { text: "Climate Guardian", link: "/projects/jobtrek/climateGuardian" },
                        ]
                    },
                ],
            },
            {
                text: "Ergopix",
                collapsed: false,
                items: [
                    {
                        text: "Expérimentation",
                        collapsed: true,
                        items: [
                            { text: "PressAI", link: "/projects/press-ai" },
                            { text: "Headless Steriparc", link: "/projects/steriparc" },
                            { text: "Project 47247180", link: "/projects/harvest-47247180" },
                        ]
                    },
                    {
                        text: "Projets",
                        collapsed: false,
                        items: [
                            { text: "Gérifonds", link: "/projects/gerifonds" },
                            { text: "Ergopix Dashboard", link: "/projects/ergopix-dashboard" },
                            { text: "Ergopix 2026", link: "/projects/ergopix26" },
                            { text: "BDRP", link: "/projects/bdrp" },
                            { text: "Scolcast", link: "/projects/scolcast" },
/*
                            {text: "Séance Studio", link: "/projects/seance-studio"},
*/
                        ]
                    },
                ]
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
        // @ts-ignore
        nav: [{text: "Home", link: "/"}, ...links],

        outline: [2, 3],
        sidebar: [...links, {}],

        search: {
            provider: "local",
        },

        socialLinks: [
            // Replace link with yor own GitHub repo or GitHub profile
            {icon: "github", link: "https://github.com/Alex-zReeZ"},
        ],
    },
});
