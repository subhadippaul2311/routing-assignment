import { BrowserRouter,Routes, Route } from "react-router-dom";
import {Home} from './Home'
import {Contact} from './Contact'

export function Routing(){
    return(
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
        </BrowserRouter>
    </div>
    )
}