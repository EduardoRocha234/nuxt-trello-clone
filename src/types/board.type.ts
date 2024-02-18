export type TaskType = {
	id: string
	title: string
	createdAt: Date
}

export type ColumType = {
	id: string
	name: string
	tasks: TaskType[]
}

export type NewTaskType = {
	taskValue: string
	columnId: string
}
