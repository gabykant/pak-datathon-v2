import { MarketingLayout } from '@/components/marketing/marketing-layout'
import { SectionTitle } from '@/components/ui/section-title'
import { ProblemCard } from '@/components/marketing/problem-card'
import { clusterProblemTypes } from '@/lib/problem-clusters'
import Link from 'next/link'

export default function ProblematiquesPage() {
  return (
    <MarketingLayout>
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Analyse exhaustive"
          title="Typologie des difficultés systémiques et mapping data"
          subtitle="Cette cartographie couvre les principaux types de problèmes logistiques sans citer de sites spécifiques, avec les données PAK nécessaires pour orienter la résolution."
        />

        <div className="rounded-2xl border border-[var(--ink-200)] bg-white p-5 text-sm text-[var(--ink-700)]">
          <p>
            Pour une lecture &quot;terrain&quot; basée sur les incidents réellement remontés dans les échanges opérationnels,
            consultez aussi le blog d`&quot;analyse.
          </p>
          <Link
            href="/blog/problemes-rencontres"
            className="mt-3 inline-flex rounded-xl bg-[var(--brand-500)] px-4 py-2 font-semibold !text-white"
          >
            Ouvrir le blog des problèmes rencontrés
          </Link>
        </div>

        <div className="grid gap-6">
          {clusterProblemTypes.map((problem) => (
            <ProblemCard key={problem.id} problem={problem} />
          ))}
        </div>
      </section>
    </MarketingLayout>
  )
}