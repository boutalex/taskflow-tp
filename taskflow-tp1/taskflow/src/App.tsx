import { useState } from 'react'
import type { Filter, Task } from './types'
import { nextStatus } from './types'
import Card from './components/Card'
import FilterBar from './components/FilterBar'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

const INITIAL_TASKS: Task[] = [
  { id: '1', title: 'Installer Node.js 22', status: 'done', priority: 'P1' },
  { id: '2', title: 'Lire la doc de useState', status: 'doing', priority: 'P2' },
  { id: '3', title: 'Terminer le TP1', status: 'todo', priority: 'P1' },
]

export default function App() {
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS)
  const [filter, setFilter] = useState<Filter>('all')

  const visibleTasks = filter === 'all' ? tasks : tasks.filter((t) => t.status === filter)
  const remaining = tasks.filter((t) => t.status !== 'done').length

  function add(title: string) {
    const task: Task = { id: crypto.randomUUID(), title, status: 'todo', priority: 'P2' }
    setTasks((prev) => [...prev, task])
  }

  function cycle(id: string) {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status: nextStatus(t.status) } : t)),
    )
  }

  function remove(id: string) {
    setTasks((prev) => prev.filter((t) => t.id !== id))
  }

  return (
    <main className="app">
      <h1 className="app-title">
        TaskFlow <span className="counter">{remaining} restante(s)</span>
      </h1>

      <Card title="Mes tâches" actions={<FilterBar value={filter} onChange={setFilter} />}>
        <TaskForm onAdd={add} />
        <TaskList tasks={visibleTasks} onCycle={cycle} onRemove={remove} />
      </Card>
    </main>
  )
}
