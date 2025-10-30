"use client"

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

type BudgetItem = {
  name: string
  value: number
  color: string
}

interface BudgetCardProps {
  budget: number
  items: BudgetItem[]
}

export function BudgetCard({ budget, items }: BudgetCardProps) {
  const total = items.reduce((acc, item) => acc + item.value, 0)

  // Debug logging
  console.log('BudgetCard data:', { budget, items, total });

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-cyan-700 font-['Literata']">Budget</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        {/* Donut Chart */}
        <div className="h-48 w-48 flex items-center justify-center">
          {items && items.length > 0 ? (
            <ResponsiveContainer width={192} height={192}>
              <PieChart width={192} height={192}>
                <Pie
                  data={items}
                  dataKey="value"
                  cx={96}
                  cy={96}
                  innerRadius={40}
                  outerRadius={70}
                  paddingAngle={2}
                  startAngle={90}
                  endAngle={450}
                >
                  {items.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <div className="flex items-center justify-center h-full text-slate-500">
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-200 rounded-full mx-auto mb-2"></div>
                <p className="text-sm">No data available</p>
              </div>
            </div>
          )}
        </div>

        {/* Total */}
        <p className="mt-2 text-xl font-semibold font-['Literata'] text-slate-600">
          ${total.toLocaleString()} / ${budget.toLocaleString()}
        </p>

        {/* Legend */}
        <div className="mt-4 space-y-2 w-full">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex justify-between text-sm text-slate-600"
            >
              <span className="flex items-center gap-2">
                <span
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></span>
                <span className="font-['Montserrat']">{item.name}</span>
              </span>
              <span className="font-['Montserrat']">${item.value.toLocaleString()}</span>
            </div>
          ))}
        </div>

        {/* Action */}
        <button className="mt-4 rounded-3xl border border-slate-400 px-4 py-2 text-sm text-slate-600 hover:bg-slate-100 transition-colors font-['Montserrat']">
          See all your payments
        </button>
      </CardContent>
    </Card>
  )
}
