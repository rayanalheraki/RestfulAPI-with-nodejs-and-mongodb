
data = [ { id: "1", name: "Nestle Quality Street Chocolate", price: "170", discountPrice: "145.95", image: "assets/images/Nestle Quality Street Chocolate.jpg_480Wx480H", isFavorite: false, shops: [ { name: "Carrefour", image: "assets/images/carrefour.jpg", price: "170", discountPrice: "145.95", }, { name: "Hyperone", image: "assets/images/hyperone.png", price: "172", },
    { name: "Spinneys", image: "assets/images/spinneys.png", price: "180", }, ], }, { id: "2", name: "Ahmed Tea Earl Grey", price: "88.95", discountPrice: null, image: "assets/images/Ahmad Tea Earl Grey Tea.jpg_480Wx480H", isFavorite: false, shops: [ { name: "Carrefour", image: "assets/images/carrefour.jpg", price: "90", }, { name: "Hyperone", image: "assets/images/hyperone.png", price: "88.95", }, ], },
    { id: "3", name: "Almarai Full Milk", price: "22.95", discountPrice: null, image: "assets/images/almarai.jpg_480Wx480H", isFavorite: false, shops: [ { name: "Carrefour", image: "assets/images/carrefour.jpg", price: "22.95", }, ], }, 
    { id: "4", name: "Amira Vegetable Ghee", price: "62.95", discountPrice: null, image: "assets/images/amira.jpg_480Wx480H", isFavorite: false, shops: [ { name: "Hyperone", image: "assets/images/hyperone.png", price: "63", },
    { name: "Spinneys", image: "assets/images/spinneys.png", price: "62.95", }, ], },
    { id: "5", name: "Cadbury Bubbly Chocolate", price: "22.45", discountPrice: null, image: "assets/images/Cadbury Bubbly Chocolate.jpg_480Wx480H", isFavorite: false, shops: [ { name: "Carrefour", image: "assets/images/carrefour.jpg", price: "22.45", },
    { name: "Hyperone", image: "assets/images/hyperone.png", price: "23", }, { name: "Spinneys", image: "assets/images/spinneys.png", price: "22.85", }, ], }, { id: "6", name: "Crystal Gold Vegetable Ghee", price: "64.55", discountPrice: null, image: "assets/images/Crystal.jpg_480Wx480H", isFavorite: false, shops: [ { name: "Spinneys", image: "assets/images/spinneys.png", price: "64.55", }, ], }, { id: "7", name: "Heinz Tomato Paste", price: "10.75", discountPrice: null, image: "assets/images/Heinz.jpg_480Wx480H", isFavorite: false, shops: [ { name: "Carrefour", image: "assets/images/carrefour.jpg", price: "10.75", }, { name: "Hyperone", image: "assets/images/hyperone.png", price: "12", }, { name: "Spinneys", image: "assets/images/spinneys.png", price: "11", }, ], }, { id: "8", name: "Juhayana Full Cream Milk", price: "15.70", discountPrice: null, image: "assets/images/juhayna.jpg_480Wx480H", isFavorite: false, shops: [ { name: "Carrefour", image: "assets/images/carrefour.jpg", price: "15.70", }, ], }, { id: "9", name: "Pampers", price: "160", discountPrice: null, image: "assets/images/Pampers.jpg_480Wx480H", isFavorite: false, shops: [ { name: "Hyperone", image: "assets/images/hyperone.png", price: "160", }, { name: "Spinneys", image: "assets/images/spinneys.png", price: "160.01", }, ], },]

const ds = {
    fetchProducts: ()=>{
        return data.map((p)=>{
            const product = Object.assign({},p);
            delete product.shops;
            return product;
        })
    },
    fetchProductsById: (productId)=>{
        return data.find(e => e.id==productId);
    }
};

module.exports = ds;