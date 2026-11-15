import type { ReactNode } from 'react'

type CardProps = {
  title: string
  actions?: ReactNode
  children: ReactNode
}

export default function Card({ title, actions, children }: CardProps) {
  return (
    <section className="card">
      <header className="card-header">
        <h2 className="card-title">{title}</h2>
        {actions && <div className="card-actions">{actions}</div>}
      </header>
      {children}
    </section>
  )
}
