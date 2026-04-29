import Link from 'next/link'
import { MarketingLayout } from '@/components/marketing/marketing-layout'
import { SectionTitle } from '@/components/ui/section-title'

const userSteps = [
  'Créer un compte via /auth/register puis confirmer votre profil.',
  'Compléter l’onboarding (expertise, skills, disponibilité, intérêt cluster).',
  'Consulter le dashboard pour voir problèmes recommandés et équipes suggérées.',
  'Rejoindre une équipe ou en créer une, puis structurer le backlog solution.',
  'Soumettre une demande de dataset argumentée avec objectif mesurable.',
  'Suivre l’avancement, discuter en équipe et publier des versions de solution.',
]

const adminSteps = [
  'Se connecter via le lien admin puis ouvrir /admin.',
  'Examiner heatmap clusters, demandes datasets et problèmes à arbitrer.',
  'Valider/refuser les requêtes selon justification analytique et sensibilité.',
  'Superviser les simulations, logs d’accès et cohérence des tags/typologies.',
  'Déclencher les actions de gouvernance (bootstrap clusters, priorisation).',
]

export default function GuideUtilisationPage() {
  return (
    <MarketingLayout>
      <section className="mx-auto w-full max-w-6xl space-y-8 px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Guide"
          title="Guide détaillé d’utilisation de la plateforme"
          subtitle="Parcours complet utilisateur et administrateur pour passer de l’identification du problème à la solution data validée."
        />

        <article className="rounded-2xl border border-[var(--ink-200)] bg-white p-6">
          <h2 className="text-xl font-black text-[var(--ink-900)]">1. Accès rapides</h2>
          <ul className="mt-3 grid gap-2 text-sm text-[var(--ink-700)]">
            <li>
              • Inscription: <Link className="font-semibold text-[var(--brand-700)]" href="/auth/register">/auth/register</Link>
            </li>
            <li>
              • Connexion utilisateur: <Link className="font-semibold text-[var(--brand-700)]" href="/auth/login">/auth/login</Link>
            </li>
            <li>
              • Connexion admin: <Link className="font-semibold text-[var(--brand-700)]" href="/auth/login?next=/admin">/auth/login?next=/admin</Link>
            </li>
            <li>
              • Dashboard: <Link className="font-semibold text-[var(--brand-700)]" href="/dashboard">/dashboard</Link>
            </li>
            <li>
              • Dashboard admin: <Link className="font-semibold text-[var(--brand-700)]" href="/admin">/admin</Link>
            </li>
          </ul>
        </article>

        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-[var(--ink-200)] bg-white p-6">
            <h2 className="text-xl font-black text-[var(--ink-900)]">2. Parcours utilisateur</h2>
            <ol className="mt-3 grid gap-2 text-sm text-[var(--ink-700)]">
              {userSteps.map((step, index) => (
                <li key={step}>
                  <span className="font-semibold text-[var(--ink-900)]">{index + 1}.</span> {step}
                </li>
              ))}
            </ol>
          </article>

          <article className="rounded-2xl border border-[var(--ink-200)] bg-white p-6">
            <h2 className="text-xl font-black text-[var(--ink-900)]">3. Parcours administrateur</h2>
            <ol className="mt-3 grid gap-2 text-sm text-[var(--ink-700)]">
              {adminSteps.map((step, index) => (
                <li key={step}>
                  <span className="font-semibold text-[var(--ink-900)]">{index + 1}.</span> {step}
                </li>
              ))}
            </ol>
          </article>
        </div>

        <article className="rounded-2xl border border-[var(--ink-200)] bg-white p-6">
          <h2 className="text-xl font-black text-[var(--ink-900)]">4. Demande de données au PAK: format recommandé</h2>
          <ul className="mt-3 grid gap-2 text-sm text-[var(--ink-700)]">
            <li>• Problème ciblé et cluster concerné.</li>
            <li>• Hypothèse d’analyse et KPI d’impact attendu.</li>
            <li>• Datasets nécessaires (navires, marchandises, commerce, camions).</li>
            <li>• Période, granularité, volume estimé et niveau de sensibilité.</li>
            <li>• Durée d’exploitation et livrable attendu.</li>
          </ul>
        </article>

        <article className="rounded-2xl border border-[var(--ink-200)] bg-[var(--sand-50)] p-6">
          <h2 className="text-xl font-black text-[var(--ink-900)]">5. Bonnes pratiques</h2>
          <ul className="mt-3 grid gap-2 text-sm text-[var(--ink-700)]">
            <li>• Documenter les hypothèses avant toute simulation.</li>
            <li>• Prioriser les solutions mesurables à court terme puis itérer.</li>
            <li>• Vérifier la conformité et la confidentialité avant partage externe.</li>
            <li>• Utiliser le glossaire pour harmoniser le vocabulaire multi-acteurs.</li>
          </ul>
        </article>
      </section>
    </MarketingLayout>
  )
}
