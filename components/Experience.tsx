'use client'

const experiences = [
  {
    period: 'Sep 2024 — Present',
    company: 'Self Employed',
    companyUrl: '#',
    position: 'Full Stack Developer',
    description:
      "Maintained and built new features for two React applications and one JavaScript library, guiding sustainable development while receiving over 500k aggregate monthly downloads. Owned React performance initiative resulting in 90% time-to-interactive reduction. Configured size-efficient and performant project builds using Webpack, set up test suites, authored documentation, and configured CI across projects. Developed automated security, licensing, and accessibility audit suites, contributed to open-source JavaScript Markdown and YAML parser libraries, and owned code review, release, and change management processes.",
    technologies: ['React', 'JavaScript', 'Webpack', 'Node.js', 'CI/CD'],
  },
  {
    period: 'Feb 2020 — Aug 2024',
    company: 'Safetrust',
    companyUrl: '#',
    position: 'Web Developer',
    description:
      "Upgraded architecture of an enterprise clothing platform using React, Node, MongoDB, and Firebase, resulting in a 7% improvement in the number of requests per second. Developed headless CRM using Strapi, Node, and React, and redesigned database from MySQL to MongoDB. Developed a price analysis platform depending on Price API and Google Merchant API with React and .Net. Set up and administered a continuous integration system based on CruiseControl.NET, including nightly builds with unit tests run and delivered to the test servers, and switched to TeamCity for database scripts, versioning, and updating the system.",
    technologies: ['React', 'Node.js', 'MongoDB', 'Firebase', 'Strapi', '.Net', 'MySQL', 'TeamCity'],
  },
  {
    period: 'May 2018 — Dec 2019',
    company: 'SentiLink',
    companyUrl: '#',
    position: 'Tech Lead: JavaScript UI / NodeJS / Full Stack Web Developer',
    description:
      "Optimized the website's performance and planned for the web farm scaling: caching, using CDN, styles, and scripts bundling, and minification. Created and modified the database stored procedures, views, and functions. Supported and improved stability of legacy full-stack JS + high availability NodeJS service based on a fork of Etherpad Lite library, and developed next-generation service based on Dart language. Took part in the development of UI with the Angular 8 framework, performed transparent service migration from NodeJS version to Dart one with possible fallback, and developed transport layer from browser to server with cross-domain secure WebSockets and fallback to long polling. Worked with code of WYSIWYG editors Etherpad and CodeMirror both for mobile and desktop browsers, covered all this functionality with unit tests both in JavaScript and Dart, cooperated with and improved processes of continuous integration and continuous delivery, performed design and code review, and developed a new WYSIWYG editor based on Quill.",
    technologies: ['JavaScript', 'Node.js', 'Angular', 'Dart', 'WebSockets', 'Etherpad', 'CodeMirror', 'Quill'],
  },
  {
    period: 'Feb 2017 — Apr 2018',
    company: 'Emitrr',
    companyUrl: '#',
    position: 'Full Stack Developer',
    description:
      'Improved a FinTech platform on the Frontend side and API implementation in React. Developed mobile app from desktop web version with Firebase, added 30+ components to be used in the global app by using styled-components, and redesigned global state management system with Redux Thunk. Simplified and improved UX from new design, improved performance by optimizing codes with modern JS and API handling, and developed Admin panel with React and Node.',
    technologies: ['React', 'Node.js', 'Firebase', 'Redux', 'Redux Thunk', 'styled-components', 'JavaScript'],
  },
  {
    period: 'Dec 2014 — Nov 2016',
    company: 'Capella',
    companyUrl: '#',
    position: 'Frontend Developer',
    description:
      'Developed and maintained high-traffic live streaming websites in PHP and MySQL. Engineered and reverse engineered SOLID solutions in a proprietary MVC framework, worked closely alongside front-end developers, flash developers, and QA, and maintained code and workflow and documentation in Jira, Confluence, and BitBucket. Built software in Agile and SCRUM principles and methodologies, and unit-tested code for robustness, including edge cases, usability, and general reliability.',
    technologies: ['PHP', 'MySQL', 'MVC', 'JavaScript', 'Agile', 'SCRUM'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience">
      <div>
        <ol className="group/list">
          {experiences.map((exp, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label={exp.period}>
                  {exp.period}
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${exp.position} at ${exp.company} (opens in a new tab)`}
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                          {exp.position} ·{' '}
                          <span className="inline-block">
                            {exp.company}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </span>
                      </a>
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-slate-400">{exp.description}</p>
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    {exp.technologies.map((tech) => (
                      <li key={tech} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-12">
          <a
            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="View Full Résumé (opens in a new tab)"
          >
            <span>
              View Full{' '}
              <span className="inline-block">
                Résumé
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
