import Image from "next/image";
import React from "react";
import updated from "../../assets/card/updated.png";
import PDF from "../../assets/card/pdf.png";
import CSV from "../../assets/card/csv.png";
import JSON from "../../assets/card/json.png";
import geography from "../../assets/card/geography.png";
import sector from "../../assets/card/sector.png";
import chart from "../../assets/card/chart.png";
import downloads from "../../assets/card/downloads.png";
import XML from "../../assets/card/xml.png";

import madeby from "../../assets/footer/madeby.png";
const CardGridTwo = ({ ele }) => {
  const formatIcons = {
    CSV,
    PDF,
    XML,
    JSON,
    default: CSV, // or any placeholder icon
  };

  const geo = ele.metadata.find(
    (ele) => ele.metadata_item.label === "Geography"
  )?.value;
  // const formatArr = []
  // for (let i = 0; i < ele.formats.length; i++){
  //   if(ele.formats[i]==="CSV")
  //   formatArr.push("csv")
  // }
  return (
    <div>
      <div className="shadow-2xl  py-4 px-2   rounded-xl border-t border-b border-gray-100  ">
        <h1 className="text-blue-600 text-[20px] font-medium h-10">
          {ele.title}
        </h1>
        <div className=" text-[12px] my-5">
          <div className=" line-clamp-4 text-gray-700">{ele.description}</div>
        </div>
        <div className="flex justify-start items-start gap-10 my-5 text-gray-700 text-[12px] font-medium">
          <div className="flex gap-2  ">
            <div>
              <Image src={updated} width={15} height={15} alt="" />
            </div>
            <div>{`Last Updated : ${ele.modified.substring(0, 9)}`} </div>
          </div>
          <div className="flex gap-2  ">
            <div>
              <Image src={downloads} width={15} height={15} alt="" />
            </div>
            <div>{`Downloads : ${ele.download_count}+`} </div>
          </div>
          <div className="flex gap-2  ">
            <div>
              <Image src={geography} width={15} height={15} alt="" />
            </div>
            <div>{`Geography : ${geo}`} </div>
          </div>
          <div className="flex gap-2  ">
            <div>
              <Image src={chart} width={15} height={15} alt="" />
            </div>
            <div>With Charts </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 text-gray-600 font-medium">
          <div className="flex gap-2  justify-start items-center">
            <div>Sectors: </div>
            <div>
              <Image src={sector} width={15} height={15} alt="" />
            </div>
          </div>
          <div className="flex gap-2 flex-wrap justify-start items-center">
            <div>Tags: </div>
            {ele.tags.map((element, i) => (
              <div
                key={i}
                className="border border-gray-300 bg-green-300 py-1 px-2 rounded"
              >
                {element}
              </div>
            ))}
          </div>
          <div className="flex gap-2  justify-start items-center">
            <div>Published By: </div>

            <div>
              <Image src={madeby} width={20} height={20} alt="" />
            </div>
          </div>
          <div className="flex gap-2  justify-start items-center">
            <div>Formats:</div>
            {ele.formats.map((element, i) => (
              <Image
                key={i}
                src={formatIcons[element] || formatIcons.default}
                width={20}
                height={20}
                alt=""
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardGridTwo;
