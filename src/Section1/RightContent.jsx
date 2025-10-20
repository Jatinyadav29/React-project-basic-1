import { ArrowUpRight } from "lucide-react";

const RightContent = () => {
  return (
    <div className="h-full w-3/4 flex gap-5">
      <div
        className="bg-cover w-1/3 flex flex-col justify-between p-15 rounded-[70px]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1707857046403-b8e02b7fe163?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==&auto=format&fit=crop&q=80&w=627')",
        }}
      >
        <div className="flex">
          <h3 className="px-8 py-6 bg-white rounded-full">1</h3>
        </div>
        <div className="text-white font-bold text-xl">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
            placeat perspiciatis corrupti explicabo molestiae tempora
            repellendus officiis porro, odit nesciunt.
          </p>
          <div className="mt-15 flex justify-between">
            <button className="bg-blue-600 py-5 px-10 rounded-full">
              Satisfied
            </button>
            <button className="bg-blue-600 p-5 rounded-full">
              <ArrowUpRight />
            </button>
          </div>
        </div>
      </div>

      <div
        className="bg-cover w-1/3 flex flex-col justify-between p-15 rounded-[70px]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1707857046403-b8e02b7fe163?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==&auto=format&fit=crop&q=80&w=627')",
        }}
      >
        <div className="flex">
          <h3 className="px-8 py-6 bg-white rounded-full">1</h3>
        </div>
        <div className="text-white font-bold text-xl">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
            placeat perspiciatis corrupti explicabo molestiae tempora
            repellendus officiis porro, odit nesciunt.
          </p>
          <div className="mt-15 flex justify-between">
            <button className="bg-blue-600 py-5 px-10 rounded-full">
              Satisfied
            </button>
            <button className="bg-blue-600 p-5 rounded-full">
              <ArrowUpRight />
            </button>
          </div>
        </div>
      </div>
      <div
        className="bg-cover w-1/3 flex flex-col justify-between p-15 rounded-[70px]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1707857046403-b8e02b7fe163?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==&auto=format&fit=crop&q=80&w=627')",
        }}
      >
        <div className="flex">
          <h3 className="px-8 py-6 bg-white rounded-full">1</h3>
        </div>
        <div className="text-white font-bold text-xl">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
            placeat perspiciatis corrupti explicabo molestiae tempora
            repellendus officiis porro, odit nesciunt.
          </p>
          <div className="mt-15 flex justify-between">
            <button className="bg-blue-600 py-5 px-10 rounded-full">
              Satisfied
            </button>
            <button className="bg-blue-600 p-5 rounded-full">
              <ArrowUpRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightContent;
