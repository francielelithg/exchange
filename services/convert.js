import { get } from 'axios'

const convert = (source, target) => {
  return new Promise((resolve, reject) => {
    get(`https://free.currconv.com/api/v7/convert?apiKey=3483629a88e29a6ab223&q=${source}_${target}&compact=y`)
      .then(result => {
        const data = result.data[`${source}_${target}`]
        resolve(data)
      })
      .catch(error => {
        console.log(error)
        reject(error)
      })
  })
}

export default { convert }