
var shops = [ { id: "1", name: "Carrefour", image: "assets/images/carrefour.jpg", items: [ { name: "Juhayana Full Cream Milk", price: "15.70", image: "assets/images/juhayna.jpg_480Wx480H", }, { name: "Heinz Tomato Paste", price: "10.75", image: "assets/images/Heinz.jpg_480Wx480H", }, { name: "Nestle Quality Street Chocolate", price: "170", discountPrice: "145.95", image: "assets/images/Nestle Quality Street Chocolate.jpg_480Wx480H", }, ], }, { id: "2", name: "Hyperone", image: "assets/images/hyperone.png", items: [ { name: "Pampers", price: "160", image: "assets/images/Pampers.jpg_480Wx480H", }, { name: "Heinz Tomato Paste", price: "12", image: "assets/images/Heinz.jpg_480Wx480H", }, ], }, { id: "3", name: "Spinneys", image: "assets/images/spinneys.png", items: [ { name: "Pampers", price: "160.01", image: "assets/images/Pampers.jpg_480Wx480H", }, { name: "Heinz Tomato Paste", price: "11", image: "assets/images/Heinz.jpg_480Wx480H", }, ], },];

const ds = {
    fetchShops: (limit)=>shops.slice(0,limit) ,    
}

module.exports = ds ; 