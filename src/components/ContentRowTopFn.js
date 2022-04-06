import React, {useState, useEffect} from 'react';


import Categories from './Categories.js'
import LastProduct from './LastProduct';
import ProductTables from './ProductTables.js';
import UserTables from './UserTables';



function ContentRowTop () {


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

const [users,setUsers] = useState([]);

useEffect(()=>{
    fetch('/api/user')
    .then(respuesta =>{
    return respuesta.json()
    })
    .then(users =>{
    // console.log(users)
    // console.log(users.count)

    setUsers(users)
    })
    .catch(error => console.log(error))
},[])
			

const [categories,setCategories] = useState([])

useEffect(()=>{
    fetch('/api/category')
    .then(respuesta =>{
    return respuesta.json()
    })
    .then(categories =>{
    	setCategories(categories)
    })
    .catch(error => console.log(error))
},[])



	
    return(
        <React.Fragment>
            {/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 className="	 h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Products-->*/}
					<div className="row">

						{/*<!-- Productos en DB -->*/}
						<div className="col-md-4 mb-4">
							<div className="card border-left-primary shadow h-100 py-2">
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Productos en Base de Datos</div>
											<div className="h5 mb-0 font-weight-bold number text-gray-800">
												{productsCount.cuantity}
												</div>
										</div>
									</div>
								</div>
							</div>
						</div>

                        {/*<!-- Categorias en DB -->*/}
						<div className="col-md-4 mb-4">
							<div className="card border-left-primary shadow h-100 py-2">
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Categorias en Base de Datos</div>
											<div className="h5 mb-0 font-weight-bold number text-gray-800">
															{categories.countTotal}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/*<!-- Usuarios en DB -->*/}
						<div className=" col-md-4 mb-4">
							<div className="card border-left-primary shadow h-100 py-2">
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Usuarios en la Base de Datos</div>
											<div className="h5 mb-0 font-weight-bold number text-gray-800">
															{users.count}
															{users.email}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{<LastProduct/>}
	
					{/*<!-- Content Row Last Product in Data Base -->*/}
				
					{ <Categories /> }
				
						{/*<!--End Content Row Top-->*/}
								{/*<!-- PRODUCTS LIST -->*/}
									<h2 className="h3 mb-2 text-gray-800">Todos los productos en la Base de Datos</h2>
					
							{/*<!-- DataTales Example -->*/}
							
							{<ProductTables/>}
				</div>

        </React.Fragment>
    )
	
}

export default ContentRowTop;