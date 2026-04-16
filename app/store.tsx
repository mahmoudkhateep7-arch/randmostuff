"use client";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { ReactNode } from "react";
import { Provider } from "react-redux";
const ray = ['green', 'red', 'gray', 'blue', 'paige', '#333', '#010101']
const gHex = () => {
  const hexStringArray = Math.random().toString(16).split('.')
  const strr = hexStringArray[1].slice(0, 6)
  return `#${strr}`
}
const newCol = () => { return `hsl(${Math.floor(Math.random() * 360)}, 70%, 50%)` }
const bgSlice = createSlice(
  {
    name: "bg",
    initialState:
    {
      headerBg: '#444',
      titlebg: '#444',
      sectionBg: 'gray',
      titleColor: '#fff',
      mode: 'white'
    },
    reducers: {
      changeheaderBg: (state) => {


        state.headerBg = `hsl(${Math.floor(Math.random() * 360)}, 70%, 50%)`

      },

      changeMode: (state, action) => {
        state.mode = action.payload
      },

      changeTitlebg: (state) => {
        state.titlebg = newCol()
      },

      changeSectionbg: (state) => {



        state.sectionBg = gHex()


      },
      changetitleColor: (state) => {

        state.titleColor = newCol()


      },

    }
  })

export const { changeSectionbg, changeTitlebg, changeheaderBg, changetitleColor, changeMode } = bgSlice.actions

const store = configureStore({
  reducer: {
    bgSlice: bgSlice.reducer
  }
})



export default function ReduxWrapper({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>{children}</Provider>
  )
}


export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


