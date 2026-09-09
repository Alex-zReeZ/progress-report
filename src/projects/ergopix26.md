# Ergopix 2026 <Badge type="tip" text="WP/Nextjs" />

## Purpose

Ergopix had been running the same website for years, and it had fallen out of date. The goal of
this project was to rebuild it: a faster, more flexible site that properly showcases the full
range of services Ergopix offers.

## Technologies

- WordPress (headless CMS)
- Next.js
- GraphQL API
- ACF (Advanced Custom Fields)
- GitHub Actions

## How it works

WordPress runs as a headless CMS: it holds the content but serves no public front-end of its
own. I modelled that content with custom post types and custom fields (via ACF), fetched it
through the GraphQL API, and rendered it with a Next.js front-end. This headless split gives the
site the performance and flexibility a traditional WordPress setup can't match, while keeping
content easy to manage on the WordPress side.

## Deployment

To publish the front-end, I built a custom WordPress plugin that triggers a GitHub Action. The
action builds the Next.js site and deploys it over SSH to the production server. This lets a
content editor push an up-to-date build straight from WordPress, without touching the command
line.

## Operational Competencies Acquired

I started by researching the headless approach, weighing a headless WordPress and Next.js
architecture against a traditional WordPress setup and assessing what each would mean for
performance and flexibility. **(a3)**

On that basis, I designed the solution. I structured the content model with custom post types
and ACF fields, and defined how the WordPress backend and the Next.js front-end would
communicate through GraphQL. **(g4)**

I then implemented the application, building the Next.js front-end, wiring up the GraphQL
queries, and configuring the WordPress side so content flows cleanly into the rendered pages.
**(g5)**

For delivery, I defined and implemented the deployment process. A WordPress plugin triggers a
GitHub Action that builds the site and ships it to the production server over SSH, giving the
project a repeatable, automated release pipeline. **(h2, h3)**

**Operational competencies:** a3, g4, g5, h2, h3
