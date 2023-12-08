import {type Metadata} from 'next'
import Image from 'next/image'
import Link from 'next/link'

import {Border} from '@/components/Border'
import {Button} from '@/components/Button'
import {ContactSection} from '@/components/ContactSection'
import {Container} from '@/components/Container'
import {FadeIn} from '@/components/FadeIn'
import {PageIntro} from '@/components/PageIntro'
import {formatDate} from '@/lib/formatDate'
import {loadArticles} from '@/lib/mdx'

export const metadata: Metadata = {
    title: 'Explorez nos articles et plongez dans l\'univers de Chef Retard.',
    description: "Découvrez les conseils culinaires d'un chef passionné sur Chef Retard. Explorez des astuces, recettes et actualités pour élever votre expérience culinaire. Suivez notre blog pour rester connecté(e) avec les dernières tendances de la cuisine et les conseils d'un expert.",
    keywords: "chef retard, blog , artciles , cuisine, moderne,cuisine sans stress, recettes, astuces culinaires, conseils de chefs, cuisine en famille",
    twitter: {
        title: 'Explorez nos articles et plongez dans l\'univers de Chef Retard.',
        description: "Découvrez les conseils culinaires d'un chef passionné sur Chef Retard. Explorez des astuces, recettes et actualités pour élever votre expérience culinaire. Suivez notre blog pour rester connecté(e) avec les dernières tendances de la cuisine et les conseils d'un expert.",
    }
}

export default async function Blog() {
    let articles = await loadArticles()

    return (
        <>
            <PageIntro eyebrow="Chef Retard Blog"
                       title="Explorez nos articles et plongez dans l'univers de Chef Retard.">
                <p>
                    Découvrez les conseils culinaires d'un chef passionné sur Chef Retard. Explorez des astuces,
                    recettes et actualités pour élever votre expérience culinaire. Suivez notre blog pour rester
                    connecté(e) avec les dernières tendances de la cuisine et les conseils d'un expert.
                </p>
            </PageIntro>

            <Container className="mt-24 sm:mt-32 lg:mt-40">
                <div className="space-y-24 lg:space-y-32">
                    {articles.map((article) => (
                        <FadeIn key={article.href}>
                            <article>
                                <Border className="pt-16">
                                    <div className="relative lg:-mx-4 lg:flex lg:justify-end">
                                        <div className="pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0">
                                            <h2 className="font-display text-2xl font-semibold text-neutral-950">
                                                <Link href={article.href}>{article.title}</Link>
                                            </h2>
                                            <dl className="lg:absolute lg:left-0 lg:top-0 lg:w-1/3 lg:px-4">
                                                <dt className="sr-only">Published</dt>
                                                <dd className="absolute left-0 top-0 text-sm text-neutral-950 lg:static">
                                                    <time dateTime={article.date}>
                                                        {formatDate(article.date)}
                                                    </time>
                                                </dd>
                                                <dt className="sr-only">Author</dt>
                                                <dd className="mt-6 flex gap-x-4">
                                                    <div
                                                        className="flex-none overflow-hidden rounded-xl bg-neutral-100">
                                                        <Image
                                                            alt=""
                                                            {...article.author.image}
                                                            className="h-12 w-12 object-cover grayscale"
                                                        />
                                                    </div>
                                                    <div className="text-sm text-neutral-950">
                                                        <div className="font-semibold">
                                                            {article.author.name}
                                                        </div>
                                                        <div>{article.author.role}</div>
                                                    </div>
                                                </dd>
                                            </dl>
                                            <p className="mt-6 max-w-2xl text-base text-neutral-600">
                                                {article.description}
                                            </p>
                                            <Button
                                                href={article.href}
                                                aria-label={`Read more: ${article.title}`}
                                                className="mt-8"
                                            >
                                                Lire l'article
                                            </Button>
                                        </div>
                                    </div>
                                </Border>
                            </article>
                        </FadeIn>
                    ))}
                </div>
            </Container>

            <ContactSection/>
        </>
    )
}
