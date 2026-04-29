import { MarketingLayout } from '@/components/marketing/marketing-layout'
import { SectionTitle } from '@/components/ui/section-title'

export default function ConditionsGeneralesPage() {
  return (
    <MarketingLayout>
      <section className="mx-auto w-full max-w-6xl space-y-8 px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Juridique"
          title="Conditions générales d’utilisation (CGU)"
          subtitle="Entrée en vigueur: 11 mars 2026. Ces conditions cadrent l’usage de la plateforme collaborative PAK DataThon pour tous les participants, mentors et administrateurs."
        />

        <article className="rounded-2xl border border-[var(--ink-200)] bg-white p-6">
          <h2 className="text-xl font-black text-[var(--ink-900)]">1. Objet de la plateforme</h2>
          <p className="mt-3 text-sm text-[var(--ink-700)]">
            La plateforme permet l’identification, la classification et la résolution collaborative de problématiques
            logistiques via l’exploitation encadrée des données PAK (navires, marchandises, commerce international,
            camions). Elle inclut des espaces d’onboarding, de travail en équipe, de simulation et de requête data.
          </p>
        </article>

        <article className="rounded-2xl border border-[var(--ink-200)] bg-white p-6">
          <h2 className="text-xl font-black text-[var(--ink-900)]">2. Accès et rôles</h2>
          <ul className="mt-3 grid gap-2 text-sm text-[var(--ink-700)]">
            <li>• `USER`: accès onboarding, dashboard, création/participation équipe, demandes de données.</li>
            <li>• `ADMIN` / `MODERATOR`: gouvernance des demandes, arbitrage, supervision des activités.</li>
            <li>• Chaque compte est personnel. Le partage d’identifiants est interdit.</li>
          </ul>
        </article>

        <article className="rounded-2xl border border-[var(--ink-200)] bg-white p-6">
          <h2 className="text-xl font-black text-[var(--ink-900)]">3. Engagements des utilisateurs</h2>
          <ul className="mt-3 grid gap-2 text-sm text-[var(--ink-700)]">
            <li>• Respecter la charte éthique, les règles de confidentialité et la gouvernance data.</li>
            <li>• Décrire les problèmes de manière factuelle, sans divulgation d’informations sensibles non autorisées.</li>
            <li>• Utiliser les données uniquement dans le cadre de la solution déclarée et validée.</li>
            <li>• Ne pas contourner les mécanismes d’accès, de contrôle ou de journalisation.</li>
          </ul>
        </article>

        <article className="rounded-2xl border border-[var(--ink-200)] bg-white p-6">
          <h2 className="text-xl font-black text-[var(--ink-900)]">4. Gouvernance des données</h2>
          <ul className="mt-3 grid gap-2 text-sm text-[var(--ink-700)]">
            <li>• Toute requête dataset passe par un workflow: soumission, revue, validation, attribution.</li>
            <li>• Les accès sont limités au strict nécessaire (principe de minimisation).</li>
            <li>• Les actions critiques sont traçables via audit trail et logs d’accès.</li>
            <li>• Le PAK peut suspendre ou retirer un accès en cas de non-conformité.</li>
          </ul>
        </article>

        <article className="rounded-2xl border border-[var(--ink-200)] bg-white p-6">
          <h2 className="text-xl font-black text-[var(--ink-900)]">5. Propriété intellectuelle et responsabilité</h2>
          <ul className="mt-3 grid gap-2 text-sm text-[var(--ink-700)]">
            <li>• Les contenus, marques et éléments visuels restent la propriété de leurs détenteurs respectifs.</li>
            <li>• Les résultats analytiques des équipes doivent mentionner leurs hypothèses et limites.</li>
            <li>• La plateforme est fournie “en l’état”; des indisponibilités ponctuelles peuvent survenir.</li>
            <li>• Chaque utilisateur reste responsable des décisions prises à partir de ses analyses.</li>
          </ul>
        </article>
      </section>
    </MarketingLayout>
  )
}
