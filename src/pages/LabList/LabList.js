import React, { useEffect, useState } from "react";
import ListContainer from "../../Components/ListContainer/ListContainer";
import { labsList } from "../../Services/LabServices";

export default function LabList() {
  const [data, setData] = useState([]);
  useEffect(async () => {
    const response = await labsList(data);
    console.log(response);
    setData(response);
  }, []);

  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <div className="container flex justify-center mx-auto pt-16">
          <div>
            <h1 className="xl:text-5xl text-4xl text-center text-gray-800 font-extrabold pb-6 mt-3 w-full mx-auto">
              List of Labs
            </h1>
          </div>
        </div>
        <div className="flex justify-center items-center flex-wrap">
          {data.map((data, id) => {
            return <ListContainer list={data} key={id} />;
          })}
        </div>
      </div>
    </>
  );
}
