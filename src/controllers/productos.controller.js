const querystring= require("querystring");  //sort de forma descendente ejemplo
const index= (req,res) => {
    const query= querystring.stringify(req.query);

    fetch("https://fakestoreapi.com/products?" + query)
  .then((res) => res.json())
  .then((productos) => 
    res.render("productos", {productos})) ;
   
};

const show = (req,res) => {
    fetch("https://fakestoreapi.com/products/"+req.params.id)
  .then((res) => res.json())
  .then((producto) => res.json(producto));
};

module.exports= {
    index,
    show,

}

//video 4 min 18