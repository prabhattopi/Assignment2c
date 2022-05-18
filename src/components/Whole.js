import React from 'react'
import { Payment } from "./Payment";
import { Pay } from "./Pay";

export const Whole = () => {

    const Logo=<i className="fa-brands fa-amazon"></i>,
    Logo3=<i className="fa-brands fa-apple"></i>,
    background=`rgb(244, 180, 6)`
     const date="12/03/22",
     heading="  Amazon Gift ",
     subheadig="Case Study",
     subheading2="Pay",
     subheading3="Desktop-Mobile",
     Logo2= <i className="fa-solid fa-arrow-right"></i>
     const Heading2="Apple Gift"


  return (
    <div>
    <Payment Logo={Logo} background={background} Date={date} heading={heading} subheadig={subheadig} subheading2={subheading2} subheading3={subheading3} Logo2={Logo2}/>



    <Payment Logo={Logo} background={background} Date={date} heading={heading} subheadig={subheadig} subheading2={subheading2} subheading3={subheading3} Logo2={Logo2}/>



    <Pay Logo3={Logo3} background={background} Date={date} heading={Heading2} subheadig={subheadig} subheading2={subheading2} subheading3={subheading3} Logo2={Logo2}/>
   
  


    </div>
  )
}
