import type { Filter } from '../types'

const FILTERS: { value: Filter; label: string }[] = [
  { value: 'all', label: 'Toutes' },
  { value: 'todo', label: 'À faire' },
  { value: 'doing', label: 'En cours' },
  { value: 'done', label: 'Terminées' },
]

type FilterBarProps = {
  value: Filter
  onChange: (filter: Filter) => void
}

export default function FilterBar({ value, onChange }: FilterBarProps) {
  return (
    <div className="filter-bar" role="group" aria-label="Filtrer les tâches">
      {FILTERS.map((f) => (
        <button
          key={f.value}
          type="button"
          className="filter-btn"
          aria-pressed={f.value === value}
          onClick={() => onChange(f.value)}
        >
          {f.label}
        </button>
      ))}
    </div>
  )
}
