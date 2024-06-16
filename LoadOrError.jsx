const loadOrError = ({ispending}) => {
    return ( <div className=" text-center m-3  d-flex justify-content-center "><h3 className="text-danger">{(ispending!=true)?"Une erreurs s\'est produit ou les informations ne pas encore disponible, veuillez verifiez votre connexion:!":"loading..."}</h3></div> );
}
 
export default loadOrError;