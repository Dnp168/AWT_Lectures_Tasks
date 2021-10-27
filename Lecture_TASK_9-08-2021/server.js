const  express  =  require('express');
	const  app  =  express();
	const  fs  =  require('fs'); 
	const  data  =  fs.readFileSync(   dirname  +  '/data.json');
	const  dataObj  =  JSON.parse(data); 
	const  tempDashboard  =  fs.readFileSync(`${   dirname}/templates/dashboard
.html`,'utf-8');
	const  tempCard  =  fs.readFileSync(`${   dirname}/templates/card.html`,'ut f-8');
	const  tempProduct  =  fs.readFileSync(`${   dirname}/templates/product.htm l`,'utf-8');
	
	
	const  replaceTemplate  =  (temp,  product)  =>  {
	let  output  =  temp.replace('{%PRODUCTNAME%}',  product.name);
	output  =  output.replace('{%TYPE%}',  product.type);
	output  =  output.replace('{%PRICE%}',  product.price);
	output  =  output.replace('{%QUANTITY%}',  product.quantity);
	output  =  output.replace('{%DESCRIPTION%}',  product.description);
	output  =  output.replace('{%DISCOUNT%}',  product.discount);
	output  =  output.replace('{%ID%}',  product.id);
	output  =  output.replace('{%IMAGE%}',  product.image);
	if  (product.discount  !=  20)  {
	output  =  output.replace('{%ID2%}',  product.id);
	output  =  output.replace('{%ID1%}',  product.id);
	}
	console.log(output);
	return  output;
} 
	app.get('/',(req,res)=>{
	const  cards  =  dataObj.map(product=>(
	replaceTemplate(tempCard,  product) 	))
    const  dashboard  =  tempDashboard.replace('{%CARDS%}',cards);
    	res.end(dashboard); 39.})
    
    	app.get('/default',(req,res)=>{
    	const  cards  =  dataObj.map(product=>(
    	replaceTemplate(tempCard,  product)	))
    	const  dashboard  =  tempDashboard.replace('{%CARDS%}',cards);
    	res.end(dashboard); 47.})
    
    	app.get('/api',(req,res)=>{
    	res.json(dataObj) })
    
    app.get('/product',(req,res)  =>  {
    	const  id  =  req.query.id;
    	var  productHTML,c=0;
    	const  product  =  dataObj.map((product)  =>  {
    	if  (product.id  ==  id)  {
    	productHTML  =	replaceTemplate(tempProduct,  product) ++;
    	}
    	})
    	if (c==0) {
    	res.send('Product  Not  Found  !!');
    	} else {
    	res.end(productHTML);
    	}
    });
    
    	app.use(function(req,res){
    	res.status(404).send('page  not  found'); 71.});
        app.listen(3333,()=>{
        	console.log("server  running  on  port  3333"); })
            