import React, { useState } from 'react'



function Form() {
  
    const [text, settext] = useState("");
    const [items, setitems] = useState([])

  const updateText=(event)=>{
    settext(event.target.value)
  }

  const addToList=()=>{
    if(text!=="")
        setitems((oldItems)=>{ return [...oldItems,text]})
    else
        alert("please enter some text")
    settext("")
  }

  const FinishTask=(index)=>{
      let litem= document.getElementById(index)
      console.log(litem);
    //   litem.classList.add("disabled")
      litem.style.textDecoration="line-through"

    // setitems((oldValues)=>{
    //     return oldValues.filter((val,id)=>{return index!==id})
    // })
}

  const DeleteTask=(index)=>{
    console.log("task deleted"+ index);
    setitems((oldValues)=>{
        return oldValues.filter((val,id)=>{return index!==id})
    })
  }

  
    return (
    <>
        <form>
            <input type="text" placeholder='enter the task' onChange={updateText} value={text} />
            <button type="button" className='btn btn-primary mx-2' onClick={addToList}>add to list</button>
        </form>
        
        <ul className="list-group w-25">
            {/* <li>{text}</li> */}
            {items.map((item,index)=>{
                return (
                    
                <li key={index} id={index} className='list-group-item'>
                    
                    <div className='d-flex justify-content-between align-items-center'>
                    {item}
                        <div className='d-inline '>
                            <button type="button" onClick={()=>{FinishTask(index)}} className="mx-1 btn btn-outline-success w-20 h-45">Finished</button>
                            <button type="button" onClick={()=>{DeleteTask(index)}} className="mx-1 btn btn-outline-danger w-20 h-45">Remove</button>
                        </div>
                    </div>
                </li>
                )
            })}
        </ul>
    </>
  )
}

export default Form