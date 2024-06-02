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



  // useLayoutEffect(() => {
  //   console.log("zehra ecer");
  // }, [])

  console.log(selectedYear);
  return (
    <>
      <div>
        <select className='option' name="cars" id="cars" style={{ padding: "10px 70px" }} value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
          <option className='option' value="2011">2011</option>
          <option className='option' value="2012">2012</option>
          <option className='option' value="2013">2013</option>
          <option className='option' value="2014">2014</option>
          <option className='option' value="2015">2015</option>
          <option className='option' value="2016">2016</option>
          <option className='option' value="2017">2017</option>
          <option className='option' value="2018">2018</option>
          <option className='option' value="2019">2019</option>


        </select>
      </div>
    </>
  )
}

export default App
