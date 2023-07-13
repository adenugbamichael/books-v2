import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Book = () => {
  const baseUrl = "http://localhost:8000/api/books"
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectCategory, setSelectCategory] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = baseUrl
        if (selectCategory) {
          url += `?category=${selectCategory}`
        }

        const response = await fetch(url)

        if (!response.ok) {
          throw new Error("Failed to fetch data")
        }

        const jsonData = await response.json()
        setData(jsonData)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
        setError("Error fetching data. Please try again later.")
        setIsLoading(false)
      }
    }
    fetchData()
  }, [selectCategory])

  return (
    <div>
      <h1>Books</h1>
      <p>
        This is where we use NodeJs, Express & MongoDB to grab some data. The
        data below is pulled from a MongoDB database.
      </p>
      <Link to='/updatebook'>+ Add New Book</Link>

      <h2>Fetch Example</h2>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre>*/}

      <div className='filters'>
        <label htmlFor=''>Categories</label>
        <select onChange={(e) => setSelectCategory(e.target.value)}>
          <option value=''>All</option>
          <option value='romance'>Romance</option>
          <option value='science'>Science</option>
          <option value='crime'>Crime</option>
          <option value='food'>Food</option>
          <option value='adventure'>Adventure</option>
          <option value='thriller'>Thriller</option>
          <option value='fiction'>Fiction</option>
          <option value='other'>other</option>
        </select>
      </div>

      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul className='books'>
          {data.map((item) => (
            <li key={item._id}>
              <Link to={`/books/${item.slug}`}>
                <img
                  src={`http://localhost:8000/uploads/${item.thumbnail}`}
                  alt={item.title}
                />
                <h3>{item.title}</h3>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Book
