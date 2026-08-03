'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { clusterLabels } from '@/lib/site'
import { type ClusterProblemType } from '@/lib/problem-clusters'

function DataList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-xl border border-[var(--ink-200)] bg-white p-4">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand-700)]">{title}</p>
      <ul className="mt-2 grid gap-1 text-xs text-[var(--ink-700)]">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  )
}

export function ProblemCard({ problem }: { problem: ClusterProblemType }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <article className="rounded-2xl border border-[var(--ink-200)] bg-[var(--sand-50)] p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--brand-700)]">
            {clusterLabels[problem.cluster]}
          </p>
          <h3 className="mt-2 text-xl font-black text-[var(--ink-900)]">{problem.type}</h3>
          <p className="mt-2 text-sm text-[var(--ink-700)]">{problem.challenge}</p>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--ink-200)] bg-white transition hover:bg-[var(--sand-100)]"
        >
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-[var(--ink-700)]" />
          ) : (
            <ChevronDown className="h-5 w-5 text-[var(--ink-700)]" />
          )}
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'mt-6 max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="grid gap-2 text-sm text-[var(--ink-700)]">
          <p>
            <span className="font-semibold text-[var(--ink-900)]">Symptômes:</span> {problem.symptoms.join(' • ')}
          </p>
          <p>
            <span className="font-semibold text-[var(--ink-900)]">Impact:</span> {problem.businessImpact.join(' • ')}
          </p>
          <p>
            <span className="font-semibold text-[var(--ink-900)]">Volume data indicatif:</span>{' '}
            {problem.indicativeVolume}
          </p>
          <p>
            <span className="font-semibold text-[var(--ink-900)]">Complexité analytique:</span>{' '}
            {problem.analyticalComplexity}/5
          </p>
        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <DataList title="Données navires" items={problem.requiredData.vessel} />
          <DataList title="Données marchandises" items={problem.requiredData.cargo} />
          <DataList title="Données commerce international" items={problem.requiredData.trade} />
          <DataList title="Données camions" items={problem.requiredData.truck} />
        </div>

        <div className="mt-4 rounded-xl border border-[var(--ink-200)] bg-white p-4">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand-700)]">
            Approches recommandées
          </p>
          <p className="mt-2 text-sm text-[var(--ink-700)]">{problem.recommendedMethods.join(' • ')}</p>
        </div>
      </div>
    </article>
  )
}