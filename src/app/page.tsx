import {type Metadata} from 'next'
import Image from 'next/image'
import Link from 'next/link'

import {ContactSection} from '@/components/ContactSection'
import {Container} from '@/components/Container'
import {FadeIn, FadeInStagger} from '@/components/FadeIn'
import {SectionIntro} from '@/components/SectionIntro'
import {Testimonial} from '@/components/Testimonial'
import logoChefMate from '@/images/clients/chef-mate.svg'
import logoChefWay from '@/images/clients/chef-way.svg'
import article1 from '@/images/article-1.svg'
import {ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon} from '@heroicons/react/24/outline'
import React from "react";


const aboutContent = [
    {
        name: 'Notre Histoire',
        description:
            'Chef Retard a vu le jour par la passion partagée pour une approche détendue de la cuisine. Notre mission est de diffuser des conseils pratiques, des récits inspirants de chefs, et des recettes mettant en avant la joie de cuisiner sans précipitation.',
        icon: ArrowPathIcon
    },
    {
        name: 'Vision Culinaire Unique',
        description:
            'Explorez notre site pour découvrir notre vision unique de la cuisine. Nous croyons en la création de moments délicieux et gratifiants en partageant des conseils, des histoires, et des recettes qui reflètent notre amour pour la cuisine.',
        icon: CloudArrowUpIcon
    },
    {
        name: 'Découvrez Chef Retard',
        description:
            'Plongez dans l\'univers de Chef Retard et apprenez comment nous transformons chaque instant en cuisine en une expérience mémorable. Explorez nos articles, recettes, et astuces culinaires pour une approche décontractée de la gastronomie.',
        icon: LockClosedIcon
    },
    {
        name: 'Joignez-vous à Notre Communauté',
        description:
            'Rejoignez notre communauté passionnée de cuisiniers sans stress. Que vous soyez débutant ou expert en cuisine, Chef Retard offre une plateforme où chacun peut trouver inspiration, conseils, et plaisir dans l\'art de cuisiner sans retard.',
        icon: FingerPrintIcon
    },
]

function About() {
    return (
        <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
            <Container>
                <FadeIn className="flex items-center gap-x-8">
                    <h2 className="text-center font-display text-base font-semibold tracking-wider text-white sm:text-left">
                        À propos de chef retard
                    </h2>
                    <div className="h-px flex-auto bg-neutral-800"/>
                </FadeIn>
                <FadeInStagger faster>
                    <div
                        className="mt-10 grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {aboutContent.map((content: any, index: number) => (
                            <div key={index} className="relative pl-16">
                                <div className="font-display text-sm font-semibold tracking-wider text-white text-left">
                                    <div
                                        className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-200">
                                        <content.icon className="h-6 w-6 text-black" aria-hidden="true"/>
                                    </div>
                                    {content.name}
                                </div>
                                <p className="mt-2 text-base leading-7 text-gray-300">{content.description}</p>
                            </div>
                        ))}
                    </div>
                </FadeInStagger>
            </Container>
        </div>
    )
}

const articles = [
    {
        title: 'Cuisine Relaxante : Un Guide Complet pour Éliminer le Stress',
        href: 'blog/cuisine-relaxante-un-guide-complet-pour-eliminer-le-stress',
        date: '2023',
        category: 'Bien-Être Culinaire',
        description:
            'Découvrez notre guide complet pour cuisiner sans stress sur Chef Retard. Apprenez à planifier, à organiser votre espace de travail, et à savourer chaque moment en cuisine. Transformez votre expérience culinaire avec nos conseils pratiques.',
        logo: article1,
        logoAlt: 'Cooking Bliss',
    },
    {
        title: 'Gestion du Temps en Cuisine : Astuces Inspirées des Chefs',
        href: 'blog/gestion-du-temps-en-cuisine-astuces-inspirees-des-chefs',
        date: '2023',
        category: 'Techniques Culinaires',
        description:
            'Explorez des techniques de gestion du temps en cuisine inspirées des chefs sur Chef Retard. Maximisez votre efficacité, minimisez le stress, et découvrez comment les professionnels font face aux défis du temps en cuisine. Transformez-vous en chef du temps.',
        logo: logoChefMate,
        logoAlt: 'Time Mastery',
    },
    {
        title: 'Cuisine en Famille : Recettes et Conseils pour des Moments Mémorables',
        href: 'blog/cuisine-en-famille-recettes-et-conseils-pour-des-moments-memorables',
        date: '2023',
        category: 'Cuisine Familiale',
        description:
            'Plongez dans l\'univers de la cuisine en famille avec nos recettes et conseils sur Chef Retard. Découvrez des plats adaptés à tous les âges, des activités ludiques en cuisine, et créez des souvenirs mémorables autour de la table. Établissez des traditions culinaires en famille.',
        logo: logoChefWay,
        logoAlt: 'Family Kitchen',
    },

]

function Articles() {
    return (
        <>
            <SectionIntro
                title="Derniers Articles de Chef Retard"
                className="mt-24 sm:mt-32 lg:mt-40"
            >
                <p>
                    Découvrez notre collection d'articles récents sur Chef Retard. Des astuces pour cuisiner sans stress
                    aux conseils de chefs professionnels, explorez nos dernières publications pour enrichir votre
                    expérience culinaire.
                </p>
            </SectionIntro>
            <Container className="mt-16">
                <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {articles.map((article, index) => (
                        <FadeIn key={index} className="flex">
                            <article
                                className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                                <h3>
                                    <Link href={article.href}>
                                        <span className="absolute inset-0 rounded-3xl"/>
                                        <Image
                                            src={article.logo}
                                            alt={article.logoAlt}
                                            className="h-24 w-auto"
                                            unoptimized
                                        />
                                    </Link>
                                </h3>
                                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                                    <time
                                        dateTime={article.date}
                                        className="font-semibold"
                                    >
                                        {article.date}
                                    </time>
                                    <span className="text-neutral-300" aria-hidden="true">/</span>
                                    <span>{article.category}</span>
                                </p>
                                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                                    {article.title}
                                </p>
                                <p className="mt-4 text-base text-neutral-600">
                                    {article.description}
                                </p>
                            </article>
                        </FadeIn>
                    ))}
                </FadeInStagger>
            </Container>
        </>
    )
}
export const metadata: Metadata = {
    title: 'Découvrez l\'Art de la Cuisine Sans Retard avec Chef Retard',
    description:
        'Explorez notre univers culinaire où la cuisine devient une expérience relaxante. Trouvez des conseils pratiques, des recettes délicieuses, et des astuces pour cuisiner sans stress. Plongez dans Chef Retard et apprenez à savourer chaque moment en cuisine.',
    keywords: "chef retard, cuisine sans stress, recettes, astuces culinaires, conseils de chefs, cuisine en famille",
    twitter: {
        title: 'Découvrez l\'Art de la Cuisine Sans Retard avec Chef Retard',
        description: 'Explorez notre univers culinaire où la cuisine devient une expérience relaxante. Trouvez des conseils pratiques, des recettes délicieuses, et des astuces pour cuisiner sans stress. Plongez dans Chef Retard et apprenez à savourer chaque moment en cuisine.',
    }
}

export default async function Home() {
    return (
        <>
            <Container className="mt-24 sm:mt-32 md:mt-56">
                <FadeIn className="max-w-3xl">
                    <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
                        Explorez la Cuisine Sans Retard avec Chef Retard
                    </h1>
                    <p className="mt-6 text-xl text-neutral-600">
                        Découvrez des recettes délicieuses, des conseils de chefs, et plongez dans l'univers culinaire
                        sans stress avec Chef Retard. Savourez chaque étape de votre parcours en cuisine.
                    </p>
                </FadeIn>
            </Container>

            <About/>

            <Articles/>

            <Testimonial
                className="mt-24 sm:mt-32 lg:mt-40"

                client={{name: 'Chef retard', logo: logoChefWay}}
            >
                Grâce à Chef Retard, notre équipe a atteint des sommets inégalés en matière de performance culinaire.
                Une révolution qui a propulsé notre succès gastronomique au sommet, avec une exécution impeccable et des
                saveurs extraordinaires.
            </Testimonial>

            <ContactSection/>
        </>
    )
}
