import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = [
    {
      id: nanoid(8),
      active: true,
      inset: false,
      inputs: [
        {
          inputNumber: 1,
          name: "Horizontal offset",
          value: 0,
          type: "range",
          minMax: [-250,250]
        },
        {
          inputNumber: 2,
          name: "Vertical offset",
          value: 10,
          type: "range",
          minMax: [-250,250]
        },
        {
          inputNumber: 3,
          name: "Blur radius",
          value: 15,
          type: "range",
          minMax: [0,250]
        },
        {
          inputNumber: 4,
          name: "Spread offset",
          value: -3,
          type: "range",
          minMax: [-250,250]
        },
        {
          inputNumber: 5,
          name: "Color",
          value: "#4f4f4f",
          type: "color"
        },
      ],
    },
  ]
 
export const shadowSlice = createSlice({
    name: "shadows", 
    initialState,
    reducers: {
        removeShadow: (state, action) => {
            const shadowIndexToRemove = state.findIndex(shadow => shadow.id === action.payload)
            console.log(shadowIndexToRemove);
            state.splice(shadowIndexToRemove, 1)
            // console.log();
        },
        addShadow: (state, action) => {
            state.push(
              {
                id: nanoid(8),
                active: true,
                inset: false,
                inputs: [
                  {
                    inputNumber: 1,
                    name: "Horizontal offset",
                    value: 0,
                    type: "range",
                    minMax: [-250,250]
                  },
                  {
                    inputNumber: 2,
                    name: "Vertical offset",
                    value: 10,
                    type: "range",
                    minMax: [-250,250]
                  },
                  {
                    inputNumber: 3,
                    name: "Blur radius",
                    value: 15,
                    type: "range",
                    minMax: [0,250]
                  },
                  {
                    inputNumber: 4,
                    name: "Spread offset",
                    value: -3,
                    type: "range",
                    minMax: [-250,250]
                  },
                  {
                    inputNumber: 5,
                    name: "Color",
                    value: "#4f4f4f",
                    type: "color"
                  },
                ],
              },
            )
            // console.log(1);
          },
          updateShadowValue: (state, action) => {
            const currentShadow = state.find(
              shadow => shadow.id === action.payload.shadowId
            )
      
            const currentInput = currentShadow.inputs.find(
              input => input.inputNumber === action.payload.inputNumber
            )
      
            currentInput.value = action.payload.value
      
          },
        updateCheckBox: (state, action) => {
            const currentShadow = state.find(
                shadow => shadow.id === action.payload.shadowId
              )
              
              currentShadow[action.payload.name] = !currentShadow[action.payload.name]
        },
    }
})

export const {updateShadowValue, addShadow, updateCheckBox,
    removeShadow} = shadowSlice.actions
export default shadowSlice.reducer