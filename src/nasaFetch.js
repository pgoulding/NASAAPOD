require('dotenv').config();
const API_KEY = process.env.VUE_APP_API_KEY
import uuid from 'uuid'
export const fetchPlanetData = async () => {
  const date = new Date()
  let firstOfMonth = `${date.getFullYear()}-${date.getMonth() <= 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1}-01`

  let currentDate = `${date.getFullYear()}-${date.getMonth() <= 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1}-${date.getDate()}`
  const fullMonthUrl = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=${firstOfMonth}&end_date=${currentDate}`;
  try {
    const response = await fetch(fullMonthUrl)
    const results = await response.json()
    const cleaned = cleanData(results)
    // console.log(cleaned)
    return cleaned
  } catch (error) {
    throw Error(error.message)
  }
}

export const planetDataOnDate = async (date) => {
  const dateUrl = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`
  try {
    const response = await fetch(dateUrl)
    const results = await response.json()
    return {...results, id:uuid()}
  } catch (error) {
    throw Error(error.message)
  }
}

const cleanData=(data) => {
  return data.map(planet => {
    return {...planet, id:uuid()}
  })
}

// export default fetchPlanetData
