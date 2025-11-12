'use client'

export default function About() {
  return (
    <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
      <div>
        <p className="mb-4 text-slate-400">
          I'm a full-stack developer passionate about building the whole product: from crafting accessible, pixel-perfect user interfaces to engineering the APIs and services that bring them to life. My current role as a Senior Front-End Engineer at{' '}
          <a
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href="https://www.klaviyo.com/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Klaviyo (opens in a new tab)"
          >
            Klaviyo
          </a>
          {' '}has honed my deep specialization in web accessibility, where I contribute to the foundational UI components that power an inclusive experience for millions.
        </p>

        <p className="mb-4 text-slate-400">
          My career path—winding through{' '}
          <a
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href="https://us.mullenlowe.com/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="advertising agency (opens in a new tab)"
          >
            advertising agencies
          </a>
          ,{' '}
          <a
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href="https://www.apple.com/apple-music/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="huge corporation (opens in a new tab)"
          >
            corporations
          </a>
          , and{' '}
          <a
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href="https://starry.com/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="start-up (opens in a new tab)"
          >
            start-ups
          </a>
          —has given me a versatile, 360-degree view of software development. When I'm not coding, you can find me sharing knowledge through my video course on web development, climbing a rock wall, or on the tennis court.
        </p>
      </div>
    </section>
  )
}
