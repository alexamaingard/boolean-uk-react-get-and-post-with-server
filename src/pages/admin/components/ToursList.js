import { Link } from "react-router-dom"

const ToursList = props => {
  const { tours } = props;

  return (
    <>
      <h2>Available Tours</h2>
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
    </>
  )
}

export default ToursList
