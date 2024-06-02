import { useEffect, useLayoutEffect, useState, useRef } from 'react'
import './App.css'
import { Loading } from './loading';

function App() {
  const [data, setData] = useState([])
  const [selectedYear, setSelectedYear] = useState(2011)
  const inputRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false)
  const [game, setGame] = useState({
    status: "existing", // null, active , existing
    id: 10
  })

  useEffect(() => {
    let url = `https://jsonmock.hackerrank.com/api/football_competitions?year=${selectedYear}`

    async function fetchData() {
      setIsLoading(true)
      fetch(url)
        .then((response) => response.json())
        .then(result => setData(result.data))
        .catch((err) => console.error(err.message ?? err))

      setTimeout(() => {
        setIsLoading(false);
      }, 2000);

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
      <div >  {isLoading ? <Loading /> :
        <div>
          <div>

            <select className='option' name="cars" id="cars" style={{ padding: "10px 70px" }} value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>

              {years.map((year, index) => {
                return (
                  <option key={index} className='option' value={year.year}>{`${year.year}`}</option>
                )
              })}

            </select>

          </div>
          {game.status === "active" && (
            <div>

              <input ref={inputRef} placeholder='name' />
            </div>

          )}

          {game.status === "existing" && (
            <div>
              <input ref={inputRef} placeholder='surName' />
            </div>
          )}



        </div>
      }


      </div>

    </>
  )
}

export default App
