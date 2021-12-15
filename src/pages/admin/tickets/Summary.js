import { useState, useEffect } from "react"
import TicketsTable from "./components/TicketsTable"

function TicketsSummary() {
  const [tickets, setTickets] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:3030/tickets');
      const data = await res.json();
      //console.log('available tickets: ', data);
      setTickets(data);
    }
    fetchData();
  }, [])

  console.log({ tickets })

  return (
    <main>
      <h1>Tickets Summary</h1>
      <TicketsTable tickets={tickets} />
    </main>
  )
}

export default TicketsSummary
