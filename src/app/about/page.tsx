import {type Metadata} from 'next'
import {ContactSection} from '@/components/ContactSection'
import {Container} from '@/components/Container'
import {GridList, GridListItem} from '@/components/GridList'
import {PageIntro} from '@/components/PageIntro'
import {PageLinks} from '@/components/PageLinks'
import {SectionIntro} from '@/components/SectionIntro'
import {StatList, StatListItem} from '@/components/StatList'
import {loadArticles} from '@/lib/mdx'

function Culture() {
    return (
        <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
            <SectionIntro
                eyebrow="Notre Culture"
                title="Équilibrez votre passion culinaire avec votre amour pour la vie. Nous sommes Chef Retard."
                invert
            >
                <p>
                    Équilibrez votre passion pour la cuisine avec votre passion pour la vie. Nous sommes un groupe de
                    personnes partageant les mêmes valeurs fondamentales.
                </p>
            </SectionIntro>
            <Container className="mt-16">
                <GridList>
                    <GridListItem title="Loyauté" invert>
                        Notre équipe est avec Chef Retard depuis le début, car aucun d'entre eux n'est autorisé à avoir
                        des profils LinkedIn.
                    </GridListItem>
                    <GridListItem title="Confiance" invert>
                        Peu importe quand notre équipe travaille, tant qu'ils créent des saveurs exceptionnelles chaque
                        seconde éveillée.
                    </GridListItem>
                    <GridListItem title="Compassion" invert>
                        On ne sait jamais quel défi culinaire quelqu'un relève chez lui, et nous nous assurons de ne
                        jamais le découvrir.
                    </GridListItem>
                </GridList>
            </Container>
        </div>
    )
}

export const metadata: Metadata = {
    title: 'À Propos de Chef Retard',
    description:
        "Découvrez l'histoire et la passion qui se cachent derrière Chef Retard. Rencontrez notre talentueux chef cuisinier, expert en astuces culinaires, et explorez notre engagement envers l'excellence gastronomique.",
    keywords: "Chef Retard, Chef cuisinier, Astuces culinaires, Excellence gastronomique, Passion culinaire, Histoire de Chef Retard",
    twitter: {
        title: 'À Propos de Chef Retard',
        description:
            "Découvrez l'histoire et la passion qui se cachent derrière Chef Retard. Rencontrez notre talentueux chef cuisinier, expert en astuces culinaires, et explorez notre engagement envers l'excellence gastronomique.",
    }
}

export default async function About() {
    let blogArticles = (await loadArticles()).slice(0, 2)

    return (
        <>
            <PageIntro eyebrow="À Propos de Chef Retard"
                       title="Découvrez l'histoire et la passion derrière Chef Retard">
                <p>
                    Rencontrez notre chef, un passionné de la cuisine et expert en astuces culinaires. Chef Retard
                    s'engage à partager son savoir-faire pour rendre la cuisine accessible à tous, tout en élevant
                    chaque plat à un niveau d'excellence inégalé.
                </p>
                <div className="mt-10 max-w-2xl space-y-6 text-base">
                    <p>
                        Chez Chef Retard, notre engagement envers l'excellence gastronomique guide chacune de nos
                        actions. Nous croyons en la création d'une communauté où chacun peut découvrir, apprendre et
                        perfectionner ses compétences culinaires, grâce aux conseils avisés de notre chef.
                    </p>
                    <p>
                        Plongez dans l'histoire de Chef Retard, depuis ses débuts modestes jusqu'à son statut actuel de
                        source incontournable d'astuces culinaires. Notre chef a parcouru un chemin passionnant pour
                        partager sa passion pour la cuisine avec le monde entier.
                    </p>
                </div>
            </PageIntro>
            <Container className="mt-16">
                <StatList>
                    <StatListItem value="35" label="Employés sous-payés chez Chef Retard"/>
                    <StatListItem value="52" label="Clients satisfaits"/>
                    <StatListItem value="$25M" label="Factures émises"/>
                </StatList>
            </Container>

            <Culture/>

            <PageLinks
                className="mt-24 sm:mt-32 lg:mt-40"
                title="De notre blog"
                intro="Notre équipe de chefs expérimentés et de développeurs a une seule préoccupation : donner vie à vos idées pour égayer les utilisateurs du monde entier. De la réalisation de Brand Sprints à la conception UX, nous mettons notre passion pour la cuisine au service de Chef Retard."
                pages={blogArticles}
            />

            <ContactSection/>
        </>
    )
}
