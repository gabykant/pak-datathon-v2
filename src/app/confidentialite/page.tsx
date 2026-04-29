import { MarketingLayout } from '@/components/marketing/marketing-layout'
import { SectionTitle } from '@/components/ui/section-title'

export default function ConfidentialitePage() {
  return (
    <MarketingLayout>
      <section className="mx-auto w-full max-w-6xl space-y-8 px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Conformité"
          title="Confidentialité et disclaimer de couverture data PAK"
          subtitle="Cadre de protection des informations et limites d’usage des données mises à disposition sur la plateforme."
        />

        <article className="rounded-2xl border border-[var(--ink-200)] bg-white p-6">
          <h2 className="text-xl font-black text-[var(--ink-900)]">Périmètre de couverture</h2>
          <p className="mt-3 text-sm text-[var(--ink-700)]">
            Les données exploitées sont issues des référentiels gérés ou validés dans l’écosystème PAK: navires,
            marchandises, commerce international et camions. La disponibilité peut varier selon les règles d’accès,
            la qualité source, les contraintes réglementaires et les fenêtres opérationnelles.
          </p>
        </article>

        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-[var(--ink-200)] bg-white p-6">
            <h3 className="text-lg font-black text-[var(--ink-900)]">Confidentialité des données</h3>
            <ul className="mt-3 grid gap-2 text-sm text-[var(--ink-700)]">
              <li>• Classification des données par niveau de sensibilité avant partage.</li>
              <li>• Accès sous autorisation explicite et journalisé automatiquement.</li>
              <li>• Restriction du téléchargement et de l’export selon profil et besoin métier.</li>
              <li>• Interdiction de republication d’informations sensibles hors plateforme.</li>
            </ul>
          </article>

          <article className="rounded-2xl border border-[var(--ink-200)] bg-white p-6">
            <h3 className="text-lg font-black text-[var(--ink-900)]">Disclaimer analytique</h3>
            <ul className="mt-3 grid gap-2 text-sm text-[var(--ink-700)]">
              <li>• Les analyses fournissent une aide à la décision et non une garantie absolue de résultat.</li>
              <li>• Les scores et simulations dépendent de la qualité et de la fraîcheur des données reçues.</li>
              <li>• Toute interprétation doit être validée avec les parties prenantes concernées.</li>
              <li>• Les décisions finales restent sous responsabilité des entités décisionnaires habilitées.</li>
            </ul>
          </article>
        </div>

        <article className="rounded-2xl border border-[var(--ink-200)] bg-[var(--sand-50)] p-6">
          <h2 className="text-xl font-black text-[var(--ink-900)]">Mesures de sécurité et audit</h2>
          <ul className="mt-3 grid gap-2 text-sm text-[var(--ink-700)]">
            <li>• Authentification obligatoire et contrôle des rôles (`USER`, `ADMIN`, `MODERATOR`).</li>
            <li>• Traçabilité des accès datasets et des actions de gouvernance.</li>
            <li>• Révision périodique des permissions et révocation en cas d’anomalie.</li>
            <li>• Conservation des logs pour enquête et amélioration continue de la sécurité.</li>
          </ul>
        </article>
      </section>
    </MarketingLayout>
  )
}
