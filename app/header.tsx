"use client";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState, changeheaderBg, changeMode, changeSectionbg, changeTitlebg, changetitleColor } from "./store";
import { useEffect, useState } from "react";
const logoText = 'COURSES4ARAB'
export default function HeaderC() {

  const dispatch: AppDispatch = useDispatch()
  const { headerBg, mode } = useSelector((state: AppState) => { return state.bgSlice })

  return (
    <header style={{ background: headerBg }} className={`px-20 z-30 sticky top-0 py-4 max-[500px]:h-60 transition-all duration-300  rounded-[0px_0px_60px_60px]  h-30 max-[700px]:h-35`}>
      <div className={`flex  flex-col items-center text-white  h-full   justify-between`}>
        <h1 className={`text-2xl px-8 py-2 rounded-full tracking-[4px]`}>{logoText}</h1>
        <div className={`bg-text-xl capitalize max-[700px]:gap-3 max-[500px]:grid-cols-1 max-[700px]:justify-center max-[700px]:grid max-[700px]:grid-cols-2 max-[]:  w-full flex items-center justify-between px-10`}>
          <span className={`cursor-pointer max-[700px]:flex max-[700px]:justify-center border-b border-transparent hover:border-white `}>All courses</span>
          <span className={`cursor-pointer max-[700px]:flex max-[700px]:justify-center border-b border-transparent hover:border-white `}>About us</span>
          <span className={`max-[700px]:flex max-[700px]:justify-center  group  relative`}>Change Mode
            <div style={{ background: headerBg }} className={` absolute w-50 z-10 right-0 group-hover:h-25 overflow-hidden justify-center  h-0 transition-all duration-300 flex-col gap-3 px-2 text-xl   flex`}>
              <span onClick={() => { dispatch(changeMode('black')) }} className={`hover:border-b-white border-b border-transparent cursor-pointer`}>Dark</span>
              <span onClick={() => { dispatch(changeMode('white')) }} className={`hover:border-b-white border-b border-transparent cursor-pointer`}>white</span>
            </div>
          </span>
          <span className={`max-[700px]:flex max-[700px]:justify-center group relative `}>Change Color

            <div style={{ backgroundColor: headerBg }} className={`absolute  px-3 gap-3 flex-col justify-center  right-0 w-50 h-0 group-hover:h-43.75 duration-500 overflow-hidden flex `}>
              <span onClick={() => { dispatch(changeheaderBg()) }} className={`cursor-pointer border-b border-transparent hover:border-white `}>Header BG</span>
              <span onClick={() => { dispatch(changeTitlebg()) }} className={`cursor-pointer border-b border-transparent hover:border-white `}>Title BG</span>
              <span onClick={() => { dispatch(changetitleColor()) }} className={`cursor-pointer border-b border-transparent hover:border-white `}>Title Color</span>

              <span onClick={() => { dispatch(changeSectionbg()) }} className={`cursor-pointer border-b border-transparent hover:border-white `}>Section BG</span>

            </div>
          </span>
        </div>
      </div>
    </header>
  )
}