import {useNavigate} from "react-router-dom"
export function StartPage(){
    const navigate = useNavigate();
    return <div>
        <button onClick={()=>navigate("/pc")}>login</button>
    </div>
}