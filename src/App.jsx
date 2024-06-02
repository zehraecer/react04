import { useEffect, useLayoutEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [selectedYear, setSelectedYear] = useState()

  useEffect(() => {
    let url = `https://jsonmock.hackerrank.com/api/football_competitions?year=${selectedYear}`

    async function fetchData() {
      fetch(url)
    }

    fetchData()
  }, [])



  useLayoutEffect(() => {
    console.log("zehra ecer");
  }, [])


  return (
    <>
      <div>
        <select name="cars" id="cars" style={{ padding: "10px 70px" }}>
          <option value="2011">2011</option>
          <option value="2012">2012</option>
          <option value="2013">2013</option>
          <option value="2014">2014</option>
          <option value="2015">2015</option>
          <option value="2016">2016</option>

        </select>
      </div>
    </>
  )
}

export default App
