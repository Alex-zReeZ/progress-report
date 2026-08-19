# Ergopix Dashboard <Badge type="tip" text="React | PHP" />

## Purpose

This is an internal Ergopix tool used across the company. Every employee uses it to clock in and
to reach the various modules they work with day to day. My task was a complete redesign of the
project, both to make it more pleasant and intuitive to use and to sharpen how some of its
modules actually work.

## Technologies

- React
- PHP

## How it works

The back-end is built as a set of PHP modules, each responsible for a given feature. Every module
produces a custom JSON response containing exactly the data the interface needs. The React
front-end fetches those responses and turns them into the dashboard the employees interact with.
This split keeps each feature self-contained on the PHP side while the React layer stays focused
on presentation and interaction.

## My role

I led the full redesign. On the front-end, I reworked the interface so employees could clock in
and reach their modules more quickly and with less friction. On the back-end, I revisited several
modules, rethinking their behavior to make them genuinely more useful and efficient rather than
just restyling them.

## Operational Competencies Acquired

The redesign centered on usability: I reworked the interface so the everyday actions, clocking in
and opening the right module, became faster and more intuitive for the team.

I implemented the solution across the stack, building the React front-end and the PHP modules that
generate the tailored JSON responses it consumes.

## Availability

This is an internal tool, so it isn't publicly accessible.