const fs = require("fs");
const path = require("path");

const getAll = () => JSON.parse(fs.readFileSync(path.join(__dirname, './products.json'),{encoding:"utf-8"}));


const Product = {

    getAll: () => JSON.parse(fs.readFileSync(path.join(__dirname, './products.json'), {
        encoding: "utf-8"
    })),

    findByPk: function (id) {
        const allProducts = this.getAll();
        const productFound = allProducts.find(oneProduct => oneProduct.id == id);
        return productFound;
    },

    generateId: function () {
        let allProducts = this.getAll();
        let lastProduct = allProducts.pop();
        if (lastProduct) {
            return lastProduct.id + 1;
        }
        return 1
    },

    create: function(productData){
    
          let allProducts = getAll();    
          
          let newProduct = {
            id: this.generateId(),
            ...productData
        };
    
          allProducts.push(newProduct);
          
          fs.writeFileSync(path.join(__dirname, './products.json'), JSON.stringify(allProducts, null, 2));
                return newProduct
    
        },
    
    update: function(givenID, productData){

        let allProducts = this.getAll();
        const productId = givenID;
        let indexProduct =  allProducts.findIndex(e => e.id == productId);
        
        //Modifico el producto
        allProducts[indexProduct] = {
          id: allProducts[indexProduct].id,
          ...productData,
        };    
        
        const stringProducto = JSON.stringify(allProducts, null, 2);
        fs.writeFileSync(path.join(__dirname, '../data/products.json'), stringProducto);
    

    },
    
    delete: function(givenID) {
        let allProducts = this.getAll();
            
        updatedProducts = allProducts.filter((x) => x.id != givenID)
            
        updatedProductsJSON = JSON.stringify(updatedProducts, null, 2);
            
        fs.writeFileSync(path.join(__dirname, '../data/products.json'), updatedProductsJSON);
        
    }
};

module.exports = Product;