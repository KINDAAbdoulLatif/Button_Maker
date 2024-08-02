import { useState, useEffect } from "react"
import Chevron from "../../assets/chevron.svg"
import ShadowRange from "./ShadowRange"
import ShadowColorPicker from "./ShadowColorPicker"
import ShadowCheckbox from "./ShadowCheckbox"
import { removeShadow } from "../../features/shadow"
import { useDispatch } from "react-redux"

export default function Shadow({panelNumber, shadow}) {
    const [toggleShadow, setToggleShadow] = useState(true)
    const dispatch = useDispatch()
    useEffect(()=>{
        if(panelNumber === 1){
            setToggleShadow(true)
        }
    }, [])
    const shadowInputs = shadow.inputs.map((input, index) => {
        if(input.type === "range") {
          return <ShadowRange 
          key={index} 
          inputData={shadow.inputs[index]} 
          shadowId={shadow.id}
          />
        }
        else if(input.type === "color") {
          return <ShadowColorPicker 
          key={index} 
          inputData={shadow.inputs[index]} 
          shadowId={shadow.id}
          />
        }
      })
  return (
    <li className="bg-gray-50 border-b
    border-gray-3">
        <button
         className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-100"
         onClick={()=> setToggleShadow(!toggleShadow)}>
            <span>Shadow {panelNumber}</span>
            <img
            style={{transform: `${toggleShadow ? "rotate(90deg)" : "rotate(0deg)"}`}} src={Chevron} alt="" />
        </button>
        {toggleShadow && <>
            <div className="flex items-end px-6 py-4">
              <ShadowCheckbox name={"active"} shadowId={shadow.id} /> 
              <ShadowCheckbox name={"inset"} shadowId={shadow.id} />
                <button
                  onClick={()=> dispatch(removeShadow(shadow.id))}
                  className="ml-auto text-sm bg-red-600 text-white
                 hover:bg-red-700 py-1 px-3 rounded ">Remove</button>
            </div>
            <div className="px-6 py-4">
                {shadowInputs}
            </div>
        </>}
    </li>
  )
}