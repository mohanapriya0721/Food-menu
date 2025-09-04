import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Aboutus = () => {
  return (
    <div>
      <Header/>
      <p className='h3 text-center aboutus-heading '>AboutUs</p>
      <div className='aboutus-para'>
        <p className='fw-bold fs-3'>Hey all, Welcome to Foodieland </p>
        <p> At <strong>Foodieland</strong>, we believe every meal tells a story. Our passion is to bring the world’s most loved flavors straight to your table crafted with fresh ingredients,authentic recipes,and a touch of culinary creativity.</p> 
        <p>From the first sizzle of a pan to the last bite of dessert, every dish is made to celebrate the joy of food. Whether you’re craving a hearty biryani, a perfectly baked pizza, melt-in-your-mouth cookies, or a refreshing smoothie, we’ve got something for every mood and moment.</p>
        <p>Our menu is a journey — from juicy kebabs and flavorful keema to light salads, creamy pasta, homestyle soups, and traditional Turkish delights. For those who prefer something wholesome and simple, our fresh roti, sandwiches, corn specials, and vegetarian delights are a treat you’ll love again and again.</p>
        <p className='fw-bold fs-6'>Our Promise</p>
        <p>At Foodieland, it’s not just about eating — it’s about experiencing food at its finest.</p>
        <p> <strong>- Fresh Ingredients – </strong>We source the best produce, spices, and meats to ensure every bite is full of flavor.</p>
        <p><strong>- Authentic Taste – </strong>Our recipes honor traditional cooking methods while adding a modern twist.</p>
        <p><strong>- For Everyone –</strong> Whether you’re a meat lover, vegetarian, or just here for dessert, there’s something here for you.</p>
        <p>Our chefs bring together culinary traditions from across the globe, ensuring every plate is not just delicious, but a story of culture and care. We want you to feel at home, no matter where you are in the world.</p>
        <p>Foodieland is more than a food app — it’s your gateway to a world of flavors, a place where every order feels like a special occasion. Because here, we don’t just serve meals… we serve memories.</p>
        <p><strong>Come, taste the world with us.</strong></p>
      </div>
      <hr></hr>
      <Footer/>
    </div>
  )
}

export default Aboutus
