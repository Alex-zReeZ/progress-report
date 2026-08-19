# Scolcast <Badge type="tip" text="Drupal 11" />

## Purpose

Scolcast is an educational podcasting platform for schools and educators. It lets teachers and
students create, share, and listen to audio content tied to their subjects, making it easier to
bring digital audio into learning and to access educational resources in an audio format.

This project is a full rebuild of the current site. The version I'm working on hasn't been
deployed or put into production yet. I handled the early stages of the rebuild: recreating the
content structure on the new instance and building the front-end.

## Technologies

- Drupal 10
- SCSS
- Bootstrap 5
- Twig

## My role

I did the groundwork for the rebuild. First, I analyzed the content-type fields of the current
site so I could recreate them on the new instance, rebuilding the matching content types and
taxonomies. I also reworked the user information architecture to fit new legal constraints.

I then developed the entire front-end, writing Twig templates that render the content
dynamically. Using Twig's `{% %}` logic for loops and conditionals, the pages stay driven by the
underlying data rather than being hard-coded. On top of the templates, I configured the search
facets for the search bar and integrated a video player on the home page with video.js, a
library I had to learn for this project.

## Operational Competencies Acquired

To match the existing site, I analyzed its content-type fields and modelled the new structure,
recreating the content types and taxonomies on the Drupal instance.

I developed the full front-end by writing Twig templates that render the content dynamically,
turning the modelled data into the site's pages.

## Live site

You can find the current website [here](https://www.scolcast.ch).