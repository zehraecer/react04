import { useEffect, useLayoutEffect, useState, useRef } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [selectedYear, setSelectedYear] = useState(2011)
  const inputRef = useRef(null);

  useEffect(() => {
    let url = `https://jsonmock.hackerrank.com/api/football_competitions?year=${selectedYear}`

    async function fetchData() {
      fetch(url)
        .then((response) => response.json())
        .then(result => setData(result.data))
        .catch((err) => console.error(err.message ?? err))
        .finally(console.log("is loading"))
    }

    fetchData()
    inputRef.current.focus()
  }, [selectedYear])


  // useEffect(() => {
  //   let url = `https://jsonmock.hackerrank.com/api/football_competitions?year=${selectedYear}`

  //   const axios = require('axios/dist/node/axios.cjs'); // node
  // }, [selectedYear])




  const years = [
    { year: 2011 },
    { year: 2012 },
    { year: 2013 },
    { year: 2014 },
    { year: 2015 },
    { year: 2016 },
    { year: 2017 },
    { year: 2018 },
    { year: 2019 },
    { year: 2020 }
  ]

  // useLayoutEffect(() => {
  //   console.log("zehra ecer");
  // }, [])

  console.log(inputRef);
  return (
    <>
      <div>
        <select className='option' name="cars" id="cars" style={{ padding: "10px 70px" }} value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>

          {years.map((year, index) => {
            return (
              <option key={index} className='option' value={year.year}>{`${year.year}`}</option>
            )
          })}

        </select>

      </div>
      <div>

        <label>Enter your name:
          <input ref={inputRef}

          />
        </label>
      </div>
    </>
  )
}

export default App
