import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function ToursList() {
  const [tours, setTours] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3030/tours');
        const data = await res.json();
        //console.log('available tours: ', data);
        setTours(data);
      }
      catch(error) {
        console.log(error);
      }
    }
    fetchData();
  }, [])

  console.log({ tours })

  return (
    <ul>
      {tours.map((tour, index) => {
        const { name, price } = tour

        return (
          <li key={index}>
            <h3>{name}</h3>
            <p>Price: £{price}</p>
            <Link to={`/tours/${tour.id}/book`} state={{ tour }}>
              Book Tour
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default ToursList
