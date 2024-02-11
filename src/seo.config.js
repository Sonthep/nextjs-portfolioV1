export const baseUrl = process.env.NEXT_PUBLIC_WEBSITE_URL

const seoConfig = {
  defaultTitle: 'Sonthep Simmalee | Front-end Developer ',
  titleTemplate: '%s | Sonthep Simmalee',
  description:
    'Front-end Developer specializing in building & designing scalable applications with great user experience.',
  openGraph: {
    title: 'Sonthep Simmalee',
    description:
      'Front-end Developer specializing in building & designing scalable applications with great user experience.',
    images: [
      {
        url: `${baseUrl}api/og?title=home`,
        width: 1200,
        height: 600,
        alt: `Sonthep Simmalee | Front-end Developer`,
      },
    ],
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    site_name: 'Sonthep Simmalee',
  },
}

export default seoConfig
