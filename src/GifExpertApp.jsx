
import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory = (newCategory) => {

        // condicion no se repita
        if (categories.includes(newCategory)) return

        // esta seria una forma de insertar un nuevo string a categories
        // primero obtenemos el array que hay e insertamos nuevo array

        // setCategories([...categories, 'Valorant'])


        // para insertar al principio del array
        // console.log(newCategory)
        setCategories([newCategory, ...categories])

        // esta seria otra menera utilizando callback
        // setCategories(cat => [...cat, 'Valorant'])

    }

    return (
        <>
            {/* titulo */}
            <h1>GiftExpertApp</h1>

            {/* input */}
            <AddCategory
                // setCategories={setCategories} 
                onNewCategory={onAddCategory}

            />

            {/* Listado de Gif */}
            {/* <button onClick={onAddCategory}>Agregar</button> */}

            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }


            {/* Gif Item */}
        </>
    )
}

