import { useState } from "react"

function AddItem(props){
    const[name,setName]=useState("")
    const[price,setPrice]=useState(0)
    return(
        <div className="form">
            <div className="inputs">
                <div className="namee">Name</div>
                <input type="text" name="Name"  value = {name} onChange={(e)=>setName(e.currentTarget.value)}/>
            </div>
            <div className="inputs">
                <div className="namee">Price</div>
                <input type="number" name="Name"  value={price} onChange={(e)=>setPrice(Number(e.currentTarget.value))}/>
            </div>
            <button className="btn btn-btn" onClick={()=>{props.addItem(name,price)}}>Add</button>
        </div>
    )
}

export default AddItem