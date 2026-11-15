import { useState } from 'react'
import type { FormEvent } from 'react'

const MAX_LENGTH = 80

type TaskFormProps = {
  onAdd: (title: string) => void
}

export default function TaskForm({ onAdd }: TaskFormProps) {
  const [title, setTitle] = useState('')
  const trimmed = title.trim()
  const isEmpty = trimmed.length === 0
  const isTooLong = title.length > MAX_LENGTH

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (isEmpty || isTooLong) return
    onAdd(trimmed)
    setTitle('')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="task-form-row">
        <input
          type="text"
          placeholder="Nouvelle tâche"
          aria-label="Titre de la nouvelle tâche"
          aria-invalid={isTooLong}
          className={isTooLong ? 'input input-error' : 'input'}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit" className="btn-primary" disabled={isEmpty || isTooLong}>
          Ajouter
        </button>
      </div>
      {isTooLong && (
        <p className="error" role="alert">
          {MAX_LENGTH} caractères maximum
        </p>
      )}
    </form>
  )
}
