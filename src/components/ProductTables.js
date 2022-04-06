import React, {useState, useEffect} from 'react';


function ProductTables(){

    const [ productsList, setProductsList ] = useState([]);

    useEffect(() =>  {
        fetch('/api/products')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setProductsList(data.products)
        })
    },[])

    let productsCount = {
        title: 'Total de productos',
        cuantity: productsList.length,
		allProducts: productsList
    }


	console.log(productsCount.allProducts);

    

    return(
                <div className="container-fluid card shadow mb-4 tall">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Titulo</th>
                                        <th>Descripción</th>
                                        <th>Precio</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        productsCount.allProducts.map( product => {
                                            return(
                                                <tr key={product.id}>
                                                    <td>{product.id}</td>
                                                    <td>{product.title}</td>
                                                    <td>{product.description}</td>
                                                    <td>{product.price}</td>
                                                </tr>	
                                            )
                                        })
                                    }
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>  
    )
}

export default ProductTables;