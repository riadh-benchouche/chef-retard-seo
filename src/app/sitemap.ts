import {MetadataRoute} from 'next'
import {loadArticles} from "@/lib/mdx";

const posts = await loadArticles()

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://chefretard.fr',
            lastModified: new Date(),
        },
        {
            url: 'https://chefretard.fr/about',
            lastModified: new Date(),
        },
        {
            url: 'https://chefretard.fr/blog',
            lastModified: new Date(),
        },
        ...posts.map((post) => ({
            url: `https://chefretard.fr/${post.href}`,
            lastModified: new Date(),
        })),
        {
            url: 'https://chefretard.fr/contact',
            lastModified: new Date(),
        }
    ]
}