'use client'

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

type ProblemFrequencyDatum = {
  problem: string
  score: number
  impact: number
}

type ProblemFrequencyChartProps = {
  data: ProblemFrequencyDatum[]
}

export function ProblemFrequencyChart({ data }: ProblemFrequencyChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 8, right: 16, left: 0, bottom: 54 }}>
        <CartesianGrid stroke="#d3dce8" strokeDasharray="3 3" />
        <XAxis
          dataKey="problem"
          angle={-14}
          textAnchor="end"
          interval={0}
          tick={{ fill: '#23374f', fontSize: 11 }}
          height={80}
        />
        <YAxis tick={{ fill: '#23374f', fontSize: 12 }} />
        <Tooltip />
        <Bar dataKey="score" fill="#0072ce" radius={[6, 6, 0, 0]} />
        <Bar dataKey="impact" fill="#e8a317" radius={[6, 6, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
