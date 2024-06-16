import { Link } from "react-router-dom";

const dashImmListe = ({Table}) => {
    return ( <>
      <div class="row">
                        <div class="col-md-12 m40">
                            <div class="message-box">
                                <h4>Liste batiment</h4>
                                <h2>Paiment API</h2>
                                <p>Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis vehicula enim, 
                                non aliquam risus. Sed a tellus quis mi honcus dignissim.</p>
                                
                                <table class="table text-center table-primary">
                                    <thead>
                                      <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Nom</th>
                                        <th scope="col">Localisation</th>
                                        <th scope="col">dimension</th>
                                        <th scope="col">dimension</th>
                                        <th scope="col">province</th>
                                        <th scope="col">Traitment</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                {
                                    Table.map((tables)=>{return(
                                        <>
                                         
                                      <tr>
                                        <th scope="row">{tables.id}</th>
                                        <td>{tables.nom}</td>
                                        <td>{tables.localis}</td>
                                        <td>{tables.dimension}</td>
                                        <td>{tables.status}</td>
                                        <td>{tables.province}</td>
                                        <td colspan="2"><Link to={`/Edit/${tables.id}`} className="btn btn-primary mr-2 pl-2 pr-2">Edit</Link><Link to={`/Sup/${tables.id}`} className="btn btn-danger">Sup</Link></td>
                                        
                                      </tr>
                                   
                                        </>
                                    )})
                                }
                                  </tbody>  
                                  </table>
                                
                            </div>
                        </div>                   
                    </div>
    </> );
}
export default dashImmListe;