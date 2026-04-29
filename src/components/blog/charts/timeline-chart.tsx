'use client'

import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import type { ChatTimelinePoint } from '@/lib/chat-problem-analysis'

type TimelineChartProps = {
  data: ChatTimelinePoint[]
}

export function TimelineChart({ data }: TimelineChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 6, right: 16, left: -20, bottom: 4 }}>
        <CartesianGrid stroke="#d3dce8" strokeDasharray="3 3" />
        <XAxis dataKey="month" tick={{ fill: '#23374f', fontSize: 12 }} />
        <YAxis tick={{ fill: '#23374f', fontSize: 12 }} />
        <Tooltip />
        <Line type="monotone" dataKey="incidents" stroke="#0072ce" strokeWidth={3} dot={{ r: 3 }} />
        <Line type="monotone" dataKey="criticalBlockers" stroke="#b42318" strokeWidth={2} dot={false} />
        <Line type="monotone" dataKey="resolvedAfterEscalation" stroke="#027a48" strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  )
}
