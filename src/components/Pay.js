import React from 'react'
import "./Paymetn.css"

export const Pay = ({Logo3,background,Date,heading,subheadig,subheading2,subheading3,Logo2}) => {



    const con={
        width:'700px',
        margin:"auto",
        
        marginTop:"20px",
        padding:"20px",
        // background: background,
        borderRadius:'5px'

    }
    const con1={
        display:"flex",
        justifyContent:'space-between',
        fontSize:"18px",
        fontWeight:'600'
    }
    const con2={
        marginTop:"30px",
        border:"1px solid black",
        width:"fit-content",
        padding:"10px",
        background:"black",
        color:"white",
        fontSize:"18px",
        borderRadius:"5px",


    }
    const con3={
        marginTop:'10px',
        fontSize:'40px',
        fontWeight:'1000',
    }
  return (
    <div style={con}>
       <div style={con1}>
           <div>{Date}</div>
           <div>{Logo3}</div>
       </div>

       <div style={con2}>
         {subheadig}
       </div>
       <div style={con3}>
         {heading}
       </div>
       <div style={con3}>
         {subheading2}
       </div>

       <div style={con1}>
           <div>
          {subheading3}
           </div>
           <div>
          {Logo2}
           </div>

       </div>



    </div>
  )
}
