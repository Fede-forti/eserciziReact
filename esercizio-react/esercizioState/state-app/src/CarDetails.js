import { useRef } from "react"

export function CarDetails({initialData}) {
    const formRef = useRef()
    

    function handleFormReset(e) {
        e.preventDefault()
         formRef.current.reset()
        console.log(formRef)
    }

    return (
        <form ref={formRef} onSubmit={handleFormReset}>
            <label htmlFor="model">Model:</label>
            <input name="model" defaultValue={initialData.model}/>
            <label htmlFor="year">Year:</label>
            <input name="year" type="number" defaultValue={initialData.year}/>
            <label htmlFor="color">Color:</label>
            <input name="color" defaultValue={initialData.color}/>
            <button type="submit">Reset Vehicle</button>
        </form>
    )
}