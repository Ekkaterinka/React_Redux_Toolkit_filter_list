import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filter} from '../reduxToolkit/slices'
import { useState } from "react";

function List() {
  const counter = useSelector((state) => state.data.value);
  const state = useSelector((state) => state.data.list);
  const [number, setNumber] = useState(0)
  const dispatch = useDispatch();

  const handleCounter = (e) => {
    setNumber(e.target.value)
    dispatch(filter(number));
  };

  const filterList = state.filter((e) => e.id === counter)

  return (
    <div>
      <input type="number" min='1' max='5' value={number} onChange={handleCounter}/>
      {counter > 0 ? filterList.map((e) => 
        (<div key={e.id}> <li>{e.title}</li> </div> ) ) : null}
    </div>
  );
}

export default List;
