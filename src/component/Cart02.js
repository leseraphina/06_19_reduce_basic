import { useDispatch, useSelector } from "react-redux";
import { changeCouter } from "../store01";


function Cart02(){
  let state = useSelector((state) => state);
  let dispatch = useDispatch();
  console.log(state);
return (
  <div>
    <div>
      {state.counter}
      <p>
        <button onClick={ () => dispatch(changeCouter())}>
          click
        </button>
      </p>
      </div>
    <div>
    {  state.cart.map( item => (<li key={item.id}><dfn>{item.name}</dfn><span>{item.id}</span></li>))}
    </div>
  </div>
);
}


export default Cart02;