const {v4: uuidv4} = require('uuid')
var cart = [] ; 

const cartDS= {
    addToCart: (cartItem)=>{
        const id=uuidv4();
        cartItem.id = id;
        cart.push(cartItem)
        return id;
    },
    fetchCartItems: ()=>cart,
    fetchCartItemById:(id)=> cart.find((item)=> item.id == id ),
    deleteCartItem: (id) => (cart=cart.filter((item)=>item.id != id)),
    deleteCartItems: ()=>{cart=[]},
    updateCartItem: (id,patchCartItem )=>{
        const existingItem = cart.find(item => item.id == id)
        if(existingItem != undefined)
        {
            const itemIdx = cart.findIndex((item)=>item.id == id);
            const newItem = {...existingItem, ...patchCartItem};
            cart[itemIdx] = newItem;
            return newItem;
        }
        return undefined;
    },
};

module.exports = cartDS;