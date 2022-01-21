export const fetchBuffer = (url: string) =>
  new Promise<ArrayBuffer>((resolve, reject) => {
    fetch(url)
      .then(async (res) => {
        if (res.ok) {
          const arrayBuffer = await res.arrayBuffer()
          return resolve(arrayBuffer)
        }

        reject(new Error(res.statusText))
      })
      .catch((err) => {
        reject(err)
      })
  })
