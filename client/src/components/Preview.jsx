import React from "react";

const Preview = ({ total }) => {
  return (
    <div className=" mt-16 w-[100%] h-[200px]  flex justify-around items-center ">
      <button className="bg-white py-2 w-[150px] rounded-full" type="submit">
        submit
      </button>

      <div className="preview h-[50px] w-[200px] bg-black  font-primary  text-white text-center flex justify-center items-center rounded-[10px] ">
        <strong className="text-[22px]">
          <span>₹</span>
          {total}
        </strong>
      </div>
    </div>
  );
};

export default Preview;
