import { MarketingLayout } from '@/components/marketing/marketing-layout'
import { SectionTitle } from '@/components/ui/section-title'

const glossary = [
  {
    term: 'BAS',
    definition:
      'Bloc/étape documentaire opérationnelle utilisée comme condition de progression d’un dossier avant exécution terrain.',
  },
  {
    term: 'Cluster de problème',
    definition:
      'Regroupement de problématiques similaires (opérationnel, documentaire, IT, coordination, réglementaire, etc.).',
  },
  {
    term: 'Data Mapping',
    definition:
      'Identification précise des datasets requis pour résoudre un problème (navires, marchandises, commerce, camions).',
  },
  {
    term: 'SLA',
    definition:
      'Service Level Agreement: délai cible contractualisé pour une étape de traitement ou validation.',
  },
  {
    term: 'Audit Trail',
    definition:
      'Historique horodaté des actions et décisions pour garantir traçabilité et conformité.',
  },
  {
    term: 'Mode dégradé',
    definition:
      'Fonctionnement de continuité prévu quand un système critique est indisponible.',
  },
  {
    term: 'Simulation logistique',
    definition:
      'Exécution de scénarios “what-if” pour estimer l’impact de contraintes ou d’actions correctives.',
  },
  {
    term: 'Onboarding score',
    definition:
      'Indice de compatibilité profil/problème/équipe calculé selon compétences, disponibilité et intérêt cluster.',
  },
  {
    term: 'Rate limiting',
    definition:
      'Mécanisme limitant le volume de requêtes API sur une période donnée pour protéger la plateforme.',
  },
  {
    term: 'Gouvernance data',
    definition:
      'Ensemble des règles d’accès, d’usage, de contrôle qualité et de responsabilité autour de la donnée.',
  },
]

export default function GlossairePage() {
  return (
    <MarketingLayout>
      <section className="mx-auto w-full max-w-6xl space-y-8 px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Référence"
          title="Glossaire des termes techniques"
          subtitle="Définitions opérationnelles utilisées dans la plateforme pour fluidifier la collaboration entre métiers, data et tech."
        />

        <div className="grid gap-4">
          {glossary.map((entry) => (
            <article key={entry.term} className="rounded-2xl border border-[var(--ink-200)] bg-white p-5">
              <h2 className="text-lg font-black text-[var(--ink-900)]">{entry.term}</h2>
              <p className="mt-2 text-sm text-[var(--ink-700)]">{entry.definition}</p>
            </article>
          ))}
        </div>
      </section>
    </MarketingLayout>
  )
}
