import { ArrowUpRight } from "lucide-react";

const RightCard = (props) => {
  return (
    <div
      className="bg-cover w-1/3 shrink-0 flex flex-col justify-between p-15 rounded-[70px]"
      style={{
        backgroundImage: `url(${props.img})`,
      }}
    >
      <div className="flex">
        <h3 className="px-8 py-6 bg-white rounded-full font-bold text-xl">
          {props.id + 1}
        </h3>
      </div>
      <div className="text-white text-xl">
        <p>{props.intro}</p>
        <div className="mt-15 flex justify-between">
          <button
            style={{ backgroundColor: props.color }}
            className="py-5 px-10 rounded-full"
          >
            {props.tag}
          </button>
          <button
            style={{ backgroundColor: props.color }}
            className=" px-5 rounded-full"
          >
            <ArrowUpRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCard;
