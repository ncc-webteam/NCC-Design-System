---
layout: _sources/accordion-source.njk
title: Accordion
---

## When to use this component

Only use an accordion if there’s evidence it’s helpful for the user to:

See an overview of multiple, related sections of content
choose to show and hide sections that are relevant to them
look across information that might otherwise be on different pages
For example, an accordion can work well if the user needs to reveal and compare information that’s relevant to them.

Accordions can also work well for people who use a service regularly. For example, users of caseworking systems who need to do familiar tasks quickly.

Test with users to decide if using an accordion outweighs the potential problems with hiding content.

## When not to use this component

Accordions hide content from the user. Not all users will notice them or understand how they work. For this reason, you should only use them in specific situations and if user research supports it.

Do not use an accordion for content that all users need to see.

Test your content without an accordion first. Well-written and structured content, as shown in the Content design: writing for GOV.UK guidance, can remove the need to use an accordion.

It’s usually better to:

simplify and reduce the amount of content
split the content across multiple pages
keep the content on a single page, separated by headings
use a list of links at the start of the page (known as ‘anchor links’) to take the user to particular sections of a page
Accordions work best for simple content and links. Do not use accordions to split up a series of questions. Use separate pages instead.

Do not put accordions within accordions, as it will make content difficult to find.

Do not use the accordion component if the amount of content inside will make the page slow to load.

## How it works

There are 2 ways to use the accordion component. You can use HTML or, if you’re using Nunjucks or the GOV.UK Prototype Kit, you can use the Nunjucks macro.

The accordion component uses JavaScript. When JavaScript is not available, users will see all the content displayed with the section labels as headings.

### Section heading buttons

An accordion will usually start with all sections hidden. To show a section, the user can interact anywhere in the heading button.

The heading button includes all of these areas:

heading text
summary line (if you decide to add one)
call-to-action text to ‘show’ or ‘hide’
For users of screen readers, all the text in the button will be read as a single statement (separated by commas to allow for slight pauses). There’s also some visually hidden content in the heading text to help announce the call-to-action as ‘show this section’ or ‘hide this section’.

### Research on this component

We updated this component in December 2021 to solve an accessibility issue where the buttons and section labels might be mistaken for links.

Read about the research and development that went into improving the accordion component.

The team made sure the component is accessible, for example that users can interact with it using just the keyboard.


