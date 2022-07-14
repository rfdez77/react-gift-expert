import { useEffect, useState } from "react"

import { GifItem } from "./GifItem"
import { useFetchGifs } from "../hooks/useFetchGifs"
// import { getGifs } from "../helpers/getGifs"

// funcional component
export const GifGrid = ({ category }) => {

    // esto es un hook useFetchGifs.js
    const { images, isLoading } = useFetchGifs(category)

    return (
        <>
            <h3>{category}</h3>

            {/* ternario si esta en true sale cargando... */}

            {/* {
                isLoading ? (<h2>Cargando...</h2>) : null
            } */}


            {/* otra forma con una sola condicion */}

            {
                isLoading && (<h2>Cargando...</h2>)
            }

            {/* otra forma es con un componente */}

            {/* <LoadingMessage isLoading={isLoading} /> */}

            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifItem
                            key={image.id}
                            // asi pasamos todo el array al hijo como props
                            {...image}
                        />
                    ))
                }
            </div>

        </>
    )
}