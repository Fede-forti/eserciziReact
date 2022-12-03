import { useMemo } from "react"

const persons = [
    {name:"Federica", id: 1, age: 26,},
    {name:"Emanuele", id: 2, age: 32,},
    {name:"Cinzia", id: 3, age: 61,},
    {name:"Gianfranco", id: 4, age: 61,},
    {name:"Noemi", id: 5, age: 2,},

]

export function FilteredList() {
    const users = useMemo(() => persons.map((user) => user.age >= 18 && <li key={user.id}>{user.name} - {user.age}</li>), [] )

    return (
        <>
            <ul>
                {users}
            </ul>
        </>
    )
}