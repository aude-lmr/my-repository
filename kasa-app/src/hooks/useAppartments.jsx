import { useEffect, useState } from "react";

// Define a custom hook named "useAppartments" to fetch a list of appartments
export function useAppartments() {
  const [appartments, setAppartment] = useState([]); // Create a state variable "appartments" and a function "setAppartment" using useState, initially set to an empty array

  useEffect(() => {
    async function fetchDatas() {
      const response = await fetch("./datas/appartments.json");
      const data = await response.json();

      setAppartment(data); // Set the appartment data to the fetched data
    }

    fetchDatas();
  }, []);
  return {
    appartments, // Return the fetched list of appartments
  };
}
