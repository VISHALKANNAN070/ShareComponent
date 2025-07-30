import { useState } from "react";
import Rate from "./Rate";
import ThankYou from "./ThankYou";
import toast from "react-hot-toast";

const App = () => {
  const [feedback, setFeedback] = useState(false);
  const [rating, setRating] = useState(null);

  const handleSubmit = () => {
    rating ? setFeedback(true) : toast.error("Select a rating..");
  };

  return (
    <div>
      {feedback ? (
        <ThankYou rating={rating} />
      ) : (
        <Rate
          rating={rating}
          setRating={setRating}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default App;
