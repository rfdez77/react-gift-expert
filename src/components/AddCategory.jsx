import { useState } from 'react'

// prop que viene del padre 
export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    // recibe el event y vamos a buscar el event.target
    const onInputChange = ({ target }) => {
        // console.log(event.target.value)
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        // .trim elimina espacios en blanco
        if (inputValue.trim().length <= 1) return

        // setCategories(categories => [inputValue, ...categories])
        onNewCategory(inputValue.trim())
        setInputValue('')
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}

export default AddCategory
