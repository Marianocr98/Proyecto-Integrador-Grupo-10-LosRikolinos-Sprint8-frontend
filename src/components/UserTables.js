import React, {useState, useEffect} from 'react';
import '../assets/css/styleP.css'



function UserTables(){


    const [users,setUsers] = useState([]);

useEffect(()=>{
    fetch('/api/user')
    .then(respuesta =>{
    return respuesta.json()
    })
    .then(data =>{
    // console.log(users)
    // console.log(users.count)
console.log(data.users);

    setUsers(data.users)
    })
    .catch(error => console.log(error))
},[])



    return(
        <>  

            <div className="align container-fluid card shadow mb-4 tall">
                <h2 className='text-users'>Usuarios Registrados</h2>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                
                                
                                <thead>
                                    <tr>
                                        
                                        <th >Id</th>
                                        <th >Titulo</th>
                                                                            
                                    </tr>
                                </thead>
                                <tbody >
                                    
                                    {
                                        users.map( usuarios => {
                                            return(
                                                <tr key={usuarios.id}>
                                                    <td>{usuarios.id}</td>
                                                    <td>{usuarios.email}</td>
                                                    
                                                </tr>	
                                            )
                                        })
                                    } 
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>      
        
        </> 
        
						
        
                        
        
    )
}

export default UserTables;