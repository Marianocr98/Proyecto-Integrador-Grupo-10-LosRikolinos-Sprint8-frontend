import React from 'react';

function Categories(props){   
    console.log(props)
    let categoryName = Object.keys(props.category)
    console.log(categoryName)

    return(
        <React.Fragment>
            {
                categoryName.map((category,index)=>{
                    return 	(
                        <div className="col-lg-6 mb-4" key={index}>
                        <div className="card bg-dark text-white shadow">
                        <div className="card-body">{category}</div>
                        </div>
                        </div>
                    )
                })
            }
        </React.Fragment>
    )
}

export default Categories;