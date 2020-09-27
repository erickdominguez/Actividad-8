

 const bienvenute = () =>{
    var gen1=document.getElementById('gen').value;
    var nom1=document.getElementById('nom').value;
    (gen1=='Hombre')?  tot=`Bienvenido ${nom1}`:tot=`Bienvenida ${nom1}`;
    return tot;
    }
    