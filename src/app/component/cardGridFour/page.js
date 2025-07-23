"use client";
import React from "react";
import updated from "../../assets/card/updated.png";
import pdf from "../../assets/card/pdf.png";
import csv from "../../assets/card/csv.png";
import json from "../../assets/card/json.png";
import geography from "../../assets/card/geography.png";
import sector from "../../assets/card/sector.png";
import chart from "../../assets/card/chart.png";
import downloads from "../../assets/card/downloads.png";
import xml from "../../assets/card/xml.png";
import Image from "next/image";
import madeby from "../../assets/footer/madeby.png";

const CardGridFour = ({ ele }) => {
  const geo = ele.metadata.find(
    (ele) => ele.metadata_item.label === "Geography"
  )?.value;

  return (
    <div className="shadow-2xl h-80 py-4 px-2  overflow-hidden rounded-xl border-t border-b border-gray-100 ">
      <div className="text-blue-600 text-[16px] break-words h-12 font-medium">
        {ele.title}
      </div>
      <div className="flex gap-1 justify-between px-1  h-15">
        <div className="flex justify-start  items-center w-20 gap-1 text-[12px]">
          <div>
            <Image src={updated} width={15} height={15} alt="card" />
          </div>
          <div>{`${ele.modified.substring(0, 9)}`}</div>
        </div>
        <div className="flex justify-start  items-center gap-1 w-15 text-[12px]">
          <div>
            <Image src={downloads} width={15} hight={15} alt="card" />
          </div>
          <div>{ele.download_count}+</div>
        </div>
        <div className="flex justify-start  items-center gap-1  w-20 text-[12px]">
          <div>
            <Image src={geography} alt="card" width={15} height={15} />
          </div>
          <div className="truncate">{geo}</div>
        </div>
      </div>
      <hr className="border-[0.5px] border-gray-200 my-4 " />
      <div className="h-20 text-[12px] ">
        <div className=" line-clamp-4 text-gray-700">{ele.description}</div>
      </div>
      <div className="flex justify-between items-end px-2 py-3 h-20">
        <div className="flex gap-3">
          <div>
            <Image src={sector} width={15} height={15} alt="" />
          </div>
          <div>
            <Image src={chart} width={15} height={15} alt="" />
          </div>
        </div>
        <div className="flex gap-3">
          <div className="text-[10px] text-gray-600">published by</div>
          <div>
            <Image src={madeby} width={15} height={15} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardGridFour;
