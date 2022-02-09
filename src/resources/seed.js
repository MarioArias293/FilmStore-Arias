
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtRwoacCFuynD9C53lQPnVHZFIIh4Eg7g",
  authDomain: "filmstore-arias.firebaseapp.com",
  projectId: "filmstore-arias",
  storageBucket: "filmstore-arias.appspot.com",
  messagingSenderId: "951862115947",
  appId: "1:951862115947:web:c517f358a682914db2bb2e",
  measurementId: "G-YXR5DC8DGL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 const db = getFirestore(app);
const itemsDetailMock = [{
    
    title: 'Kodak Color Plus ',
    price: 30000,
    urls: ["https://m.media-amazon.com/images/I/512whCXmlkL._AC_SS450_.jpg",
        "https://almacolor.com.co/wp-content/uploads/2021/06/Captura-de-pantalla-2021-06-25-a-las-12.08.51.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4cO-vyg0QhWXcxkKbgqUYsoJTdObRQ3vBJ2QLqjqkYTQ-qhBUmml-4YY7qbVKggrc00g&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST36Ychuxcdzax-q3M4TbwThpD6EvSCAmZ4w&usqp=CAUaw",],
    stock: 10,
    category: "pelicula",
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsam vitae suscipit iste, nam in commodi porro corrupti est ex magnam illo saepe cum. Aut consequuntur modi dolorum atque commodi  Perferendis debitis, numquam eaque explicabo accusantium modi iusto pariatur laudantium facere et doloremque ex doloribus minima, obcaecati laborum blanditiis laboriosam quas nihil accusamus expedita totam aliquam tempora animi eligendi. Dolor.  Incidunt delectus doloremque animi beatae architecto et aliquid ullam, amet, odit, recusandae distinctio placeat nam molestias vitae eligendi? Neque, tempore ipsum repellat maxime eos provident deleniti quos delectus aspernatur amet'
},
{
    
    title: 'Fujicolor C200',
    price: 35000,
    urls: ["https://ae01.alicdn.com/kf/Hf8575392410649dea24fd524a2d89f0e7.jpg?width=800&height=800&hash=1600",
        "https://cdn.shopify.com/s/files/1/0348/9657/6652/products/Fujicolor_600x600.jpg?v=1610044741",
        "https://cdn.shopify.com/s/files/1/0348/9657/6652/products/Fujicolor_600x600.jpg?v=1610044741",],
    stock: 10,
    category: "pelicula",
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsam vitae suscipit iste, nam in commodi porro corrupti est ex magnam illo saepe cum. Aut consequuntur modi dolorum atque commodi  Perferendis debitis, numquam eaque explicabo accusantium modi iusto pariatur laudantium facere et doloremque ex doloribus minima, obcaecati laborum blanditiis laboriosam quas nihil accusamus expedita totam aliquam tempora animi eligendi. Dolor.  Incidunt delectus doloremque animi beatae architecto et aliquid ullam, amet, odit, recusandae distinctio placeat nam molestias vitae eligendi? Neque, tempore ipsum repellat maxime eos provident deleniti quos delectus aspernatur amet'
},
{
    
    title: 'IlFord Hp5+',
    price: 32000,
    urls: ["https://www.bhphotovideo.com/images/images2500x2500/Ilford_1574577_HP5_Plus_135_36_Black_24744.jpg",
        "https://i0.wp.com/walkens.com.au/wp-content/uploads/2020/04/20200424_152313-scaled.jpg?fit=2560%2C2560&ssl=1",
        "https://www.tripodfoto.com/ProductImages/97104/original/ilford-hp5-plus-135-36.jpg",],
    stock: 10,
    category: "pelicula",
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsam vitae suscipit iste, nam in commodi porro corrupti est ex magnam illo saepe cum. Aut consequuntur modi dolorum atque commodi  Perferendis debitis, numquam eaque explicabo accusantium modi iusto pariatur laudantium facere et doloremque ex doloribus minima, obcaecati laborum blanditiis laboriosam quas nihil accusamus expedita totam aliquam tempora animi eligendi. Dolor.  Incidunt delectus doloremque animi beatae architecto et aliquid ullam, amet, odit, recusandae distinctio placeat nam molestias vitae eligendi? Neque, tempore ipsum repellat maxime eos provident deleniti quos delectus aspernatur amet'
},
{
    
    title: 'Catlabs 320',
    price: 40000,
    urls: ["https://www.bhphotovideo.com/images/images500x500/catlabs_catlabs_x_film_320_35mm_x_film_iso_1477686.jpg",
        "https://cf.shopee.co.th/file/5de4ab303aeed1a6e78029daaf2b04db",],
    stock: 10,
    category: "pelicula",
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsam vitae suscipit iste, nam in commodi porro corrupti est ex magnam illo saepe cum. Aut consequuntur modi dolorum atque commodi  Perferendis debitis, numquam eaque explicabo accusantium modi iusto pariatur laudantium facere et doloremque ex doloribus minima, obcaecati laborum blanditiis laboriosam quas nihil accusamus expedita totam aliquam tempora animi eligendi. Dolor.  Incidunt delectus doloremque animi beatae architecto et aliquid ullam, amet, odit, recusandae distinctio placeat nam molestias vitae eligendi? Neque, tempore ipsum repellat maxime eos provident deleniti quos delectus aspernatur amet'
},
{
    
    title: 'Lomochrome Purple',
    price: 55000,
    urls: ["https://www.bhphotovideo.com/images/images750x750/lomography_f436lc19_lomochrome_purple_xr_100_400_1517817.jpg",
        "https://r.btcdn.co/r/eyJzaG9wX2lkIjoyNSwiZyI6IjEwMDB4In0/588cf6483018ea6/471156-2.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAaR_GXK65A_zFgsC33W-szZTP2Sxzlm_CEw&usqp=CAU",],
    stock: 10,
    category: "pelicula",
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsam vitae suscipit iste, nam in commodi porro corrupti est ex magnam illo saepe cum. Aut consequuntur modi dolorum atque commodi  Perferendis debitis, numquam eaque explicabo accusantium modi iusto pariatur laudantium facere et doloremque ex doloribus minima, obcaecati laborum blanditiis laboriosam quas nihil accusamus expedita totam aliquam tempora animi eligendi. Dolor.  Incidunt delectus doloremque animi beatae architecto et aliquid ullam, amet, odit, recusandae distinctio placeat nam molestias vitae eligendi? Neque, tempore ipsum repellat maxime eos provident deleniti quos delectus aspernatur amet'
},
{
    
    title: 'Kodak Portra 400',
    price: 50000,
    urls: ["https://www.bhphotovideo.com/images/images2000x2000/Kodak_8331506_120_Professional_Portra_400_742299.jpg",
        "https://cdn11.bigcommerce.com/s-9k5t8yfu46/images/stencil/1280w/products/118/1091/KodakPortra400_35mm__02351.1515852564.JPG",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQDrWPk1dMGHeCDV9588XRSRQexOdOdchvjTd9F_jNzgoVj4GXQUPMfY5kePYUlRDAsmc&usqp=CAU",],
    stock: 10,
    category: "pelicula",
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsam vitae suscipit iste, nam in commodi porro corrupti est ex magnam illo saepe cum. Aut consequuntur modi dolorum atque commodi  Perferendis debitis, numquam eaque explicabo accusantium modi iusto pariatur laudantium facere et doloremque ex doloribus minima, obcaecati laborum blanditiis laboriosam quas nihil accusamus expedita totam aliquam tempora animi eligendi. Dolor.  Incidunt delectus doloremque animi beatae architecto et aliquid ullam, amet, odit, recusandae distinctio placeat nam molestias vitae eligendi? Neque, tempore ipsum repellat maxime eos provident deleniti quos delectus aspernatur amet'
},
{
   
    title: 'Fujicolor Natura 1600 ',
    price: 100000,
    urls: ["https://carmencitafilmlab.com/wp-content/uploads/Natura-.jpg",
        "https://cf.shopee.vn/file/0db33f77725b6815514945474bc01115",
        "https://cdn.shopify.com/s/files/1/0502/4346/9476/products/DSF3745_740x.png?v=1628132057",],
    stock: 10,
    category: "pelicula",
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsam vitae suscipit iste, nam in commodi porro corrupti est ex magnam illo saepe cum. Aut consequuntur modi dolorum atque commodi  Perferendis debitis, numquam eaque explicabo accusantium modi iusto pariatur laudantium facere et doloremque ex doloribus minima, obcaecati laborum blanditiis laboriosam quas nihil accusamus expedita totam aliquam tempora animi eligendi. Dolor.  Incidunt delectus doloremque animi beatae architecto et aliquid ullam, amet, odit, recusandae distinctio placeat nam molestias vitae eligendi? Neque, tempore ipsum repellat maxime eos provident deleniti quos delectus aspernatur amet'
},
{
    
    title: 'Kodak ProImage 100',
    price: 35000,
    urls: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwdszy2dTpms55Q9wQmcZDcdliKR4fiiNsIm3I2IXcRuIJOD7ngG8neGjXYnfkzIhmhxQ&usqp=CAU",
        "https://www.bhphotovideo.com/images/images2500x2500/kodak_6034466_kodak_proimage_100_135_36_1476367.jpg",
        "https://nzcamera.co.nz/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/r/pro_image.jpg",],
    stock: 10,
    category: "pelicula",
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsam vitae suscipit iste, nam in commodi porro corrupti est ex magnam illo saepe cum. Aut consequuntur modi dolorum atque commodi  Perferendis debitis, numquam eaque explicabo accusantium modi iusto pariatur laudantium facere et doloremque ex doloribus minima, obcaecati laborum blanditiis laboriosam quas nihil accusamus expedita totam aliquam tempora animi eligendi. Dolor.  Incidunt delectus doloremque animi beatae architecto et aliquid ullam, amet, odit, recusandae distinctio placeat nam molestias vitae eligendi? Neque, tempore ipsum repellat maxime eos provident deleniti quos delectus aspernatur amet'
},
{
    
    title: 'CineStill 800t',
    price: 75000,
    urls: ["https://http2.mlstatic.com/D_Q_NP_2X_782061-MCO44679813684_012021-AB.webp",
        "https://s3-us-west-2.amazonaws.com/bmc-penny-images/production/1200/15.53.56-352fbee66fb6f8b4907fb57f03394ce9.jpg",],
    stock: 10,
    category: "pelicula",
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsam vitae suscipit iste, nam in commodi porro corrupti est ex magnam illo saepe cum. Aut consequuntur modi dolorum atque commodi  Perferendis debitis, numquam eaque explicabo accusantium modi iusto pariatur laudantium facere et doloremque ex doloribus minima, obcaecati laborum blanditiis laboriosam quas nihil accusamus expedita totam aliquam tempora animi eligendi. Dolor.  Incidunt delectus doloremque animi beatae architecto et aliquid ullam, amet, odit, recusandae distinctio placeat nam molestias vitae eligendi? Neque, tempore ipsum repellat maxime eos provident deleniti quos delectus aspernatur amet'
},
{
   
    title: 'Revelado',
    price: 15000,
    urls: ["https://miro.medium.com/max/1400/1*urc3Js_HsqHCJlcaFwgxwg@2x.jpeg",],
    stock: 10,
    category: "servicio",
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsam vitae suscipit iste, nam in commodi porro corrupti est ex magnam illo saepe cum. Aut consequuntur modi dolorum atque commodi  Perferendis debitis, numquam eaque explicabo accusantium modi iusto pariatur laudantium facere et doloremque ex doloribus minima, obcaecati laborum blanditiis laboriosam quas nihil accusamus expedita totam aliquam tempora animi eligendi. Dolor.  Incidunt delectus doloremque animi beatae architecto et aliquid ullam, amet, odit, recusandae distinctio placeat nam molestias vitae eligendi? Neque, tempore ipsum repellat maxime eos provident deleniti quos delectus aspernatur amet'
},
{
    
    title: 'Digitalizado',
    price: 10000,
    urls: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRaiabGXrQ-kxsvKfkdwJpWL4LiyrRaLZxYw&usqp=CAU",],
    stock: 10,
    category: "servicio",
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsam vitae suscipit iste, nam in commodi porro corrupti est ex magnam illo saepe cum. Aut consequuntur modi dolorum atque commodi  Perferendis debitis, numquam eaque explicabo accusantium modi iusto pariatur laudantium facere et doloremque ex doloribus minima, obcaecati laborum blanditiis laboriosam quas nihil accusamus expedita totam aliquam tempora animi eligendi. Dolor.  Incidunt delectus doloremque animi beatae architecto et aliquid ullam, amet, odit, recusandae distinctio placeat nam molestias vitae eligendi? Neque, tempore ipsum repellat maxime eos provident deleniti quos delectus aspernatur amet'
},
{
    
    title: 'Revelado & Digitalizado',
    price: 20000,
    urls: ["https://parallaxphotographic.coop/wp-content/uploads/2019/08/Olympus-XA2-Negatives-Contact-Sheet-1024x1024.jpg",],
    stock: 10,
    category: "servicio",
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsam vitae suscipit iste, nam in commodi porro corrupti est ex magnam illo saepe cum. Aut consequuntur modi dolorum atque commodi  Perferendis debitis, numquam eaque explicabo accusantium modi iusto pariatur laudantium facere et doloremque ex doloribus minima, obcaecati laborum blanditiis laboriosam quas nihil accusamus expedita totam aliquam tempora animi eligendi. Dolor.  Incidunt delectus doloremque animi beatae architecto et aliquid ullam, amet, odit, recusandae distinctio placeat nam molestias vitae eligendi? Neque, tempore ipsum repellat maxime eos provident deleniti quos delectus aspernatur amet'
},
{
    
    title: 'Olympus Trip 35',
    price: 150000,
    urls: ["https://assets.community.lomography.com/42/84579239039555e5e1882c14128b7976691b37/512x452x2.jpg?auth=7caa82a872dc58d800e1dd1ca4ed593a54f21171",
        "https://assets.catawiki.nl/assets/2017/6/19/1/2/c/12c6011c-83d8-433d-8304-79c5de9ce9e4.jpg"],
    stock: 3,
    category: "camara",
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsam vitae suscipit iste, nam in commodi porro corrupti est ex magnam illo saepe cum. Aut consequuntur modi dolorum atque commodi  Perferendis debitis, numquam eaque explicabo accusantium modi iusto pariatur laudantium facere et doloremque ex doloribus minima, obcaecati laborum blanditiis laboriosam quas nihil accusamus expedita totam aliquam tempora animi eligendi. Dolor.  Incidunt delectus doloremque animi beatae architecto et aliquid ullam, amet, odit, recusandae distinctio placeat nam molestias vitae eligendi? Neque, tempore ipsum repellat maxime eos provident deleniti quos delectus aspernatur amet'
},
{
    
    title: 'Pentax K1000',
    price: 500000,
    urls: ["https://assets.catawiki.nl/assets/2020/4/13/4/7/5/475aef2b-055c-47b9-8077-bdb3a10a2eeb.jpg",
        "https://www.ds-km.com/wp-content/uploads/2020/06/pentax-k-1000-vista-superior-1024x938.jpg"],
    stock: 1,
    category: "camara",
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsam vitae suscipit iste, nam in commodi porro corrupti est ex magnam illo saepe cum. Aut consequuntur modi dolorum atque commodi  Perferendis debitis, numquam eaque explicabo accusantium modi iusto pariatur laudantium facere et doloremque ex doloribus minima, obcaecati laborum blanditiis laboriosam quas nihil accusamus expedita totam aliquam tempora animi eligendi. Dolor.  Incidunt delectus doloremque animi beatae architecto et aliquid ullam, amet, odit, recusandae distinctio placeat nam molestias vitae eligendi? Neque, tempore ipsum repellat maxime eos provident deleniti quos delectus aspernatur amet'
},
{
    
    title: 'Canon ShureShot Z155',
    price: 200000,
    urls: ["https://pictures.depop.com/b0/11264171/729290250_d2ed7ecbefc145f79d80f7d25171c23e/P0.jpg", "https://www.collection-appareils.fr/canon/images/Canon_Sure_Shot_Z155_rear.jpg"],
    stock: 3,
    category: "camara",
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsam vitae suscipit iste, nam in commodi porro corrupti est ex magnam illo saepe cum. Aut consequuntur modi dolorum atque commodi  Perferendis debitis, numquam eaque explicabo accusantium modi iusto pariatur laudantium facere et doloremque ex doloribus minima, obcaecati laborum blanditiis laboriosam quas nihil accusamus expedita totam aliquam tempora animi eligendi. Dolor.  Incidunt delectus doloremque animi beatae architecto et aliquid ullam, amet, odit, recusandae distinctio placeat nam molestias vitae eligendi? Neque, tempore ipsum repellat maxime eos provident deleniti quos delectus aspernatur amet'
},
{
    
    title: 'Olympus OM-1',
    price: 600000,
    urls: ["https://upload.wikimedia.org/wikipedia/commons/b/b0/Olympus_OM-1_%2813573573703%29.jpg", "https://m.media-amazon.com/images/I/811H-XWEl7L._AC_SX679_.jpg"],
    stock: 5,
    category: "camara",
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsam vitae suscipit iste, nam in commodi porro corrupti est ex magnam illo saepe cum. Aut consequuntur modi dolorum atque commodi  Perferendis debitis, numquam eaque explicabo accusantium modi iusto pariatur laudantium facere et doloremque ex doloribus minima, obcaecati laborum blanditiis laboriosam quas nihil accusamus expedita totam aliquam tempora animi eligendi. Dolor.  Incidunt delectus doloremque animi beatae architecto et aliquid ullam, amet, odit, recusandae distinctio placeat nam molestias vitae eligendi? Neque, tempore ipsum repellat maxime eos provident deleniti quos delectus aspernatur amet'
}]


async function addJson(data) {
    try {
        

        const docRef = await addDoc(collection(db, "items"), 
            data
        );

        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }

}

itemsDetailMock.map(x => addJson(x))

