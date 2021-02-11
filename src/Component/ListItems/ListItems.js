import React from 'react'

const ListItems = ({listitems,handleDelete}) => {
    
    return (
        <div>
            <ul>
            {listitems.map((el,i)=>(
                
                    <li>{el}<button onClick={()=>handleDelete(i)} >delete</button></li>
                    
            
            )
            )
            
            }                </ul>

           
        </div>
    )
}

export default ListItems
