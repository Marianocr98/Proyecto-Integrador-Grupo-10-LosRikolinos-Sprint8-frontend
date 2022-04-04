import React, {useState, useEffect} from 'react';

import imagenFondo from '../assets/images/parrillada.jpg'
import Categories from './Categories.js'
import Products from './Products.js'


function ContentRowTop () {
/* 
        this.state ={
			productsList : [],
			productsCount : "",
			userList :[],
			userCount : "",
			categoryList:[],
			countTotal  :"",
			latestProduct : [],
			apiLast:"",
			productLast : []
        } */
		
/*         
        componentDidMount(){
            fetch('/api/products')
            .then(respuesta =>{
            return respuesta.json()
            })
            .then(products =>{
            console.log(products)
			console.log(products.count)
			let ultimo = products.products.pop()
			console.log(ultimo.detail)
            this.setState({
							productsList: products.products,
							productsCount : products.count,
							latestProduct : ultimo,
							apiLast: this.state.latestProduct.detail
							})
            })
            .catch(error => console.log(error))

			console.log(this.state.apiLast)
			fetch(this.state.apiLast)
            .then(respuesta => 
				{
					return respuesta.json()
				})
            .then(product =>{
            console.log(product)
            this.setState({
					productLast : product
					})
            })
            .catch(error => console.log(error))
 */


const [ productsList, setProductsList ] = useState([]);

    useEffect(() =>  {
        fetch('/api/products')
        .then(response => response.json())
        .then(data => {
            // console.log(data.products);
            setProductsList(data.count)
        })
    },[])

    let productsCount = {
        title: 'Total de productos',
        cuantity: productsList
    }


const [users,setUsers] = useState([])
useEffect(()=>{
    fetch('/api/user')
    .then(respuesta =>{
    return respuesta.json()
    })
    .then(users =>{
    console.log(users)
    console.log(users.count)

    setUsers(users)
    })
    .catch(error => console.log(error))
},[])
			

const [categories,setCategories] = useState([])
const [categoriesList,setCategoriesList] = useState([])

useEffect(()=>{
    fetch('/api/category')
    .then(respuesta =>{
    return respuesta.json()
    })
    .then(categories =>{
    console.log(categories.data)
    console.log(categories.countTotal)

    setCategories(categories)
    })
    .catch(error => console.log(error))
},[])

useEffect(()=>{
    fetch('/api/category')
    .then(respuesta =>{
    return respuesta.json()
    })
    .then(categoriesList =>{
    console.log(categoriesList.countByCategory)

    setCategoriesList(categoriesList.countByCategory)
    })
    .catch(error => console.log(error))
},[])


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

console.log(categoriesList)

 /* 
			fetch('/api/category')
            .then(respuesta =>{
            return respuesta.json()
            })
            .then(categories =>{
            console.log(categories.data)
			console.log(categories.countTotal)

            this.setState({	categoryList: categories.data,
							countTotal: categories.countTotal
							})
            })
            .catch(error => console.log(error))
            }
			 */
	
    return(
        <React.Fragment>
            {/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
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
						<div className="col-md-4 mb-4">
							<div className="card border-left-warning shadow h-100 py-2">
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Usuarios en Base de Datos
											</div>
											<div className="h5 mb-0 font-weight-bold number text-gray-800">
											{users.count}

											</div>
										</div>
										
									</div>
								</div>
							</div>
						</div>
					</div>
	
					{/*<!-- Content Row Last Product in Data Base -->*/}
					<div className="row">
						{/*<!-- Last Product in DB -->*/}
						<div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Último producto en Base de Datos</h5>
								</div>
								
								  <div className="card-body">
									  <p>{
                                   lastProduct.title
                                }</p>
									<div className="text-center">
										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 50 + 'rem'}} src={imagenFondo} alt=" "/>
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
						<div className="col-lg-6 mb-4">						
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Categorias en Base de Datos</h5>
								</div>
								<div className="card-body">
									<div className="row">

															{
																	  <Categories category = {categoriesList}  />
															}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/*<!--End Content Row Top-->*/}
								    {/*<!-- PRODUCTS LIST -->*/}
									<h1 className="h3 mb-2 text-gray-800">Todos los productos en la Base de Datos</h1>
					
					{/*<!-- DataTales Example -->*/}
					<div className="card shadow mb-4">
						<div className="card-body">
							<div className="table-responsive">
								<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
									<thead>
										<tr>
                                            <th>Id</th>
                                            <th>Titulo</th>
                                            <th>Descripción</th>
                                            <th>Categoria</th>
										</tr>
									</thead>
									<tfoot>
{/* 										<tr>
                                            <th>Id</th>
                                            <th>Titulo</th>
                                            <th>Calificación</th>
                                            <th>Premios</th>
                                            <th>Duración</th>
										</tr> */}
									</tfoot>
										
										{
                                   
                                }

								</table>
							</div>
						</div>
					</div>  
        </React.Fragment>
    )
	
}

export default ContentRowTop;