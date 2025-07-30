import Star from "./assets/icon-star.svg";

const Rate = ({ rating, setRating, handleSubmit }) => {
  return (
    <>
      <div className="bg-zinc-900 min-h-screen flex items-center justify-center">
        <div className="size-110 bg-[#2f313c] rounded-4xl p-8 flex flex-col justify-evenly">
          <img
            src={Star}
            alt="Star logo"
            className="bg-zinc-700 p-4 rounded-full size-12"
          />
          <h1 className="text-3xl text-white font-bold">How did we do?</h1>
          <p className="text-white">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div className="flex justify-evenly text-center">
            {[1, 2, 3, 4, 5].map((num) => (
              <button
                key={num}
                onClick={() => setRating(num)}
                className={` text-white hover:text-zinc-700 rounded-full size-14 p-4 hover:bg-white cursor-pointer ${
                  rating === num ? "bg-amber-500" : "bg-zinc-700 "
                } `}
              >
                {num}
              </button>
            ))}
          </div>
          <button
            onClick={handleSubmit}
            className="text-zinc-700 w-full bg-white rounded-full h-14 active:bg-amber-500 mt-2"
          >
            SUBMIT
          </button>
        </div>
      </div>
    </>
  );
};

export default Rate;
