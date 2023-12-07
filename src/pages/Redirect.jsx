import  {useEffect} from 'react'
import { Navigate, useNavigate,useParams } from 'react-router-dom'
function Redirect() {
    let {id} = useParams()

    useEffect(()=>{
        const redirect = () => {
            window.location.replace('https://www.google.com');
          };
      
          redirect();
          return null;
    },[])
  return (
    <div>
      
    </div>
  )
}

export default Redirect
