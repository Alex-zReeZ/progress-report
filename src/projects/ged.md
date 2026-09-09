# GED migration <Badge type="tip" text="Drupal 11" />

## Purpose

Between 2010 and 2015, Ergopix built an intranet that was distributed to several companies, a
shared space where teams could exchange files as a follow-up to meetings or while working on
projects involving multiple people. That original platform ran on Drupal 7, which has since
become deprecated, so I was tasked with modernizing it.

## Technologies

- Drupal 11
- PHP
- Group module
- Paragraphs

## Choosing a solution

Before committing to a rebuild, I tested several document-management and file-sharing tools as
potential replacements: ProjectSend, ownCloud, FileGator, and others. None of them covered all
the features the platform required. Some couldn't handle file sharing the way we needed, others
locked essential functionality behind a paid license.

We therefore decided to stay on Drupal. It gave us the customization freedom the project called
for and, most importantly, let us import the existing files from the old instance rather than
starting from scratch.

## Development

Moving from Drupal 7 to Drupal 11 meant rethinking the content architecture. The old version
relied on Field Collections and Organic Groups, neither of which is available in Drupal 11. I
rebuilt the structure around the **Group** and **Paragraphs** modules instead, which gave us a
cleaner and clearer organization of both content and access rights.

Configuring the group permissions surfaced a subtle issue: the `lecteur` role could still
create content even after its permissions were removed, because of Drupal's outsider/insider
role synchronization. Tracing this back to the synced global role was part of getting the
access model right.

## Operational Competencies Acquired

To replace the ageing Drupal 7 instance, I researched and tested several document-management
and file-sharing solutions, comparing them against the features the platform actually needed. I
evaluated each option's technical potential and its limitations, which is what ultimately ruled
them out. **(a3)**

On the basis of that evaluation, I weighed the shortlisted tools against staying on Drupal and,
together with the team, settled on Drupal 11 for its customization and its ability to import
the existing files. I then developed the target architecture conceptually. Since Drupal 11
dropped the Field Collections approach used in the old version, I designed a cleaner structure
around the Group and Paragraphs modules. **(g4)**

A central part of the work was migrating the legacy content. I planned and carried out the
import of the old files from the Drupal 7 source into the new Drupal 11 target, verifying the
completeness and integrity of the migrated data. I ran this migration with the support of an AI
assistant (Claude), which helped me plan the process and write the migration scripts. **(c2)**

**Operational competencies:** a3, g4, c2
