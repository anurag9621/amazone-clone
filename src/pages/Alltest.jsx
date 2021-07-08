import React from 'react'
import AllsliderA from "../component/AllsliderA"
import Imga from "../img/all1.jpg"
import Imgb from "../img/all2.jpg" 
import Imgc from "../img/all3.jpg" 
import Imgd from "../img/all4.jpg" 
import Imge from "../img/all5.jpg" 
import Imgf from "../img/all6.jpg" 
import Imgg from "../img/all7.jpg" 
import Imgh from "../img/all8.jpg" 
import Imgi from "../img/all9.jpg" 

function Alltest() {
    return (
        <div>
            <AllsliderA
                img1={ Imga}
            img2={Imgb}
            img3={Imgc}
            img4={Imgh}
            img5={Imgd}
            img6={Imge}
            img7={Imgf}
            img8={Imgg}
            img9={Imgi}
                
            
            
            
            />
        </div>
    )
}

export default Alltest
