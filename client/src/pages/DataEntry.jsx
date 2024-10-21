import React from "react";

const DataEntry = () => {
  return (
    <div className="w-full h-full bg-slate-300 ">
      <h1 className="text-[50px] text-center  mt-5">mooi yenuvomah</h1>
      <div className="w-[80%] h-[80vh] mx-auto my-[50px] bg-black text-white">
        <form className="w-[100%] h-full bg-slate-500">
          <table className="w-full ">
            <thead className=" bg-zinc-700 text-black text-[23px]">
              <tr>
                <th>family</th>
                <th>situation</th>
              </tr>
            </thead>
            <tbody className=" bg-zinc-700 ">
              <tr>
                <td>
                  <input className="text-black w-full border-black " />
                </td>
                <td>
                  <input className="text-black w-full" />
                </td>
              </tr>
            </tbody>
          </table>
          <button type="button" className="p-3 bg-black text-white rounded">
            Add Row
          </button>
        </form>
      </div>
    </div>
  );
};

export default DataEntry;
