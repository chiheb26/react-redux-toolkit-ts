import React from 'react'
//import { useSelector, useDispatch } from 'react-redux'
import { useAppSelector,useAppDispatch } from '../../app/hooks'
import { ordered,restocked } from './iceCreamSlice'
export const IceCreamView = () => {
  const numOfIceCreams = useAppSelector(state=>state.iceCream.numOfIceCreams)
  const dispatch= useAppDispatch()
  const [value, setValue] = React.useState(1)
  return (
    <div>
        <h2>Number of IceCreams - {numOfIceCreams}</h2>
        <button onClick={()=>dispatch(ordered())}>Order IceCream</button>
        <input type='number' value={value} onChange={e=> setValue(parseInt(e.target.value))} />
        <button onClick={()=>dispatch(restocked(value))}>Restock IceCreams</button> 
    </div>
  )
}
