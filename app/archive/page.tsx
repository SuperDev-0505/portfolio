'use client'

import Link from 'next/link'

const projects = [
  {
    year: '2023',
    name: 'Emerson Collective',
    madeAt: 'Upstatement',
    builtWith: ['Next.js', 'TypeScript', 'SCSS', 'Contentful'],
    link: 'https://www.emersoncollective.com/',
    linkText: 'emersoncollective.com',
  },
  {
    year: '2023',
    name: 'Harvard Business School Next.js Site',
    madeAt: 'Upstatement',
    builtWith: ['React', 'TypeScript', 'Next.js', 'Contentful'],
    link: 'https://www.hbs.edu/',
    linkText: 'hbs.edu',
  },
  {
    year: '2022',
    name: 'Harvard Business School Design System',
    madeAt: 'Upstatement',
    builtWith: ['Storybook', 'React', 'TypeScript'],
    link: null,
    linkText: null,
  },
  {
    year: '2022',
    name: 'Threadable',
    madeAt: 'Upstatement',
    builtWith: ['React Native', 'Ruby on Rails', 'Firebase'],
    link: 'https://apps.apple.com/app/apple-store/id1550995547?pt=122219983&ct=threadablebooks.com%20header&mt=8',
    linkText: 'apps.apple.com',
  },
  {
    year: '2022',
    name: 'Pratt',
    madeAt: 'Upstatement',
    builtWith: ['WordPress', 'Timber', 'WordPress Multisite', 'Gutenberg', 'JavaScript'],
    link: 'https://www.pratt.edu/',
    linkText: 'pratt.edu',
  },
  {
    year: '2022',
    name: 'Everytown Gun Law Rankings',
    madeAt: 'Upstatement',
    builtWith: ['WordPress', 'Timber', 'PHP', 'Airtable API'],
    link: 'https://everytownresearch.org/rankings/',
    linkText: 'everytownresearch.org/rankings',
  },
  {
    year: '2021',
    name: 'Koala Health',
    madeAt: 'Upstatement',
    builtWith: ['Next.js', 'TypeScript', 'Redux Toolkit', 'Stripe', 'Algolia', 'Firebase Auth', 'Formik', 'Vercel'],
    link: 'https://www.koala.health/',
    linkText: 'koala.health',
  },
  {
    year: '2021',
    name: 'Philadelphia Inquirer Sports Scoreboards',
    madeAt: 'Upstatement',
    builtWith: ['React', 'TypeScript', 'Stats Perform API'],
    link: 'https://www.inquirer.com/sports/',
    linkText: 'inquirer.com/sports',
  },
  {
    year: '2021',
    name: 'Vanderbilt Design System',
    madeAt: 'Upstatement',
    builtWith: ['Twig', 'Puppy', 'JavaScript'],
    link: 'https://www.vanderbilt.edu/',
    linkText: 'vanderbilt.edu',
  },
  {
    year: '2020',
    name: 'Michelle Wu for Boston Grassroots Toolkit',
    madeAt: 'Upstatement',
    builtWith: ['Gatsby', 'Styled Components'],
    link: 'https://toolkit.michelleforboston.com/',
    linkText: 'toolkit.michelleforboston.com',
  },
  {
    year: '2020',
    name: 'The 19th News',
    madeAt: 'Upstatement',
    builtWith: ['WordPress', 'Timber', 'Gutenberg', 'PHP', 'JavaScript', 'Mailchimp', 'AMP'],
    link: 'https://19thnews.org/',
    linkText: '19thnews.org',
  },
  {
    year: '2020',
    name: "Upstatement's WordPress Starter Kit",
    madeAt: 'Upstatement',
    builtWith: ['WordPress', 'Timber', 'Gutenberg', 'PHP', 'JavaScript'],
    link: null,
    linkText: null,
  },
  {
    year: '2020',
    name: 'Northeastern CSSH',
    madeAt: 'Upstatement',
    builtWith: ['WordPress', 'Timber', 'WordPress Multisite', 'PHP', 'Algolia', 'JavaScript'],
    link: 'https://cssh.northeastern.edu/',
    linkText: 'cssh.northeastern.edu',
  },
  {
    year: '2020',
    name: 'Integrating Algolia Search with WordPress Multisite',
    madeAt: 'Upstatement',
    builtWith: ['Algolia', 'WordPress', 'PHP'],
    link: 'https://medium.com/stories-from-upstatement/integrating-algolia-search-with-wordpress-multisite-e2dea3ed449c',
    linkText: 'medium.com',
  },
  {
    year: '2020',
    name: 'Time to Have More Fun',
    madeAt: null,
    builtWith: ['Next.js', 'Tailwind CSS', 'Firebase'],
    link: 'https://time-to-have-more-fun.now.sh/',
    linkText: 'time-to-have-more-fun.now.sh',
  },
  {
    year: '2019',
    name: 'Upstatement.com',
    madeAt: 'Upstatement',
    builtWith: ['Nuxt', 'Vue', 'Prismic'],
    link: 'https://www.upstatement.com/',
    linkText: 'upstatement.com',
  },
  {
    year: '2019',
    name: 'Building a Headless Mobile App CMS From Scratch',
    madeAt: 'Upstatement',
    builtWith: ['Node', 'Express', 'Firebase', 'Vue'],
    link: 'https://medium.com/stories-from-upstatement/building-a-headless-mobile-app-cms-from-scratch-bab2d17744d9',
    linkText: 'medium.com',
  },
  {
    year: '2019',
    name: 'Moms Demand Action Mobile App',
    madeAt: 'Upstatement',
    builtWith: ['NativeScript Vue', 'iOS', 'Android'],
    link: 'https://www.upstatement.com/work/moms-demand-action/',
    linkText: 'Case Study',
  },
  {
    year: '2019',
    name: 'OctoProfile',
    madeAt: null,
    builtWith: ['Next.js', 'Chart.js', 'GitHub API'],
    link: 'https://octoprofile.now.sh',
    linkText: 'octoprofile.now.sh',
  },
  {
    year: '2018',
    name: 'Google Keep Clone',
    madeAt: null,
    builtWith: ['Vue', 'Firebase'],
    link: 'https://github.com/bchiang7/google-keep-vue-firebase',
    linkText: 'GitHub',
    isGitHub: true,
  },
  {
    year: '2018',
    name: 'Spotify Profile',
    madeAt: null,
    builtWith: ['React', 'Express', 'Styled Components'],
    link: 'https://spotify-profile.herokuapp.com/',
    linkText: 'spotify-profile.herokuapp.com',
  },
  {
    year: '2018',
    name: 'Devoted Health',
    madeAt: 'Upstatement',
    builtWith: ['Gatsby', 'TypeScript', 'Algolia'],
    link: 'https://www.devoted.com/',
    linkText: 'devoted.com',
  },
  {
    year: '2018',
    name: 'Flagship Pioneering',
    madeAt: 'Upstatement',
    builtWith: ['Craft CMS', 'Chart.js'],
    link: 'https://www.flagshippioneering.com/',
    linkText: 'flagshippioneering.com',
  },
  {
    year: '2018',
    name: 'Upstatement ESLint Config',
    madeAt: 'Upstatement',
    builtWith: ['ESLint'],
    link: 'https://www.npmjs.com/package/@upstatement/eslint-config',
    linkText: 'npmjs.com',
  },
  {
    year: '2018',
    name: 'Upstatement Prettier Config',
    madeAt: 'Upstatement',
    builtWith: ['Prettier'],
    link: 'https://www.npmjs.com/package/@upstatement/prettier-config',
    linkText: 'npmjs.com',
  },
  {
    year: '2018',
    name: 'blistabloc',
    madeAt: 'Scout',
    builtWith: ['WordPress', 'Timber', 'WooCommerce'],
    link: null,
    linkText: null,
  },
  {
    year: '2018',
    name: "Spotify's Top Tracks of 2017",
    madeAt: 'Northeastern',
    builtWith: ['R', 'Spotify API'],
    link: 'https://github.com/bchiang7/spotify-top-tracks-2017',
    linkText: 'GitHub',
    isGitHub: true,
  },
  {
    year: '2017',
    name: 'Halcyon Theme',
    madeAt: null,
    builtWith: ['VS Code', 'Sublime Text', 'Atom', 'iTerm2', 'Hyper'],
    link: 'https://halcyon-theme.netlify.com/',
    linkText: 'halcyon-theme.netlify.com',
  },
  {
    year: '2017',
    name: 'Apple Music - MusicKit JS',
    madeAt: 'Apple',
    builtWith: ['JavaScript'],
    link: 'https://developer.apple.com/documentation/musickitjs',
    linkText: 'developer.apple.com',
  },
  {
    year: '2017',
    name: 'Apple Music Embeddable Web Player Widget',
    madeAt: 'Apple',
    builtWith: ['MusicKit.js', 'JavaScript', 'SCSS'],
    link: 'https://tools.applemusic.com/en-us',
    linkText: 'tools.applemusic.com',
  },
  {
    year: '2017',
    name: 'Apple Music Facebook Messenger Integration',
    madeAt: 'Apple',
    builtWith: ['Ember', 'JavaScript', 'SCSS'],
    link: 'https://www.theverge.com/2017/10/5/16433770/facebook-messenger-apple-music-bot-song-streaming',
    linkText: 'theverge.com',
  },
  {
    year: '2017',
    name: 'Personal Website V3',
    madeAt: null,
    builtWith: ['Jekyll', 'SCSS', 'JavaScript'],
    link: 'https://v3.brittanychiang.com/',
    linkText: 'v3.brittanychiang.com',
  },
  {
    year: '2017',
    name: 'Interventions',
    madeAt: 'Scout',
    builtWith: ['Jekyll', 'SCSS', 'JavaScript'],
    link: 'https://interventions.design/',
    linkText: 'interventions.design',
  },
  {
    year: '2017',
    name: 'Lonely Planet DBMS',
    madeAt: 'Northeastern',
    builtWith: ['Python', 'MySQL', 'Flask', 'JavaScript'],
    link: 'https://github.com/bchiang7/CS3200-Project',
    linkText: 'GitHub',
    isGitHub: true,
  },
  {
    year: '2017',
    name: 'myNEU Redesign',
    madeAt: 'Northeastern',
    builtWith: ['Jekyll', 'SCSS', 'JavaScript'],
    link: 'https://bchiang7.github.io/Redesign-myNEU/',
    linkText: 'bchiang7.github.io/Redesign-myNEU',
  },
  {
    year: '2017',
    name: 'Crowd DJ',
    madeAt: 'HackBeanpot 2017',
    builtWith: ['React', 'Firebase', 'Spotify API'],
    link: 'https://github.com/crowddj/crowddj-react',
    linkText: 'GitHub',
    isGitHub: true,
  },
  {
    year: '2016',
    name: 'Personal Website V2',
    madeAt: null,
    builtWith: ['Jekyll', 'SCSS', 'JavaScript'],
    link: 'https://v2.brittanychiang.com/',
    linkText: 'v2.brittanychiang.com',
  },
  {
    year: '2016',
    name: 'Weather Widget',
    madeAt: null,
    builtWith: ['Node', 'Express', 'EJS'],
    link: 'https://github.com/bchiang7/DemoWebApp',
    linkText: 'GitHub',
    isGitHub: true,
  },
  {
    year: '2016',
    name: 'Screentime 2.0',
    madeAt: 'Starry',
    builtWith: ['Cordova', 'Backbone', 'Marionette'],
    link: 'https://starry.com/blog/product/whats-new-screentime-just-got-better-for-parents',
    linkText: 'starry.com',
  },
  {
    year: '2016',
    name: 'React Profile',
    madeAt: null,
    builtWith: ['React', 'CSS'],
    link: 'https://bchiang7.github.io/react-profile/',
    linkText: 'bchiang7.github.io/react-profile',
  },
  {
    year: '2016',
    name: 'CourseSource',
    madeAt: 'Northeastern',
    builtWith: ['Angular', 'Node', 'Express', 'MongoDB'],
    link: 'https://github.com/bchiang7/WebDevSpring2016/tree/master/public/project',
    linkText: 'GitHub',
    isGitHub: true,
  },
  {
    year: '2016',
    name: 'Personal Website V1',
    madeAt: null,
    builtWith: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    link: 'https://v1.brittanychiang.com/',
    linkText: 'v1.brittanychiang.com',
  },
  {
    year: '2016',
    name: 'Fontipsums',
    madeAt: null,
    builtWith: ['HTML', 'SCSS'],
    link: 'http://bchiang7.github.io/fontipsums/',
    linkText: 'bchiang7.github.io/fontipsums',
  },
  {
    year: '2015',
    name: 'NU Women in Tech',
    madeAt: 'Northeastern',
    builtWith: ['Jekyll', 'Bootstrap'],
    link: 'https://nuwit.ccs.neu.edu/',
    linkText: 'nuwit.ccs.neu.edu',
  },
  {
    year: '2015',
    name: 'One Card For All',
    madeAt: 'MullenLowe',
    builtWith: ['HTML', 'SCSS', 'JavaScript', 'jQuery'],
    link: null,
    linkText: null,
  },
  {
    year: '2015',
    name: 'JetBlue HumanKinda',
    madeAt: 'MullenLowe',
    builtWith: ['Tumblr', 'HTML', 'CSS', 'JavaScript'],
    link: null,
    linkText: null,
  },
]

export default function ArchivePage() {
  return (
    <div className="lg:py-24">
      <Link
        className="group mb-2 inline-flex items-center font-semibold leading-tight text-teal-300"
        href="/"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
            clipRule="evenodd"
          ></path>
        </svg>
        Atila Manoel Soares da Silva
      </Link>
      <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">All Projects</h1>
      <table id="content" className="mt-12 w-full border-collapse text-left">
        <thead className="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur">
          <tr>
            <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Year</th>
            <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Project</th>
            <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">Made at</th>
            <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">Built with</th>
            <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 sm:table-cell">Link</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={index} className="border-b border-slate-300/10 last:border-none">
              <td className="py-4 pr-4 align-top text-sm">
                <div className="translate-y-px">{project.year}</div>
              </td>
              <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                <div>
                  <div className="block sm:hidden">
                    {project.link ? (
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 hover:text-slate-200 focus-visible:text-teal-300 sm:hidden group/link text-base"
                        href={project.link}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${project.name} (opens in a new tab)`}
                      >
                        <span>
                          {project.name.split(' ').slice(0, -1).join(' ')}{' '}
                          <span className="inline-block">
                            {project.name.split(' ').slice(-1)[0]}
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
                    ) : (
                      <span>{project.name}</span>
                    )}
                  </div>
                  <div className="hidden sm:block">{project.name}</div>
                </div>
              </td>
              <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
                <div className="translate-y-px whitespace-nowrap">{project.madeAt || ''}</div>
              </td>
              <td className="hidden py-4 pr-4 align-top lg:table-cell">
                <ul className="flex -translate-y-1.5 flex-wrap">
                  {project.builtWith.map((tech, techIndex) => (
                    <li key={techIndex} className="my-1 mr-1.5">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        {tech}
                      </div>
                    </li>
                  ))}
                </ul>
              </td>
              <td className="hidden py-4 align-top sm:table-cell">
                {project.link && (
                  <ul className="translate-y-1">
                    <li className="mb-1 flex items-center">
                      {project.isGitHub ? (
                        <a
                          className="flex items-center text-sm text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                          href={project.link}
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label={`${project.linkText} (opens in a new tab)`}
                        >
                          <span>{project.linkText}</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="ml-1.5 h-3.5 w-3.5 shrink-0"
                            aria-hidden="true"
                          >
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                          </svg>
                        </a>
                      ) : (
                        <a
                          className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 text-sm text-slate-400 hover:text-slate-200 focus-visible:text-teal-300 group/link text-sm"
                          href={project.link}
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label={`${project.linkText} (opens in a new tab)`}
                        >
                          <span>
                            {' '}
                            <span className="inline-block">
                              {project.linkText}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5"
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
                      )}
                    </li>
                  </ul>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

