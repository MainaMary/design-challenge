import React from "react";
import { TiTick } from "react-icons/ti";
import { featuresList } from "../utils/constants";

const Features = () => {
  return (
    <div className="flex mt-36 w-full md:w-[80%] justify-center m-auto">
      {featuresList.map(({ listOne, listTwo, background }, index: number) => {
        const list = listOne.map((name, index) => (
          <div className="flex">
            <div
              style={{
                background:
                  background === "purple"
                    ? "#d5acd5"
                    : background === "blue"
                    ? "#9fc5e8"
                    : background === "green"
                    ? "#03c04a"
                    : "",
              }}
              className="rounded-full w-[20px] flex justify-center  items-center h-[20px]"
            >
              <TiTick />
            </div>
            <div className="ml-6 my-2">
              <p className="font-semibold text-sm">{name}</p>
              <p className="text-sm">{listTwo[index]}</p>
            </div>
          </div>
        ));
        
        return (
          <div key={index} className="flex justify-center m-auto">
           
            <div >
            <p className="font-semibold text-bs mb-4">Power features</p>
              <div>
                <p>{list}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Features;
