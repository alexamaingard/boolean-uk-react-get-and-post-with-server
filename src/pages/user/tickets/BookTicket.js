import { useEffect, useState } from "react"
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom"


const BookTicket = () => {
  const [tour, setTour] = useState(null);
  const [ticketToBook, setTicketToBook] = useState({
    tourId: null,
    email: "", 
    quantity: 0,
    date: ""
  });
  
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if(location.state){
      const { tour } = location.state;
      setTour(tour);
    }
  }, [location]);

  const postData = async () => {
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...ticketToBook, tourId: tour.id }),
    }

    await fetch("http://localhost:3030/tickets", fetchOptions);
    navigate('/tickets');
  }

  const handleSubmit = event => {
    event.preventDefault();
    postData();
  }

  const handleChange = event => {
    const {name, value} = event.target;
    setTicketToBook({ ...ticketToBook, [name]: value })
  }

  return(
    <form className="form-stack" onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        onChange={handleChange}
        value={ticketToBook.email}
      />
      <label htmlFor="quantity">Quantity</label>
      <input
        type="text"
        id="quantity"
        name="quantity"
        onChange={handleChange}
        value={ticketToBook.quantity}
      />
      <label htmlFor="date">Date</label>
      <input
        type="datetime-local"
        id="date"
        name="date"
        onChange={handleChange}
        value={ticketToBook.date}
      />
      <button type="submit">Book Ticket</button>
      <Link to="/">Cancel</Link>
    </form>
  )
}

export default BookTicket
