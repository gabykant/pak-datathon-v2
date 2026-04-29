'use client'

import dynamic from 'next/dynamic'
import { useMemo, useState } from 'react'
import type {
  ChatKeywordFrequency,
  ChatProblemInsight,
  ChatTimelinePoint,
} from '@/lib/chat-problem-analysis'
import { clusterLabels } from '@/lib/site'

type ClusterKey = ChatProblemInsight['cluster']
type ClusterFilter = 'ALL' | ClusterKey

type ProblemInsightsMagazineProps = {
  insights: ChatProblemInsight[]
  timeline: ChatTimelinePoint[]
  keywordFrequencies: ChatKeywordFrequency[]
}

const TimelineChart = dynamic(() => import('./charts/timeline-chart').then((mod) => mod.TimelineChart), {
  ssr: false,
  loading: () => <ChartPlaceholder />,
})

const KeywordChart = dynamic(() => import('./charts/keyword-chart').then((mod) => mod.KeywordChart), {
  ssr: false,
  loading: () => <ChartPlaceholder />,
})

const ProblemFrequencyChart = dynamic(
  () => import('./charts/problem-frequency-chart').then((mod) => mod.ProblemFrequencyChart),
  {
    ssr: false,
    loading: () => <ChartPlaceholder />,
  },
)

function scoreTone(value: number) {
  if (value >= 90) return 'text-[var(--success-500)]'
  if (value >= 75) return 'text-[var(--pak-gold-600)]'
  return 'text-[var(--danger-500)]'
}

function ChartPlaceholder() {
  return <div className="h-full w-full animate-pulse rounded-xl border border-[var(--ink-200)] bg-[var(--sand-50)]" />
}

export function ProblemInsightsMagazine({
  insights,
  timeline,
  keywordFrequencies,
}: ProblemInsightsMagazineProps) {
  const [filter, setFilter] = useState<ClusterFilter>('ALL')

  const clusterKeys = useMemo(() => Object.keys(clusterLabels) as ClusterKey[], [])

  const filteredInsights = useMemo(
    () => insights.filter((entry) => filter === 'ALL' || entry.cluster === filter),
    [filter, insights],
  )

  const kpi = useMemo(() => {
    if (filteredInsights.length === 0) {
      return {
        avgAccuracy: 0,
        avgComprehension: 0,
        avgFrequency: 0,
        avgImpact: 0,
      }
    }

    const totals = filteredInsights.reduce(
      (acc, entry) => ({
        accuracy: acc.accuracy + entry.confidence,
        comprehension: acc.comprehension + entry.comprehension,
        frequency: acc.frequency + entry.frequencyScore,
        impact: acc.impact + entry.impactScore,
      }),
      { accuracy: 0, comprehension: 0, frequency: 0, impact: 0 },
    )

    const div = filteredInsights.length
    return {
      avgAccuracy: Math.round(totals.accuracy / div),
      avgComprehension: Math.round(totals.comprehension / div),
      avgFrequency: Math.round(totals.frequency / div),
      avgImpact: Math.round(totals.impact / div),
    }
  }, [filteredInsights])

  const problemFrequencyChart = useMemo(
    () =>
      filteredInsights.map((entry) => ({
        problem: entry.title.length > 34 ? `${entry.title.slice(0, 34)}...` : entry.title,
        score: entry.frequencyScore,
        impact: entry.impactScore,
      })),
    [filteredInsights],
  )

  const keywordChart = useMemo(
    () =>
      keywordFrequencies
        .filter((item) => filter === 'ALL' || item.cluster === filter)
        .sort((a, b) => b.mentions - a.mentions)
        .slice(0, 6),
    [filter, keywordFrequencies],
  )

  return (
    <div className="grid gap-8">
      <section className="rounded-2xl border border-[var(--ink-200)] bg-white p-5 shadow-sm sm:p-6">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand-700)]">Vue éditoriale</p>
        <h2 className="mt-2 text-2xl font-black text-[var(--ink-900)]">Radar des incidents par cluster</h2>
        <p className="mt-2 max-w-4xl text-sm leading-6 text-[var(--ink-700)]">
          Cette vue consolide les signaux terrain issus du chat opérationnel en lecture stratégique: fréquence,
          impact, compréhension et niveau d’accuracy. L’objectif est d’orienter les équipes vers des interventions
          data-prioritaires, avec une justification claire par type de problème.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setFilter('ALL')}
            className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
              filter === 'ALL'
                ? 'border-[var(--brand-700)] bg-[var(--brand-700)] text-white'
                : 'border-[var(--ink-200)] bg-[var(--sand-50)] text-[var(--ink-700)] hover:border-[var(--brand-700)]'
            }`}
          >
            Tous les clusters
          </button>
          {clusterKeys.map((cluster) => (
            <button
              key={cluster}
              type="button"
              onClick={() => setFilter(cluster)}
              className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                filter === cluster
                  ? 'border-[var(--brand-700)] bg-[var(--brand-700)] text-white'
                  : 'border-[var(--ink-200)] bg-[var(--sand-50)] text-[var(--ink-700)] hover:border-[var(--brand-700)]'
              }`}
            >
              {clusterLabels[cluster]}
            </button>
          ))}
        </div>
      </section>

      <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <article className="rounded-2xl border border-[var(--ink-200)] bg-white p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--ink-700)]">Accuracy moyenne</p>
          <p className={`mt-2 text-3xl font-black ${scoreTone(kpi.avgAccuracy)}`}>{kpi.avgAccuracy}/100</p>
        </article>
        <article className="rounded-2xl border border-[var(--ink-200)] bg-white p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--ink-700)]">Compréhension moyenne</p>
          <p className={`mt-2 text-3xl font-black ${scoreTone(kpi.avgComprehension)}`}>{kpi.avgComprehension}/100</p>
        </article>
        <article className="rounded-2xl border border-[var(--ink-200)] bg-white p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--ink-700)]">Fréquence signalée</p>
          <p className={`mt-2 text-3xl font-black ${scoreTone(kpi.avgFrequency)}`}>{kpi.avgFrequency}/100</p>
        </article>
        <article className="rounded-2xl border border-[var(--ink-200)] bg-white p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--ink-700)]">Impact opérationnel</p>
          <p className={`mt-2 text-3xl font-black ${scoreTone(kpi.avgImpact)}`}>{kpi.avgImpact}/100</p>
        </article>
      </section>

      <section className="grid gap-4 xl:grid-cols-2">
        <article className="rounded-2xl border border-[var(--ink-200)] bg-white p-4 sm:p-5">
          <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--brand-700)]">Chronologie des incidents</h3>
          <div className="mt-4 h-[280px] w-full">
            <TimelineChart data={timeline} />
          </div>
        </article>

        <article className="rounded-2xl border border-[var(--ink-200)] bg-white p-4 sm:p-5">
          <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--brand-700)]">Thèmes dominants</h3>
          <div className="mt-4 h-[280px] w-full">
            <KeywordChart data={keywordChart} />
          </div>
        </article>
      </section>

      <section className="rounded-2xl border border-[var(--ink-200)] bg-white p-4 sm:p-6">
        <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--brand-700)]">
          Fréquence et impact par type de problème
        </h3>
        <div className="mt-4 h-[320px] w-full">
          <ProblemFrequencyChart data={problemFrequencyChart} />
        </div>
      </section>

      <section className="grid gap-4">
        {filteredInsights.map((entry) => (
          <article key={entry.slug} className="rounded-2xl border border-[var(--ink-200)] bg-[var(--sand-50)] p-5 sm:p-6">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand-700)]">{clusterLabels[entry.cluster]}</p>
            <h3 className="mt-2 text-2xl font-black text-[var(--ink-900)]">{entry.title}</h3>
            <p className="mt-2 text-sm leading-6 text-[var(--ink-700)]">{entry.operationalNarrative}</p>

            <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-xl border border-[var(--ink-200)] bg-white p-3">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--ink-700)]">Fréquence</p>
                <p className={`mt-1 text-xl font-black ${scoreTone(entry.frequencyScore)}`}>{entry.frequencyScore}/100</p>
              </div>
              <div className="rounded-xl border border-[var(--ink-200)] bg-white p-3">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--ink-700)]">Impact</p>
                <p className={`mt-1 text-xl font-black ${scoreTone(entry.impactScore)}`}>{entry.impactScore}/100</p>
              </div>
              <div className="rounded-xl border border-[var(--ink-200)] bg-white p-3">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--ink-700)]">Volume data estimé</p>
                <p className="mt-1 text-xl font-black text-[var(--ink-900)]">{entry.dataVolumeEstimateGb} GB</p>
              </div>
              <div className="rounded-xl border border-[var(--ink-200)] bg-white p-3">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--ink-700)]">Complexité analytique</p>
                <p className="mt-1 text-xl font-black text-[var(--ink-900)]">{entry.analyticsComplexity}</p>
              </div>
            </div>

            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-xl border border-[var(--ink-200)] bg-white p-4">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand-700)]">Signal observé</p>
                <p className="mt-2 text-sm text-[var(--ink-700)]">{entry.evidencePattern}</p>
                <p className="mt-2 text-xs font-semibold text-[var(--ink-700)]">{entry.frequencySignal}</p>
              </div>

              <div className="rounded-xl border border-[var(--ink-200)] bg-white p-4">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand-700)]">Niveau d’analyse</p>
                <p className={`mt-2 text-sm font-semibold ${scoreTone(entry.confidence)}`}>
                  Accuracy: {entry.confidence}/100
                </p>
                <p className={`text-sm font-semibold ${scoreTone(entry.comprehension)}`}>
                  Compréhension: {entry.comprehension}/100
                </p>
              </div>
            </div>

            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-xl border border-[var(--ink-200)] bg-white p-4">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand-700)]">Causes probables</p>
                <ul className="mt-2 grid gap-1 text-sm text-[var(--ink-700)]">
                  {entry.rootCauses.map((cause) => (
                    <li key={cause}>• {cause}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-[var(--ink-200)] bg-white p-4">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand-700)]">Actions recommandées</p>
                <ul className="mt-2 grid gap-1 text-sm text-[var(--ink-700)]">
                  {entry.recommendedActions.map((action) => (
                    <li key={action}>• {action}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-[var(--ink-200)] bg-white p-4">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand-700)]">Data mapping pour résolution</p>
              <div className="mt-2 grid gap-2 text-sm text-[var(--ink-700)] md:grid-cols-2">
                <p>
                  <span className="font-semibold text-[var(--ink-900)]">Navires:</span> {entry.requiredData.vessel.join(' • ')}
                </p>
                <p>
                  <span className="font-semibold text-[var(--ink-900)]">Marchandises:</span> {entry.requiredData.cargo.join(' • ')}
                </p>
                <p>
                  <span className="font-semibold text-[var(--ink-900)]">Commerce international:</span> {entry.requiredData.trade.join(' • ')}
                </p>
                <p>
                  <span className="font-semibold text-[var(--ink-900)]">Camions:</span> {entry.requiredData.truck.join(' • ')}
                </p>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}
