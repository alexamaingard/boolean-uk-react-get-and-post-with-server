import { useState } from "react"
import { useNavigate } from "react-router-dom";

const CreateTourPage = () => {
  let navigate = useNavigate();

  const [tourToCreate, setTourToCreate] = useState({
    name: "",
    price: 0,
  })

  console.log({ tourToCreate })

  const postTourData = async () => {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'  
    },
    body: JSON.stringify(tourToCreate)
    };

    await fetch('http://localhost:3030/tours', fetchOptions);
  }

  const handleSubmit = event => {
    event.preventDefault();
    postTourData();
    // Redirect to "/" with navigate and useNavigate
    navigate("/", { replace: true });
  }

  const handleChange = event => {
    const {name, value} = event.target;

    setTourToCreate({ ...tourToCreate, [name]: value })
  }

  return (
    <form className="form-stack" onSubmit={handleSubmit}>
      <h2>Create a Tour</h2>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={handleChange}
        value={tourToCreate.name}
      />
      <label htmlFor="price">price</label>
      <input
        type="text"
        id="price"
        name="price"
        onChange={handleChange}
        value={tourToCreate.price}
      />
      <button type="submit">Create Tour</button>
    </form>
  )
}

export default CreateTourPage