"use client";
import React from "react";

const CheckBoxBlock = ({ ele, handleChange, checked }) => {
  return (
    <div className="h-[10%] ">
      <div className="mx-h-[5%] overflow-y-auto">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            className="w-4 h-4 accent-orange-500"
            onClick={(e) => handleChange(e)}
            value={ele}
            checked={checked}
          />
          <span>{ele}</span>
        </label>
      </div>
    </div>
  );
};

export default CheckBoxBlock;
