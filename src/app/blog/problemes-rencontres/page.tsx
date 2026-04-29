import { MarketingLayout } from '@/components/marketing/marketing-layout'
import { ProblemInsightsMagazine } from '@/components/blog/problem-insights-magazine'
import { SectionTitle } from '@/components/ui/section-title'
import {
  chatKeywordFrequencies,
  chatProblemInsights,
  chatSourceSummary,
  chatTimeline,
} from '@/lib/chat-problem-analysis'

export default function BlogProblemesRencontresPage() {
  return (
    <MarketingLayout>
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Blog terrain"
          title="Problèmes rencontrés: analyse clusterisée depuis le chat opérationnel"
          subtitle="Objectif: transformer les incidents récurrents en connaissances actionnables, avec un niveau d’accuracy et de compréhension explicite."
        />

        <article className="rounded-2xl border border-[var(--ink-200)] bg-white p-6">
          <p className="text-sm text-[var(--ink-700)]">
            <span className="font-semibold text-[var(--ink-900)]">Source:</span> {chatSourceSummary.channel} (
            {chatSourceSummary.period})
          </p>
          <p className="mt-2 text-sm leading-6 text-[var(--ink-700)]">{chatSourceSummary.note}</p>
          <p className="mt-3 text-xs leading-5 text-[var(--ink-700)]">
            Les clusters ci-dessous résument les motifs les plus fréquents observés dans les conversations d’assistance
            (BAS, scan/inspection, accès, instabilités plateformes, retours vides, coordination inter-acteurs).
          </p>
        </article>

        <ProblemInsightsMagazine
          insights={chatProblemInsights}
          timeline={chatTimeline}
          keywordFrequencies={chatKeywordFrequencies}
        />
      </section>
    </MarketingLayout>
  )
}
