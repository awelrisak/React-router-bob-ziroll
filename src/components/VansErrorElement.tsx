import {
     
     useAsyncError,
     
} from "react-router-dom"

const VansErrorElement = () => {
      const error = useAsyncError();
      
     
      return (
           <h3 style={{textAlign: "center"}}>
           {error.message}
           </h3>
           );      
}

export default VansErrorElement