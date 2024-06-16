const login = (urlData,data) => {
    return ( 
        fetch(urlData,{
            Method:"POST",
        })
     );
}
 
export default login;