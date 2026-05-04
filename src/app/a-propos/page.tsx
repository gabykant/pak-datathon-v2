import { MarketingLayout } from '@/components/marketing/marketing-layout'
import { SectionTitle } from '@/components/ui/section-title'

export default function AboutPage() {
  return (
    <MarketingLayout>

      <section className="mx-auto w-full max-w-6xl space-y-8 px-4 py-6 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="A Propos"
          title="Box Lab PAK - ActivSpaces"
          subtitle="Contexte et vision du projet"
        />
        <article className="rounded-2xl border border-[var(--ink-200)] bg-white p-4">
          <p className="mt-3 text-sm leading-relaxed text-[var(--ink-700)]">Le Box Lab est une initiative ambitieuse visant à déployer un laboratoire d’innovation au sein d’ActivSpaces, un incubateur de startups réputé de Douala.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[var(--ink-700)]">Ce partenariat stratégique entre le Port Autonome de Kribi (PAK) et ActivSpaces permettra de créer un espace de travail dynamique et connecté, équipé de ressources technologiques avancées.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[var(--ink-700)]">Le PAK assure le financement de cette prestation, témoignant de son engagement envers l’innovation et le développement technologique dans le secteur portuaire camerounais.
          </p>
        </article>

        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-[var(--ink-200)] bg-white p-6">
            <h3 className="text-lg font-black text-[var(--ink-900)]">Vision stratégique</h3>
            <ul className="mt-3 space-y-2 text-sm text-[var(--ink-700)]">
              <li>• Positionner le PAK comme leader de linnovation portuaire.</li>
              <li>• Développer des solutions concrètes pour les défis portuaires.</li>
              <li>• Préparer l’écosystème pour le datathon à venir.</li>
              <li>• Stimuler l’économie locale et créer des opportunités.</li>
            </ul>
          </article>

          <article className="rounded-2xl border border-[var(--ink-200)] bg-white p-6">
            <h3 className="text-lg font-black text-[var(--ink-900)]">Laboratoire d’innovation</h3>
            <ul className="mt-3 space-y-2 text-sm text-[var(--ink-700)]">
              <li>• Accès à des bases de données anonymisées et à une intelligence artificielle (IA) finement ajustée aux spécificités du port.</li>
            </ul>
<br />
            <h3 className="text-lg font-black text-[var(--ink-900)]">Écosystème collaboratif</h3>
            <ul className="mt-3 space-y-2 text-sm text-[var(--ink-700)]">
              <li>• Synergie entre les acteurs portuaires, les jeunes entrepreneurs et les startups innovantes.</li>
            </ul>
          </article>
        </div>

      </section>

      <section className="mx-auto w-full max-w-6xl space-y-8 px-4 py-6 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Projet"
          title="Présentation stratégique de la plateforme collaborative PAK"
          subtitle="Le projet répond à la complexité systémique des écosystèmes logistiques via une approche data-driven, collaborative et gouvernée."
        />

        <article className="rounded-2xl border border-[var(--ink-200)] bg-white p-6">
          <h2 className="text-xl font-black text-[var(--ink-900)]">Contexte global</h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--ink-700)]">
            Les chaînes logistiques modernes sont marquées par l’hétérogénéité des acteurs, la volatilité des flux et
            la dépendance aux décisions multi-entités. La donnée constitue le levier principal pour réduire
            l’incertitude, accélérer la coordination et fiabiliser la performance.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[var(--ink-700)]">
            La plateforme positionne le PAK comme détenteur stratégique de données navires, marchandises, commerce
            international et camions, et outille les participants pour transformer ces données en solutions concrètes.
          </p>
        </article>

        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-[var(--ink-200)] bg-white p-6">
            <h3 className="text-lg font-black text-[var(--ink-900)]">Principes directeurs</h3>
            <ul className="mt-3 space-y-2 text-sm text-[var(--ink-700)]">
              <li>• Priorisation orientée impact opérationnel et économique mesurable.</li>
              <li>• Gouvernance de la donnée avec traçabilité complète des décisions.</li>
              <li>• Intelligence collective entre métiers, data et technologie.</li>
              <li>• Exécution incrémentale avec livrables validables à chaque phase.</li>
            </ul>
          </article>

          <article className="rounded-2xl border border-[var(--ink-200)] bg-white p-6">
            <h3 className="text-lg font-black text-[var(--ink-900)]">Résultats attendus</h3>
            <ul className="mt-3 space-y-2 text-sm text-[var(--ink-700)]">
              <li>• Réduction des délais de cycle logistique et des congestions.</li>
              <li>• Amélioration de la qualité des arbitrages data.</li>
              <li>• Capacité de simulation et de projection des scénarios critiques.</li>
              <li>• Renforcement de la résilience et de la compétitivité globale.</li>
            </ul>
          </article>
        </div>
      </section>
    </MarketingLayout>
  )
}
