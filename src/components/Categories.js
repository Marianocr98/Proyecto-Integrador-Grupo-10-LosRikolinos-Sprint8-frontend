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
            {categoryName.length === 0 && <p>Cargando...</p>}
                <div className="col-lg-6 mb-4">						
			    	<div className="card shadow mb-4">
			    		<div className="card-header py-3">
			    			<h5 className="m-0 font-weight-bold text-gray-800">Categorias en Base de Datos</h5>
			    		</div>
			    		<div className="card-body">
			    			<div className="row">
                                {
                                    categoryName.map((category,index)=>{
                                        return 	(
                                            <div className="col-lg-6 mb-4" key={index}>
                                            <div className="card bg-dark text-white shadow">
                                            <div className="card-body">{category.join(" : ")}	</div>
                                            </div>
                                            </div>
                                        )
                                    })
                                }
			    			</div>
			    		</div>
			    	</div>
			    </div>
        </>
    )
}

export default Categories;