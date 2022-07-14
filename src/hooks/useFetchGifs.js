import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"


// un hook es una funcion que regresa algo
export const useFetchGifs = ( category ) => {

  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getImages = async () => {
      const newImages = await getGifs(category)
      setImages(newImages)
      // lo ponemos en falso despues de cargar las imagenes
      setIsLoading(false)
  }

  useEffect(() => {
      getImages()
  }, [])


  // esto es lo que retorna nuestro hook
  return {
    // esto es lo mismo, si tienen el mismo nombre se puede poner soo images
    // images: [images],
    images,
    isLoading
  }
}

