---
layout: _sources/_getting-started/additional-info.njk
title: Additional information
---

## Inspiration

### Material Design by Google

Material Design informs the way things look and behave in the skeleton of our digital offerings. Whites, light greys and shadows are the foundation of our visual identity.

### AirBnB

Our components and interactive behaviours are heavily inspired by AirBnB. This is due to it being designed for accessibility and simplicity. It also slots together nicely with Material Design elements.

### Gov UK

With user considerations and simplicity at the core of their offering Gov UK has spearheaded a new direction on design. Task based user experience and semantic markup.

------------------------------------------------

## Principles

### Aspire

Great pages should ASPIRE to be:

- **Accessible** to folks with varying cognitive and physical abilities and disabilities.
    > Accessibility is at the forefront of our considerations. It is much easier to bake these considerations in at the start than to retroactively add them. That means colour contrasts should always be checked (WCAG Level AA - 4.5 colour ratio) and semantic HTML should always be used. 
    - [Quick WCAG colour checker](https://contrast-ratio.com/)
    - [Advanced WCAG colour checker](https://contrastchecker.com/)


- **Secure** and reliable for storing, manipulating, and transferring information.

- **Performant** on average devices and in constrained or unreliable network conditions.

- **Inclisive** to diverse audiences and produced by diverse teams to create better experiences.

- **Responsive** in adapting the user interface contextually to any screen.

- **Ethical** in how users’ preferences and data are handled.

## Strategy

### Simple appeals to everyone
Our audience is vast and varied, the best way to provide content to them is to make things simple. Don't waffle and certainly don't overload the user.

### Content is key
The user comes first always. All design elements are there to support the user on their journey to their content. 

### Smart defaults
Making components customisation gives us flexibility in achieving a desired look for a desired effect. However our defaults should always be carefully chosen.

## Typography

### Line height

    main *, aside * {
      line-height: 180%;
    }
    h1, h2 {
      line-height: 120%;  
    }
    h3 {
      line-height: 130%;
    }

### REM

All REM values consider this added to root:

    :root {
      font-size: 16px;
    }

### Overriding heading/utility classes

    .h1 {font-size: 3rem !important; line-height: 120%;}
    .h2 {margin-top: 30px; font-size:  2rem !important;}
    .h3 {font-size: 1.5rem !important;}
    .h4 {font-size: 1.25rem !important;}
    .h5 {font-size: 1.125rem !important;}
    .h1 {line-height: 120%;}
    .h2 {line-height: 120%;}
    .h3 {line-height: 130%;}

You can make any heading look like another by setting the classes as listed above.

## Layout

### Grid

#### Baseline

- Do you have a baseline grid? Why?
- Is it ever OK to place something off the grid?
- Does the baseline grid differ between content and typography?

#### Columns

- Do you use a column system or a horizontal grid?
- Are there any best practices around maximum content column widths, or the maximum number of content columns?
- How do gutters work?

#### Spacing

- Do you have a common set of spacings?
- What are the best practices for applying these different levels of spacing?
- What is the corresponding spacing in code? For example:

| Spacing    - | Sass variable  |
| ----------- | -------------- |
| 4px         | $spacing-xxs   |
| 8px         | $spacing-xs    |
| 16px        | $spacing-s     |
| 24px        | $spacing-m     |
| 48px        | $spacing-l     |
| 96px        | $spacing-xl    |

Breakpoints

Do you have well-defined breakpoints? Documenting them here can help make it clear when and how to adjust content responsively, e.g.

![Diagram showing different breakpoints on various screen sizes](/NCC-Design-System/public/img/breakpoints-zh-old.jpg "Breakpoints")

    // Small devices (landscape phones, 576px and up)
    @media (min-width: 576px) { ... }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) { ... }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) { ... }

    // Extra large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) { ... }