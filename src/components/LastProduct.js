import React, {useState, useEffect} from 'react';


function LastProduct(){
    const [lastProduct,setLastProduct] = useState([]);

useEffect(()=>{

    fetch('/api/products')
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(setLastProduct);
        setLastProduct(data.products.pop())
    })

},[])

    return(
        
        <>
                <div className="container">


                    {/*<!-- Last Product in DB -->*/}
                 <div className="col-lg-12 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold text-gray-800">Último producto en Base de Datos</h5>
                        </div>
                        
                        <div className="card-body">
                            <p>{
                        lastProduct.title
                        }</p>
                            <div className="text-center">
                                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 20+ 'rem'}} src={`${process.env.PUBLIC_URL}/images/heineken.jpeg`}  alt=" "/>
                            </div>
                            
                            <p>{
                    lastProduct.description
                        }</p>
                        <p>
                        ID : {lastProduct.id}
                        </p>
                            <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver detalle de producto</a>
                        </div>

                    </div>
                </div> 
                {/*<!-- End content row last product in Data Base -->*/}

                {/*<!-- Categorias en DB -->*/}

            
        
                </div>
        </>

      
    )
}

export default LastProduct;