import React from 'react'

export default function Todo({todo}) {
    return (
        <div>
            <h4>{todo.title}</h4>
<p>{todo.discrip}</p>
<button type="button" class="btn btn-danger" onClick={()=>todo.onDelete(todo.onDelete)}>DELETE</button>

        </div>
    )
}
