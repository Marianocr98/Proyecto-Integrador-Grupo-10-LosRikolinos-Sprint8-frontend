import React, {Component} from 'react';


  function MovieList (props) {
      return(
    <tbody>

                                        <tr>
											<td>{props.id}</td>
											<td>{props.title}</td>
											<td>{props.description}</td>
                                            <td>{props.category}</td>
										</tr>
			</tbody>

      )
}
export default MovieList;