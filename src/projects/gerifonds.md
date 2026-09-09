# Gérifonds <Badge type="tip" text="Drupal 9" />

## Purpose

Gérifonds is a Swiss company active in fund management and real estate investment. I wasn't
involved in building or deploying their site. My task was to add two new web services to the
existing platform, so that external systems could pull fund data and fund documents on demand.

## Technologies

- Drupal 9
- PHP
- MySQL

## What I built

I added two REST endpoints to the site's existing custom Drupal module. Rather than starting
from scratch, I based my work on the web services already in place, adding the routes to the
module's routing file and the matching methods to its controller, then clearing the cache so
Drupal would pick up the new routes.

The first service, `fundsInfo`, returns a fund's information from its ISIN, and accepts several
ISINs at once:

GET /ws/fundsInfo/{ISIN}

The second, `fileInfo`, returns fund documents filtered by documentation code, language, and
ISIN. The documentation code and language are optional: leaving one out widens the results
(all languages, or all document types), and it always returns the most recent document rather
than older revisions:

GET /ws/fileInfo/{documentation_code}/{language_code}/{ISIN}

Both services query the MySQL database and return the requested records. I also wrote the API
documentation describing each endpoint, its parameters, and its behavior.

## Operational Competencies Acquired

I first had to understand the existing Drupal architecture and the web services already in
place, then use them as a model for my own. On that basis, I implemented the two endpoints in
PHP: adding the routes, writing the controller methods that query the database by ISIN,
documentation code, and language, and returning the latest matching records. **(g5)**

**Operational competencies:** g5
