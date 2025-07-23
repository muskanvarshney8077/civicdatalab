"use client";
import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
const MyContext = createContext();

const DataProvider = ({ children }) => {
  const initialState = {
    sidebardata: {
      sector: [],
      geo: [],
      tags: [],
      type: [],
    },
    mainData: [],
    totals: 1,
    checkboxBlockCollapse: {
      sector: true,
      geo: true,
      tags: true,
      type: true,
    },
    gridClick: "four",
    clicked: "All Data",
    sortFilter: false,
    page: 1,
    size: 3,
    sort: "recent",
    order: "asc",
  };
  const reducer = (state, newState) => {
    return { ...state, ...newState };
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleState = (obj) => {
    dispatch(obj);
  };
  // API for checkboxblock
  const fetchCheckBoxBlockData = async () => {
    const data = await axios.get(
      "https://api.datakeep.civicdays.in/api/search/dataset/"
    );
    const sectorarr = [];
    const geoarr = [];
    const tags = [];
    const type = [];

    for (const ele in data.data.aggregations.sectors) {
      sectorarr.push(ele);
    }
    for (const ele in data.data.aggregations.Geography) {
      geoarr.push(ele);
    }
    for (const ele in data.data.aggregations.tags) {
      tags.push(ele);
    }
    for (const ele in data.data.aggregations.formats) {
      type.push(ele);
    }
    handleState({
      sidebardata: {
        sector: sectorarr,
        geo: geoarr,
        tags: tags,
        type: type,
      },
      totals: data.data.total,
    });
  };
  const fetchMainData = async () => {
    const data = await axios.get(
      `https://api.datakeep.civicdays.in/api/search/dataset/?size=${
        state.gridClick === "four" ? state.size * 3 : state.size
      }&page=${state.page}&sort=${state.sort}&order=${state.order}`
    );
    handleState({ mainData: [...data.data.results] });
  };
  useEffect(() => {
    try {
      fetchCheckBoxBlockData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    try {
      fetchMainData();
    } catch (err) {
      console.log(err);
    }
  }, [state.size, state.page]);
  const contextValue = {
    state,
    handleState,
  };
  return (
    <div>
      <div>
        <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
      </div>
    </div>
  );
};
const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a DataProvider");
  }
  return context;
};

export { DataProvider, useMyContext };
