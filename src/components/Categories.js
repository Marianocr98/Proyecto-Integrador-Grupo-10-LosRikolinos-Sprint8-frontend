import React, {useState, useEffect} from 'react';

function Categories(){

    const [ categoriesList, setCategoriesList ] = useState([])

    useEffect(()=>{
        fetch('/api/category')
        .then(respuesta =>{
        return respuesta.json()
        })
        .then(categoriesList =>{
        setCategoriesList(categoriesList.countByCategory)
        })
        .catch(error => console.log(error))
    },[])

    let categoryName = Object.entries(categoriesList)

    return(
        <>  
          
                			
			    	<div className="container card shadow mb-4">
                            <h2 className='text-users'>Todas las categorias</h2>
			    		<div className="card-body">
			    			<div className="comtainer-fluid">
                                <div className='row'>{
                                    categoryName.map((category,index)=>{
                                        return 	(
                                            <div className="col-lg-6 mb-4" key={index}>
                                            <div className="card bg-dark text-white shadow">
                                            <div className="card-body">{category.join(" : ")}	</div>
                                            </div>
                                            </div>
                                        )
                                    })
                                }</div>
                                
			    			</div>
			    		</div>
			    	</div>
			   
        </>
    )
}

export default Categories;