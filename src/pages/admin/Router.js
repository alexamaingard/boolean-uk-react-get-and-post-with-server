import { useState, useEffect } from "react"
import { Route, Routes } from "react-router"
import { Link } from "react-router-dom"
import CreateTourPage from "./tours/CreateTour"
import Dashboard from "./Dashboard"
import TicketsSummary from "./tickets/Summary"

function AdminRouter() {
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

  console.log('available tours: ', { tours })

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/admin/">Admin Dashboard</Link>
            </li>
            <li>
              <Link to="/admin/tours/create">Create a Tour</Link>
            </li>
            <li>
              <Link to="/admin/tickets/summary">Tickets Summary</Link>
            </li>
            <li>
              <Link to="/">User Pages</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Dashboard tours={tours} />} />
        <Route
          path="/tours/create"
          element={<CreateTourPage />}
        />
        <Route path="tickets/summary" element={<TicketsSummary />} />
      </Routes>
    </>
  )
}

export default AdminRouter
