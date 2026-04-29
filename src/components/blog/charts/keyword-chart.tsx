'use client'

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import type { ChatKeywordFrequency } from '@/lib/chat-problem-analysis'

type KeywordChartProps = {
  data: ChatKeywordFrequency[]
}

export function KeywordChart({ data }: KeywordChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} layout="vertical" margin={{ top: 8, right: 16, left: 20, bottom: 8 }}>
        <CartesianGrid stroke="#d3dce8" strokeDasharray="3 3" />
        <XAxis type="number" tick={{ fill: '#23374f', fontSize: 12 }} />
        <YAxis dataKey="theme" type="category" width={160} tick={{ fill: '#23374f', fontSize: 11 }} />
        <Tooltip />
        <Bar dataKey="mentions" fill="#1a3a6b" radius={[0, 8, 8, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
