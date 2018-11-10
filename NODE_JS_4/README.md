#Exercise 4

* Navigations in pages
* Default url navigation 
    - app.get("*", function(req,res){
        res.send("404 page");
    });
* Enable the folders with ASSETS 
    - app.use('/KERNEL_DOCS', express.static('KERNEL_DOCS')) //WORK!!! :'D
