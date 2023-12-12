import { useState, useEffect } from 'react'

function useData() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/category/electronics?limit=5', { mode: 'cors' })
      .then((res) => {
        if (res.status >= 400) {
          throw new Error('server error')
        }
        return res.json()
      })
      .then((json) => {
        setData(json)
        setError(null)
      })
      .catch((err) => {
        setError(err)
        setData(null)
      })
      .finally(() => setLoading(false))
  }, [])

  return { data, error, loading }
}

export default useData
