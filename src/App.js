import './App.css';
import Header from './Components/Header';
import Headerone from './Components/Headerone';
import Contentone from './Components/Contentone'
import Contenttwo from './Components/Contenttwo';
import Contentthree from './Components/Contentthree';
import Last from './Components/Last';
import Banner from './Components/Banner';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='images'>
      <Headerone 
      src="https://rukminim1.flixcart.com/flap/128/128/image/e09286c6edd281d0.png?q=100"
      name="Mobiles"/ 
      >
      <Headerone
      src="https://rukminim1.flixcart.com/flap/128/128/image/e7d30211bbb602cc.png?q=100"
      name="Fashion"/ 
      >
      <Headerone
      src="https://rukminim1.flixcart.com/flap/128/128/image/c5a1aae989f3aac4.png?q=100"
      name="Electronics"/ 
      >
      <Headerone
      src="https://rukminim1.flixcart.com/flap/128/128/image/6214910e86384399.png?q=100"
      name="Home"/ 
      >
      <Headerone
      src="https://rukminim1.flixcart.com/flap/128/128/image/5126ce89b897c8e9.png?q=100"
      name="Travel"/ 
      >
      <Headerone
      src="https://rukminim1.flixcart.com/flap/128/128/image/fe2a5da6f688d660.png?q=100"
      name="Appliances"/ 
      >
      <Headerone
      src="https://rukminim1.flixcart.com/flap/128/128/image/2a284788d550ac21.png?q=100"
      name="Furniture"/ 
      >
      <Headerone
      src="https://rukminim1.flixcart.com/flap/128/128/image/a2fccf3370909581.png?q=100"
      name="Beauty,Toys & more"/ 
      >
      <Headerone
      src="https://rukminim1.flixcart.com/flap/128/128/image/19b4a157cd8e8ff7.png?q=100"
      name="Grocery"/ 
      >
      </div>
      <div><Banner /></div>
      <div className='Contents'>
      <Contentone
      src="https://handbag.yournextshoes.com/wp-content/uploads/2018/01/Louis-Vuitton-Speedy-1.jpg"
      name="louisvuitton Bag"/>
      <Contentone
      src="https://www.redbottomshoes-forwomen.us/images/large/christianlouboutin14/CL0000001101.jpg"
      name="High Heels"/>
      <Contentone
      src="https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-boombox-sneaker-boot-shoes--AJ1U1AGC01_PM2_Front%20view.jpg"
      name="Shoes"/>
      <Contentone
      src="https://eu.louisvuitton.com/images/is/image/QBB162_PM2_Front%20view"
      name="Watches"/>
      </div>
      <div className='Contents'>
        <Contenttwo
        src="https://cdn.shopify.com/s/files/1/0325/9380/5371/products/v1_1920x.png?v=1623761928"
        name="Mens Jackets"/>
        <Contenttwo
        src="https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-clockwise-canvas-sunglasses-sunglasses--Z1108W_PM2_Front%20view.jpg"
        name="Glasses"/>
        <Contenttwo
        src="https://eu.louisvuitton.com/images/is/image/FLCO17QWE105_PM2_Front%20view"
        name="Womens Jackets"/>
        <Contenttwo
        src="https://image.dhgate.com/0x0/f2/albu/g13/M01/37/67/rBVak181wseABXLqAAJJUVNbhuw554.jpg"
        name="Hats"/>
      </div>
      <div className='Contents'>
       <Contentthree
       src="https://cdn.shopify.com/s/files/1/0024/9803/5810/products/530306-Product-1-I-637675032749205463_1080x.jpg"
       name="Mobiles"/>
       <Contentthree
       src="https://image-us.samsung.com/SamsungUS/home/televisions-and-home-theater/tvs/uhd-tv/ru7300/gallery/01_RU7300-L-Perspective-Black-031519.jpg?$product-details-jpg$"
       name="TV's"/>
       <Contentthree
       src="https://www.apple.com/newsroom/images/product/imac/standard/Apple_imac-magickeyboardnum-magicmouse2-macos-wallpaper_08042020_big.jpg.large.jpg"
       name="Computers"/>
       <Contentthree
       src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/og-airpods-max-202011?wid=600&hei=315&fmt=jpeg&qlt=95&.v=1603996970000"
       name="Gadjets"/>
     </div>
     <div>
       <Last/>
     </div>
    </div>
  );
}

export default App;

