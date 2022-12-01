import { useDispatch } from "react-redux";


const Step = ({number, action, className}) => {
  const dispatch = useDispatch()

  return (
    <div 
      className={className}
      onClick={() => dispatch({type: action})}
    >
      {number}
    </div>
  )
};

export default Step;