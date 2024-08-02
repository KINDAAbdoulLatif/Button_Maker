import { useDispatch, useSelector } from "react-redux"
import { updateCheckBox } from "../../features/shadow"

export default function ShadowCheckbox({name, shadowId}) {
    const checkboxShadow = useSelector(state => state.shadow.find(shadow => shadow.id === shadowId))
    
    console.log(checkboxShadow);
    const dispatch = useDispatch()
  return (
    <>
        <input
        onChange={()=> dispatch(updateCheckBox({shadowId, name}))}
         type="checkbox"
         className="h-4 w-4  border-gray-300 rounded mr-2"
         checked={checkboxShadow[name]}
          name="" id={`checkbox-${name}-${shadowId}`} />
        <label htmlFor={`checkbox-${name}-${shadowId}`}>
            {name.charAt(0).toUpperCase() + name.slice(1)}
        </label>
    </>
  )
}