"use client";
import Image from "next/image";

import gray_four from "../../assets/search/gray-four.png";
import blue_four from "../../assets/search/blue-four.png";
import gray_two from "../../assets/search/gray-two.png";
import blue_two from "../../assets/search/blue-two.png";
import gray_sort from "../../assets/search/gray-sort-az.png";
import blue_sort from "../../assets/search/blue-sort-az.png";
import { useMyContext } from "@/app/context/page";
const Search = () => {
  const { state, handleState } = useMyContext();
  return (
    <div className=" flex justify-between items-center gap-4 px-5 my-10">
      <div>
        <div>
          <input
            type="text"
            placeholder="🔍 Start typing to search for any Dataset"
            className="w-180 rounded px-4 py-2 border border-gray-500 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition"
          />
        </div>
      </div>
      <div className="flex items-center gap-4 cursor-pointer">
        <div>
          {state.gridClick === "four" ? (
            <Image src={blue_four} alt="four" height={35} width={35} />
          ) : (
            <Image
              src={gray_four}
              alt="four"
              height={35}
              width={35}
              onClick={() => {
                handleState({ gridClick: "four" });
              }}
            />
          )}
        </div>

        <div>
          {state.gridClick === "two" ? (
            <Image src={blue_two} alt="two" height={35} width={35} />
          ) : (
            <Image
              src={gray_two}
              alt="four"
              height={35}
              width={35}
              onClick={() => {
                handleState({ gridClick: "two" });
              }}
            />
          )}
        </div>
      </div>
      <div className="flex items-center gap-4 cursor-pointer">
        <div>
          {state.sortFilter ? (
            <Image src={blue_sort} height={35} width={35} alt="sort" />
          ) : (
            <Image src={gray_sort} height={35} width={35} alt="sort" />
          )}
        </div>
        <div>
          <select
            value={state.sort}
            onChange={(e) => {
              handleState({ sort: e.target.value });
            }}
            className="w-50 rounded px-1 py-2 border border-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 transition "
          >
            <option value="recent" disabled>
              Latest Updated
            </option>
            <option value="alphabetical)">Alphabetical</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Search;
