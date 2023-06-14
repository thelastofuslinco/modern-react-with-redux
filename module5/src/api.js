import axios from 'axios'

export const searchImages = async (value) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID MUyNvvlGsM4Cs1OBdACxA8f9HmxWR5klKUtO3ocbZFo'
    },
    params: {
      query: value
    }
  })

  const photos = response.data.results.map((result) => result.urls.small)
  return photos
}
