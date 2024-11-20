import { useState } from "react";
import Modal from "./components/Modal/Modal";
import RatingCard from "./components/RatingCard/RatingCard";
import "./styles/global.scss";

export default function App() {
  const [rating, setRating] = useState(null);

  return (
    <main className="app">
      {!rating ? (
        <RatingCard onSubmit={setRating} />
      ): (

        <Modal rating={rating} />
      )}
    </main>
  );
}
