import React, {Component} from 'react';

import imagenFondo from '../assets/images/parrillada.jpg'
import Categories from './Categories.js'
import Products from './Products.js'

class ContentRowTop extends Component{
	constructor(){
        super()

        this.state ={
			productsList : [],
			productsCount : "",
			userList :[],
			userCount : "",
			categoryList:[]

        }

        }
        componentDidMount(){
            fetch('/api/products')
            .then(respuesta =>{
            return respuesta.json()
            })
            .then(products =>{
            console.log(products)
			console.log(products.count)
			console.log(Object.getOwnPropertyNames(products.countByCategory))

            this.setState({
							productsList: products.products,
							productsCount : products.count
							})

            })
            .catch(error => console.log(error))

			fetch('/api/user')
            .then(respuesta =>{
            return respuesta.json()
            })
            .then(users =>{
            console.log(users)
			console.log(users.count)

            this.setState({	userList: users,
							userCount : users.count
							})
            })
            .catch(error => console.log(error))
            }
			
	
render(){
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
												{this.state.productsCount}
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
											<div className="h5 mb-0 font-weight-bold number text-gray-800">{}</div>
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
											{this.state.userCount}

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
									<div className="text-center">
										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 50 + 'rem'}} src={imagenFondo} alt=" "/>
									</div>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa citationem ratione aperiam voluptatum non corporis ratione aperiam voluptatum quae dolorem culpa ratione aperiam voluptatum?</p>
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
                                    this.state.productsList.map((product,index)=>{
                                        return  <Products  {...product}  key={index} />
                                    })
                                }

								</table>
							</div>
						</div>
					</div>  
        </React.Fragment>
    )
	}
}

export default ContentRowTop;