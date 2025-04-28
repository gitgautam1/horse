import React from "react";

function BulletPointList({ heading, items }) {
  return (
    <div className="grow shrink min-w-60 w-[350px]">
      <div className="flex flex-col w-full">
        <h3 className="text-lg text-black">{heading}</h3>
        <ul className="list-none">
          {items.map((item, index) => (
            <li key={index} className="flex gap-1.5 items-center">
              <span className="self-stretch my-auto text-3xl text-blue-800">
                ·
              </span>
              <p className="self-stretch my-auto text-base text-black">
                {item}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BulletPointList;
