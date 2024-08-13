import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Define a custom hook named "useAppartment" that fetches data for a specific appartment by its ID
export function useAppartment(id) {
  const [appartment, setData] = useState(null); // Create a state variable "appartment" and a function "setData" using useState, initially set to null
  const navigate = useNavigate();

  // Use the useEffect hook to fetch data and handle appartment loading
  useEffect(() => {
    // Create an asynchronous function to fetch appartment data
    async function fetchData() {
      const response = await fetch(
        "http://localhost:3000/datas/appartments.json"
      );
      const data = await response.json();

      const foundAppartment = data.find((item) => item.id === id); // Find the appartment with the matching ID in the data

      if (!foundAppartment) {
        navigate("*"); // If the appartment is not found, navigate to a wildcard route (404 page)
      }
      setData(foundAppartment);
    }

    fetchData();
  }, [id, navigate]);
  return {
    appartment, // Return the fetched appartment data
  };
}
