'use client'

const articles = [
  {
    title: '5 Common Accessibility Pitfalls and How to Avoid Them',
    date: '2024',
    link: 'https://klaviyo.tech/5-common-accessibility-pitfalls-and-how-to-avoid-them-e316dfc55ff0',
    image: '/images/writing/a11y.png',
  },
  {
    title: 'Integrating Algolia Search with WordPress Multisite',
    date: '2020',
    link: 'https://upstatement.com/blog/integrating-algolia-search-with-wordpress-multisite/',
    image: '/images/writing/algolia-search.jpeg',
  },
  {
    title: 'Building a Headless Mobile App CMS From Scratch',
    date: '2019',
    link: 'https://upstatement.com/blog/building-a-headless-mobile-app-cms-from-scratch/',
    image: '/images/writing/headless.jpeg',
  },
]

export default function Writing() {
  return (
    <section id="writing" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Blog posts">
      <div>
        <ul className="group/list">
          {articles.map((article, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid grid-cols-8 gap-4 transition-all sm:items-center sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <div className="z-10 col-span-2">
                  <div className="aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 bg-slate-800 flex items-center justify-center">
                    <span className="text-4xl">
                      {index === 0 ? '♿' : index === 1 ? '🔭' : '👻'}
                    </span>
                  </div>
                </div>
                <div className="z-10 col-span-6">
                  <p className="-mt-1 text-sm font-semibold leading-6 text-slate-400">{article.date}</p>
                  <h3 className="-mt-1">
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                      href={article.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`${article.title} (opens in a new tab)`}
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>
                        {article.title.split(' ').slice(0, -1).join(' ')}{' '}
                        <span className="inline-block">
                          {article.title.split(' ').slice(-1)[0]}
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
                  </h3>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
