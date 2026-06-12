export const siteIdentity = {
  code: process.env.NEXT_PUBLIC_SITE_CODE || 'media-distribution-v2',
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'Media Distribution V2',
  tagline: process.env.NEXT_PUBLIC_SITE_TAGLINE || 'News, media, and public updates',
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    'A modern media distribution platform for newsroom updates, announcements, press coverage, and category-led public discovery.',
  domain: process.env.NEXT_PUBLIC_SITE_DOMAIN || 'example.com',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com',
  ogImage: process.env.NEXT_PUBLIC_SITE_OG_IMAGE || '/og-default.png',
  googleMapsEmbedApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY || 'AIzaSyBco7dIECu3rJWjP3J0MImnR_uxlbeqAe0',

} as const

export const defaultAuthorProfile = {
  name: siteIdentity.name,
  avatar: '/placeholder.svg?height=80&width=80',
} as const

