import { useState, useEffect, useContext } from "react";
// import Faqs from "../components/Faqs";
// import Hero from "../components/Hero";
// import Cta from "../components/Cta";
import api from "../api";

export default function Home() {
  const [message, setMessage] = useState("");
console.log("api : ", api)
  api
    .get("/")
    .then((res) => {
        if (res.status === 200) 
            {
                // alert("Sentiment gotten!", res.data.prediction); 
                console.log(res.data);
            }
        else alert("Failed to get message.");
        setMessage(res.data.message);
        // getNotes();
    })
  return (
    <main className="py-12">
      <h3>Message: { message }</h3>
    </main>
  );
}
