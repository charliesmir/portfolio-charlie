# 📔Charlie's Portfolio

This project is a code source for personal portfolio created to showcase both design expertise and growing frontend development skills. It contains projects, experience and education in a modern, clean and unique interface.

The website was created in collaboration with another developer, who assisted with CMS integration, CI/CD setup, and technical guidance, demonstrating the designer’s ability to collaborate effectively with developers and work across disciplines.

The project is hosted by [Vercel](https://www.vercel.com/). Here is the link to the website: [Charlie's Portfolio](https://www.charliesmir.com/).

## 🏗️ The Architecture of the App

### 💻 Languages

[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![CSS](https://img.shields.io/badge/CSS-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)

### 📂 Project structure

```
.
├─ .github/
│  └─ workflows/                      # Workflows for GitHub Actions to build and deploy project on Vercel
│     ├─ production.yml
│     └─ staging.yml
├─ .gitignore
├─ .storybook/                        # Storybook settings
│  ├─ main.ts
│  └─ preview.ts
├─ README.md                          # Readme file you are reading now :)
├─ eslint.config.mjs
├─ next.config.ts
├─ package-lock.json
├─ package.json                       # Dependencies used in the project
├─ public/                            # Assets for project
├─ src/
│  ├─ adapters/
│  │  ├─ adapters.ts                  # Fuctions for fetching content from Sanity
│  │  ├─ clients/
│  │  │  └─ sanity.ts                 # Sanity client configuration
│  │  ├─ queries.ts                   # Queries for Sanity usage
│  │  └─ types.ts                     # Sanity and Local types used in project
│  ├─ app/
│  │  ├─ favicon.ico
│  │  ├─ globals.css                  # General CSS file
│  │  ├─ homeContent.tsx              # Home Page client component
│  │  ├─ homePage.css                 # Home Page CSS file
│  │  ├─ layout.tsx                   # File for setting project layout and metadata generation
│  │  ├─ not-found.tsx                # 404 error component
│  │  ├─ notFoundPage.css             # 404 error page CSS file
│  │  ├─ page.tsx                     # Server component
│  │  └─ projects/
│  │     └─ [id]/
│  │        ├─ page.tsx               # Project Page server component
│  │        ├─ projectContent.tsx     # Project Page client component
│  │        └─ projectPage.css        # Project Page CSS file
│  └─ components/                     # Components created with Storybook following Atomic Design methodology
│     ├─ atoms/
│     ├─ molecules/
│     ├─ organisms/
│     └─ styles/
│        └─ designTokens.css          # Design tokens used in CSS files
└─ tsconfig.json

```

### 🧭 App Navigation Structure

Both desktop and mobile versions are following the same structure with slightly different layouts:

- Home Page: Feed that has the main content split into sections.
  - Header: Displays the basic info (including name, title and set of skills) and navigation buttons.
  - Projects: The collection of recent projects with clickable cards which lead to a project page.
  - Experience: Grid of workplaces with dates and brief description.
  - Education: List of academic background.
  - Contacts: Contact information for collaboration, offers and feedback.
- Project Page: Page with project title, status, description, images, tools and links.

### 🎨 Design

The design is created in [Figma](https://www.figma.com/). The implementation is mostly unique with a little usage of the [MUI compnents](https://mui.com/) but they are also styled to fit the overall design vision. Assets created in Adobe Illustrator and Adobe Photoshop.

Colors used in project:

Background Dark: #131d0e  
Primary: #253512  
Accent: #eab764  
Accent Light: #edc27b  
White: #ffffff

### 📘 Storybook

The project's components were developed using [Storybook](https://storybook.js.org/), located in the `/src/components` directory.

- The design system follows **Atomic Design** methodology (Atoms → Molecules → Organisms).
- Each level contains a set of components categorized by size and complexity.
- Each component includes 3 files:
  1. `index.tsx` – the component implementation
  2. `index.stories.tsx` – the Storybook configuration and preview
  3. `component.css` – custom styles specific to the component

## 🛠️ Tools

This project is built using the following technologies:

[![Figma](https://img.shields.io/badge/Figma-F24E1E?logo=figma&logoColor=white)](https://www.figma.com/)
[![Storybook](https://img.shields.io/badge/Storybook-FF4785?logo=storybook&logoColor=white)](https://storybook.js.org/)
[![Sanity](https://img.shields.io/badge/Sanity-EF2D5E?logo=sanity&logoColor=white)](https://www.sanity.io/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white)](https://vercel.com/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://reactjs.org/)

## 🎅 Credits

- **Charlie**  
  _UI/UX Designer & Frontend Stylist_  
  Owner of the repositiry, designed the user interface and created the custom components in Storybook.

  [GitHub](https://github.com/charliesmir)  
  [Portfolio](https://www.charliesmir.com/)

- **GudokVlad**  
  _Technical Architect & Developer_  
  Configured core technologies, including Sanity integration and Vercel deployment.

  [GitHub](https://github.com/GudokVlad-Pilot)  
  [Portfolio](https://gudokvlad.com/)

> [!IMPORTANT]
>
> - All assets (excluding icons) were created by and are intellectual property of **Charlie**.
> - If you found any violations, please contact us via email to resolve these problems: **charlie.smirnova@gmail.com** or **vladislavpogudin.dev@gmail.com**.
