import blue_tshirt from './suraj.jpg'
import pink_sweater from './samjhana.jpg'
import black_coat from './sachin.jpg'
import black_hoodie from './suman.jpg'
import grey_kurtha from './sumina.jpg'
import white_floral from './white-floral.jpg'
import white_floral_st from './white-floral-st.jpg'
import white_tsg from './white-tshirtg.jpg'
import white_tsg_st from './white-tshirtg-st.jpg'
import whiteSneaker from './whiteSneaker.jpg'
import yellowsandel from './yellowsandel.jpg'
import logo from './logo.png'
import profile from './user.png'
import search from './search-interface-symbol.png'
import cart from './shopping-cart.png'
import clothes from './clothes.jpg'
  export const asset={
    blue_tshirt,
    pink_sweater,
    black_coat,
    black_hoodie,
    grey_kurtha,
    white_floral,
    white_floral_st,
    white_tsg,
    yellowsandel,
    whiteSneaker,
    logo,
    profile,
    search,
    cart,
    clothes
 }
 export const product = [
    {
        _id:'1aa',
        name:'Blue T-shirt',
        description:'A lightweighted, high quality t-shirt',
        price:499,
        image:[blue_tshirt],
        category:'Men',
        subCategory:'Topwear',
        sizes:["S","M","L"],
        date: 1673543535453,
        bestseller:true
    },
    {
        _id:'2aa',
        name:'Black Hoddie',
        description:'A lightweighted, high quality,warm Hoodie',
        price:999,
        image:[black_hoodie],
        category:'Men',
        subCategory:'Topwear',
        sizes:["S","M","L"],
        date: 1773543535453,
        bestseller:true
    },
    {
        _id:'3aa',
        name:'Black Coat',
        description:'A Stylish, high quality,perfect fitted Coat',
        price:2999,
        image:[black_coat],
        category:'Men',
        subCategory:'Topwear',
        sizes:["S","M","L"],
        date: 1873543535453,
        bestseller:true
    },
    {
        _id:'4aa',
        name:'Floral Onepiece',
        description:'A Stylish, high quality,perfect fitted floral clothes',
        price:999,
        image:[white_floral,white_floral_st],
        category:'Women',
        subCategory:'Topwear',
        sizes:["S","M","L"],
        date: 1223543535453,
        bestseller:true
    },
    {
        _id:'5aa',
        name:'White Plain T-shirt',
        description:'A Stylish, high quality,perfect fitted Plain T-shirt',
        price:499,
        image:[white_tsg,white_tsg_st],
        category:'Women',
        subCategory:'Topwear',
        sizes:["S","M","L"],
        date: 1333543535453,
        bestseller:true
    },
    {
        _id:'6aa',
        name:'Pink Sweater',
        description:'A Trendy, high quality Sweater',
        price:699,
        image:[pink_sweater],
        category:'Women',
        subCategory:'Topwear',
        sizes:["S","M","L"],
        date: 1973543535453,
        bestseller:false
    },
    {
        _id:'7aa',
        name:'Gray Kurtha',
        description:'A lightweighted, high quality Kurtha',
        price:1299,
        image:[grey_kurtha],
        category:'Women',
        subCategory:'Topwear',
        sizes:["S","M","L"],
        date: 2673543535453,
        bestseller:false
    },
    {
        _id:'8aa',
        name:'White Sneaker',
        description:'A lightweighted, high quality Sneaker',
        price:1299,
        image:[whiteSneaker],
        category:'Men',
        subCategory:'Footwear',
        sizes:["S","M","L"],
        date: 2673543535453,
        bestseller:true
    },
    {
        _id:'9aa',
        name:'Yellow Scandel',
        description:'A lightweighted, high quality Scandel',
        price:1199,
        image:[yellowsandel],
        category:'Women',
        subCategory:'Footwear',
        sizes:["S","M","L"],
        date: 2673543535453,
        bestseller:true
    }
 ]
