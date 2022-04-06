import React, {useState, useEffect} from 'react';
import '../assets/css/app.css'


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
					
						<h1 className="title-rikolinos">The Rikolinos International</h1>
					
				
					{/*<!-- Content Row Products-->*/}
					<div className="row">

						{/*<!-- Productos en DB -->*/}
						<div className="col-md-4 mb-4">
							<div className="card   ">
								<div className="card-body">
									
										<div className="col mr-2">
											<div className="text-p text-xs font-weight-bold text-primary text-uppercase mb-1">Productos en Base de Datos</div>
											<div className="products">
												{productsCount.cuantity}
												</div>
										</div>
									
								</div>
							</div>
						</div>

                        {/*<!-- Categorias en DB -->*/}
						<div className="col-md-4 mb-4">
							<div className="card ">
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div className="text-p text-xs font-weight-bold text-primary text-uppercase mb-1">Categorias en Base de Datos</div>
											<div className="products">
															{categories.countTotal}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/*<!-- Usuarios en DB -->*/}
						<div className=" col-md-4 mb-4">
							<div className="card ">
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div className="text-p text-xs font-weight-bold text-primary text-uppercase mb-1">Usuarios en la Base de Datos</div>
											<div className="products">
															{users.count}
															
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
								
					
							{/*<!-- DataTales Example -->*/}
							
							{<ProductTables/>}

							{/* TABLA DE USUARIOS */}
							<UserTables/>
				</div>

        </React.Fragment>
    )
	
}

export default ContentRowTop;