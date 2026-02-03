import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/', // Block admin or private routes if you have them
        },
        sitemap: 'https://comexdrycleaner.com/sitemap.xml',
    }
}
