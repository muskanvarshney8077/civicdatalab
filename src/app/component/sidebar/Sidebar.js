"use client";
import React from "react";

import CheckBoxBlock from "../checkboxBlock/CheckboxBlock";
import { useMyContext } from "@/app/context/Context";
import Image from "next/image";
import minus from "../../assets/sidebar/minus.png";

import down_chevron from "../../assets/sidebar/down-chevron.png";
const SideBar = () => {
  const { state, handleState } = useMyContext();

  return (
    <div className=" rounded shadow-2xl p-4 h-auto mb-20 ">
      <div className="flex justify-between gap-5  items-center cursor-pointer">
        <div className="text-blue-400 text-xl">Filters</div>
        <div className="text-orange-400 ">Reset</div>
      </div>
      <div>
        <div className="my-5">
          <div
            className="flex items-center justify-between gap-5 px-5 border py-2 border-gray-400 rounded bg-gray-300 cursor-pointer"
            onClick={() => {
              handleState({
                checkboxBlockCollapse: {
                  ...state.checkboxBlockCollapse,
                  sector: !state.checkboxBlockCollapse.sector,
                },
              });
            }}
          >
            <div>{`Sector (${state.sidebardata.sector.length})`} </div>
            <div>
              {state.checkboxBlockCollapse.sector ? (
                <Image src={minus} height={15} width={15} alt="minus" />
              ) : (
                <Image src={down_chevron} height={15} width={15} alt="minus" />
              )}
            </div>
          </div>
          <div className="max-h-[30vh] overflow-y-auto py-3 mx-4">
            {state.checkboxBlockCollapse.sector &&
              state.sidebardata.sector.map((ele, i) => (
                <div key={i}>
                  <CheckBoxBlock
                    ele={ele}
                    checked={state.sectorfilter.includes(ele)}
                    handleChange={(e) => {
                      if (state.sectorfilter.includes(ele)) {
                        handleState({
                          sectorfilter: [
                            ...state.sectorfilter.filter(
                              (element, i) => element !== e.target.value
                            ),
                          ],
                          page: 1,
                        });
                      } else {
                        handleState({
                          sectorfilter: [...state.sectorfilter, e.target.value],
                          page: 1,
                        });
                      }
                    }}
                  />
                </div>
              ))}
          </div>
        </div>
        <div className="my-5">
          <div
            className="flex items-center justify-between gap-5 px-5 border py-2 border-gray-400 rounded bg-gray-300 cursor-pointer "
            onClick={() => {
              handleState({
                checkboxBlockCollapse: {
                  ...state.checkboxBlockCollapse,
                  geo: !state.checkboxBlockCollapse.geo,
                },
              });
            }}
          >
            <div>{`Geographies (${state.sidebardata.geo.length})`}</div>
            <div>
              {state.checkboxBlockCollapse.geo ? (
                <Image src={minus} height={15} width={15} alt="minus" />
              ) : (
                <Image src={down_chevron} height={15} width={15} alt="minus" />
              )}
            </div>
          </div>
          <div className="max-h-[30vh] overflow-y-auto py-3 mx-4">
            {state.checkboxBlockCollapse.geo &&
              state.sidebardata.geo.map((ele, i) => (
                <div key={i}>
                  <CheckBoxBlock
                    ele={ele}
                    checked={state.geoFilter.includes(ele)}
                    handleChange={(e) => {
                      if (state.geoFilter.includes(ele)) {
                        handleState({
                          geoFilter: [
                            ...state.geoFilter.filter(
                              (element, i) => element !== e.target.value
                            ),
                          ],
                          page: 1,
                        });
                      } else {
                        handleState({
                          geoFilter: [...state.geoFilter, e.target.value],
                          page: 1,
                        });
                      }
                    }}
                  />
                </div>
              ))}
          </div>
        </div>
        <div className="my-5">
          <div
            className="flex items-center justify-between gap-5 px-5 border py-2 border-gray-400 rounded bg-gray-300 cursor-pointer "
            onClick={() => {
              handleState({
                checkboxBlockCollapse: {
                  ...state.checkboxBlockCollapse,
                  tags: !state.checkboxBlockCollapse.tags,
                },
              });
            }}
          >
            <div>{`Tags (${state.sidebardata.tags.length})`}</div>
            <div>
              {state.checkboxBlockCollapse.tags ? (
                <Image src={minus} height={15} width={15} alt="minus" />
              ) : (
                <Image src={down_chevron} height={15} width={15} alt="minus" />
              )}
            </div>
          </div>
          <div className="max-h-[30vh] overflow-y-auto py-3 mx-4">
            {state.checkboxBlockCollapse.tags &&
              state.sidebardata.tags.map((ele, i) => (
                <div key={i}>
                  <CheckBoxBlock
                    ele={ele}
                    checked={state.tagFilter.includes(ele)}
                    handleChange={(e) => {
                      if (state.tagFilter.includes(ele)) {
                        handleState({
                          tagFilter: [
                            ...state.tagFilter.filter(
                              (element, i) => element !== e.target.value
                            ),
                          ],
                          page: 1,
                        });
                      } else {
                        handleState({
                          tagFilter: [...state.tagFilter, e.target.value],
                          page: 1,
                        });
                      }
                    }}
                  />
                </div>
              ))}
          </div>
        </div>
        <div className="mt-5">
          <div
            className="flex items-center justify-between gap-5 px-5 border py-2 border-gray-400 rounded bg-gray-300 cursor-pointer  "
            onClick={() => {
              handleState({
                checkboxBlockCollapse: {
                  ...state.checkboxBlockCollapse,
                  type: !state.checkboxBlockCollapse.type,
                },
              });
            }}
          >
            <div>{`Formats (${state.sidebardata.type.length})`}</div>
            <div>
              {state.checkboxBlockCollapse.type ? (
                <Image src={minus} height={15} width={15} alt="minus" />
              ) : (
                <Image src={down_chevron} height={15} width={15} alt="minus" />
              )}
            </div>
          </div>
          <div className="max-h-[30vh] overflow-y-auto py-3 mx-4">
            {state.checkboxBlockCollapse.type &&
              state.sidebardata.type.map((ele, i) => (
                <div key={i}>
                  <CheckBoxBlock
                    ele={ele}
                    checked={state.typeFilter.includes(ele)}
                    handleChange={(e) => {
                      if (state.typeFilter.includes(ele)) {
                        handleState({
                          typeFilter: [
                            ...state.typeFilter.filter(
                              (element, i) => element !== e.target.value
                            ),
                          ],
                          page: 1,
                        });
                      } else {
                        handleState({
                          typeFilter: [...state.typeFilter, e.target.value],
                          page: 1,
                        });
                      }
                    }}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
