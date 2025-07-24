"use client";
import React from "react";
import CardGridFour from "../cardGridFour/CardGridFour";
import { useMyContext } from "@/app/context/Context";
import CardGridTwo from "../cardGridTwo/CardGridTwo";
import Pagination from "../pagination/Pagination";

const Content = () => {
  const { state } = useMyContext();
  return (
    <div>
      {state.gridClick === "four" ? (
        <>
          <div className="grid grid-cols-3 gap-5 shadow-2xl p-5">
            {state.mainData.map((ele, i) => (
              <div key={i}>
                <CardGridFour ele={ele} />
              </div>
            ))}
          </div>

          <Pagination />
        </>
      ) : (
        <>
          <div className="grid gap-5 shadow-2xl p-5">
            {state.mainData.map((ele, i) => (
              <div key={i}>
                <CardGridTwo ele={ele} />
              </div>
            ))}
          </div>
          <div>
            <Pagination />
          </div>
        </>
      )}
    </div>
  );
};

export default Content;
