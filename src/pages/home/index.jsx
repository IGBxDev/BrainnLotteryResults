
import './index.css'

import { getLottery } from '../../services/apiLottery'
import { useEffect, useState } from 'react'

const Home = () => {
    const [lottery, setLottery] = useState([])

    useEffect(() => {
        getAllLottery();
    },[])

    const getAllLottery = async () => {
        await getLottery()
        .then((response)=>{
            setLottery(response) 
        })
        .catch((error)=>{ console.log("não foi possível pegar os dados", error )})        
    }
    
    console.log("lottery: ", lottery[0])
    
    return(
        <div className="main-container">
            <div className='sidebar'>
                {
                    lottery?.map((item, index) => { return(<span key={item[index].id}>{item[index].nome}</span>)})
                }                
            </div>

            <div className='right-container'>

            </div>
        </div>
    )

}

export default Home