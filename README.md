# GOVIND — THE SERIES

A cinematic, streaming-inspired portfolio for Govind Tupkari, an entry-level AWS Cloud Engineer. The site presents personal information, skills, projects, and resume details in an episodic interface.

The streaming-platform style is a visual theme only. This portfolio is not affiliated with Netflix or another streaming service and does not use their logos.

## Project Overview

GOVIND — THE SERIES is a React and TypeScript single-page portfolio built with Vite. It presents the portfolio through a cinematic dark interface with animated sections, project details, categorized skills, and resume viewing and download options.

## Features

- Opening sequence and selectable viewing profiles
- Responsive navigation and section layouts
- Animated Hero, About, Journey, project, skills, and achievement sections
- Featured projects and an All Projects catalogue with project detail dialogs
- Categorized skills with supporting project references
- Resume preview, viewer, and download
- Personal WebP photographs in the Hero and About sections, with the existing monogram artwork used where appropriate
- Reduced-motion support, keyboard shortcuts, and touch-friendly horizontal rails

## Technologies Used

Verified from `package.json` and the application source:

- React 18 and React DOM
- TypeScript
- Vite 6
- Tailwind CSS 4 with the Vite plugin
- Framer Motion
- Lenis smooth scrolling

## Project Structure

```text
public/
  assets/                 Personal photographs, monogram/social artwork, and resume
  favicon.svg
src/
  components/             Page sections, navigation, project/resume dialogs, and visual effects
  data/portfolio.ts       Profile, education, projects, skills, and other portfolio content
  hooks/                  Scroll, media-query, and section-progress hooks
  App.tsx                 Page composition and shared interaction state
  index.css               Global styles and design tokens
  main.tsx                React application entry point
index.html                Document metadata and application entry
package.json              Project scripts and dependencies
package-lock.json         Locked dependency versions
vite.config.ts            Vite and Tailwind configuration
```

## Getting Started

Install Node.js 18 or later and npm. From the project directory, install the dependencies before starting the development server.

## Installation and Local Development

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## Production Build

Create the production output:

```bash
npm run build
```

The generated static site is written to `dist/`. To serve that build locally for a preview:

```bash
npm run preview
```

These are the development, build, and preview scripts currently defined in `package.json`.

## Screenshots

Screenshots will be added here later.

<!-- Add project screenshots and descriptive alt text here when available. -->

## Personal Customizations

Personal changes include Govind's portfolio branding and content, profile photographs, skills, project catalogue, and resume integration. The Hero and About sections use personal WebP photographs. The existing monogram artwork remains in use where appropriate, including profile and opening-sequence artwork.

Portfolio data is centralized in [`src/data/portfolio.ts`](src/data/portfolio.ts). Content updates include the profile, education, projects, skills, achievements, journey timeline, and resume path. The resume file currently referenced by the site is `public/assets/Govind_Tupkari_AWS_Cloud_Engineer_Resume.pdf`.

## Original Project Attribution

This portfolio is a customized derivative of a project created by another developer and shared with permission, as confirmed by Govind. The inherited application structure, components, and design are distinct from Govind's personal branding, photographs, resume integration, skills, project data, and other portfolio content. The entire codebase is not claimed as Govind's original work.

No original-project license or written public redistribution and attribution terms were available in the project files reviewed. Confirm with the original developer that public redistribution is permitted and determine any required attribution or other terms before publishing. No license is asserted here.
