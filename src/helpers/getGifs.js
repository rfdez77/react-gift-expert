export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=fW2HSKhahD9WFXTztGUzpzwGGslsMGZF&q=valorant=${category}&limit=10`

    // peticion http
    const resp = await fetch(url)
    // console.log(resp)

    // desectructuramos
    const { data = [] } = await resp.json()
    // console.log(data)

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    // console.log(gifs)
    return gifs
}
