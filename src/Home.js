import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"    
                    src="https://th.bing.com/th/id/Rea36bcb26ccc72c1e1cb0b744f331b4d?rik=c8iypnZfewx7fA&riu=http%3a%2f%2fwww.aalogics.com%2fsites%2fdefault%2ffiles%2famazon-web-services-banner.png&ehk=M0vmSMf3tZFOgqvWlqCO%2bTd4FFWDuEWa7kvdfFCraJY%3d&risl=&pid=ImgRaw" />
            <div className="home__row">
                <Product 
                    id={100}
                    title="Fast Burn!: The Power of Negative Energy Balance"
                    price={19.58}
                    image="https://images-na.ssl-images-amazon.com/images/I/51QyGtYV2FL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
                    rating={5}
                    />
                <Product 
                    id={101}
                    title="Benewell 12X50 Monocular Telescope, Day and Low Night Vision Waterproof High Power Monocular with Smartphone Holder & Tripod, BAK4 Prism Dual Focus for Bird Watching Hunting"
                    price={33.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/71lVJCoc59L._AC_SL1500_.jpg"
                    rating={5}
                />
            </div>
            <div className="home__row">
                <Product 
                    id={102}
                    title="Xbox Wireless Headset for Xbox Series X|S, Xbox One, and Windows 10 Devices"
                    price={99.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/51ODvrKqxTL._SL1200_.jpg"
                    rating={4}
                />
                <Product
                    id={103} 
                    title="On the House: A Washington Memoir"
                    price={17.99}
                    image="https://m.media-amazon.com/images/I/416ztNCSb8L._SY346_.jpg"
                    rating={3}
                    />
                <Product 
                    id={104}
                    title="Nintendo Switch Pro Controller Monster Hunter Rise Edition - Switch"
                    price={17.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/71JKpN7BsFL._SL1500_.jpg"
                    rating={5}
                />
            </div>
            <div className="home__row">
                <Product 
                    id={105}
                    title="Indoor Camera,Conico 1080P Pan/Tilt Baby Monitor with Camera and Audio,Pet Camera with Motion Detection,Two-Way Audio,Night Vision,Cloud and Local Storage,WiFi Camera Compatible with Alexa for Home"
                    price={29.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/61Sfr5JWvlL._AC_SL1500_.jpg"
                    rating={2}
                />
            </div>
            </div>
        </div>
    )
}

export default Home
