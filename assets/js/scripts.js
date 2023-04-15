const consultaComida =() =>{
     // extraer el nombre proporcionado
     let nombreParaConsultar = document.getElementById('nombreProporcionado').value;
    // configuramos el endpoint a consultar concatenando el endpoint original con el nombre proporcionado
    let endpoint = 'https://www.themealdb.com/api/json/v1/1/search.php?s='+nombreParaConsultar;
    fetch(endpoint)
    .then(respuestaComida => respuestaComida.json())
    .then (datoPlato =>{
        console.log(datoPlato);
        console.log(datoPlato.meals[0].strMeal);
        
        let nombreRecuperado = datoPlato.meals[0].strMeal;
        let categoriaRecuperada = datoPlato.meals[0].strCategory;
        let areaRecuperada = datoPlato.meals[0].strArea;
        let imagenRecuperada = datoPlato.meals[0].strMealThumb;
        let recetaRecuperada = datoPlato.meals[0].strInstructions; 

        let etiquetaNombre = document.getElementById('nombreComida');
        etiquetaNombre.innerHTML = nombreRecuperado;

        let etiquetaCategoria = document.getElementById('categoriaComida');
        etiquetaCategoria.innerHTML = categoriaRecuperada;
        
        let etiquetaArea = document.getElementById('areaComida');
        etiquetaArea.innerHTML = areaRecuperada;

        let etiquetaImagen = document.getElementById('imagenComida');
        etiquetaImagen.src = imagenRecuperada;

        let etiquetaReceta = document.getElementById('recetaComida');
        etiquetaReceta.innerHTML = recetaRecuperada;

    });
}