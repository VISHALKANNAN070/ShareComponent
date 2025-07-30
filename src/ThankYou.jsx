import Thnk from "./assets/illustration-thank-you.svg";

const ThankYou = ({ rating }) => {
  return (
    <div className="bg-zinc-900 min-h-screen flex items-center justify-center">
      <div className="size-110 bg-[#2c2e37] rounded-4xl p-8 flex flex-col justify-evenly items-center">
        <img src={Thnk} alt="Thank_you_image" className="w-45" />
        <p className="text-amber-500 bg-[#f59f0b19] py-2 px-5 rounded-full">
          You selected {rating} out of 5
        </p>
        <h2 className="text-3xl font-bold text-white">Thank you!</h2>
        <p className="text-slate-400 text-center">
          Thank you! We appreciate you taking the time to give a rating. If you
          ever need more support, don’t hesitate to get in touch!
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
