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
        {
            url: `https://chefretard.fr/blog/${posts.map((post) => post.href)}`,
            lastModified: new Date(),
        },
        {
            url: 'https://chefretard.fr/contact',
            lastModified: new Date(),
        }
    ]
}