import { useEffect, useState } from "react"

const ViewTickets = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3030/tickets');
        const data = await res.json();
        //console.log('available tickets: ', data);
        setTickets(data);
      }
      catch(error) {
        console.log(error);
      }
    }
    fetchData();
  }, [])

  return (
    <ul>
      {tickets.map((ticket, index) => {
        const { email, quantity, date, tour } = ticket

        return (
          <li key={index}>
            <h3>{tour.name}</h3>
            <p>Email: {email}</p>
            <p>Quantity: {quantity}</p>
            <p>Date: {date}</p>
          </li>
        )
      })}
    </ul>
  )
}

export default ViewTickets