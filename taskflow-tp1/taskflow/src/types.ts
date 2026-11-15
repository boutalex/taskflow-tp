export type Status = 'todo' | 'doing' | 'done'

export type Priority = 'P1' | 'P2' | 'P3'

export type Task = {
  id: string
  title: string
  status: Status
  priority: Priority
}

export type Filter = 'all' | Status

export const STATUS_LABELS: Record<Status, string> = {
  todo: 'À faire',
  doing: 'En cours',
  done: 'Terminé',
}

export function nextStatus(status: Status): Status {
  switch (status) {
    case 'todo':
      return 'doing'
    case 'doing':
      return 'done'
    case 'done':
      return 'todo'
  }
}
