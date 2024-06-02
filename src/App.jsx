import { useEffect, useLayoutEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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

        <button></button>
      </div>
    </>
  )
}

export default App
