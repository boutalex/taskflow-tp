import type { Task } from '../types'
import TaskItem from './TaskItem'

type TaskListProps = {
  tasks: Task[]
  onCycle: (id: string) => void
  onRemove: (id: string) => void
}

export default function TaskList({ tasks, onCycle, onRemove }: TaskListProps) {
  if (tasks.length === 0) {
    return <p className="empty">Aucune tâche à afficher.</p>
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onCycle={onCycle} onRemove={onRemove} />
      ))}
    </ul>
  )
}
