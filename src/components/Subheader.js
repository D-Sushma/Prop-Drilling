import React from 'react'
import './Subheader.css'

// 8. propdrilling--> recieve data var from app.js & subdata var from header.js through destructure------
export default function Subheader({subData}) {
    console.log(subData);

    // 10. propdrilling--> make variable and access in subheader.js
    let bestSeller ="--BestSeller"
    
    return (
        //  <!-- SUBHEADER START --> 
        < div className="subheader" >

            {/* 9. access variable-------------------- */}
            {subData.data.test}

            <div>All {subData.data.name}</div>
            <div>Shirt {subData.shirt}</div>
            <div>Pant {subData.pant}</div>
            {/* 11. access bestSeller variable */}
            <div>Best Sellers{bestSeller}</div>
            <div>Mobiles</div>
            <div>Customer Service</div>
            <div>Fashion</div>
            <div>Electronics</div>
            <div>Rents</div>
            <div>Service</div>
            <div>Prime</div>
        </div >

        //  <!-- SUBHEADER END -->
    )
}
