type Todo = {
    title: string
    description: string
    done: boolean
}

// readonly, não deixar alterar o obj criado
const todo: Readonly<Todo> = {
    title: 'estudar typescript',
    description: 'estudar conceitos do typescript',
    done: false
}

// Partial pega partes de um obj/type
function updateTodo(todo: Todo, updateFieldsTodo: Partial<Todo>) {
    return { ...todo, ...updateFieldsTodo}
}

const newTodo = updateTodo(todo, { done: true })
