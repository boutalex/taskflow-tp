import { STATUS_LABELS } from '../types'
import type { Task } from '../types'

type TaskItemProps = {
  task: Task
  onCycle: (id: string) => void
  onRemove: (id: string) => void
}

export default function TaskItem({ task, onCycle, onRemove }: TaskItemProps) {
  return (
    <li className="task-item">
      <button
        type="button"
        className={`badge badge-${task.status}`}
        title="Passer au statut suivant"
        onClick={() => onCycle(task.id)}
      >
        {STATUS_LABELS[task.status]}
      </button>

      <span className={task.status === 'done' ? 'task-title task-done' : 'task-title'}>
        {task.title}
      </span>

      <span className={`priority priority-${task.priority}`}>{task.priority}</span>

      <button
        type="button"
        className="btn-remove"
        aria-label={`Supprimer « ${task.title} »`}
        onClick={() => onRemove(task.id)}
      >
        ×
      </button>
    </li>
  )
}
