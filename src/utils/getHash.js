const getHash = () => 
    location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';

export default getHash;

//location.hash trae el fragmento de la url a partir de donde encuentre un #. En este caso traería #/1/
//location.hash trae el fragmento de la url a partir de donde encuentre un #. En este caso traería #/1/
//.toLocaleLowerCase() convierte a minúscula la cadena
//.split(’/’) separa la cadena en un array, y elimina el / quedando un espacio vacio Ej [’’, ‘1’ ,’’]
//[1] trae el primer elemento del split anterior que en este caso es 1 (representa la id 1)
//other option to gethash is
//location.hash.replace(/#\/(\d{1,2})\/?/, "$1").toLowerCase() || '/'