import React from "react";

const Preview = ({ total }) => {
  return (
    <div className="w-[100%] h-[200px] bg-slate-500 flex justify-around items-center">
      <button className="bg-white py-2 w-[150px] rounded-full" type="submit">
        submit
      </button>

      <div className="h-[50px] w-[200px] bg-slate-600 text-white text-center flex justify-center items-center rounded-[10px] ">
        <strong className="text-[22px]">
          <span>₹</span>
          {total}
        </strong>
      </div>
    </div>
  );
};

export default Preview;
