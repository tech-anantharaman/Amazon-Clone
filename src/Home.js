import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt="Home Image Loading..."
                />
                <div className="home__row">
                    <Product 
                        id="1"
                        title="The Power of your Subconscious Mind" 
                        image="https://images-na.ssl-images-amazon.com/images/I/51QTTApN-XL._SX324_BO1,204,203,200_.jpg" 
                        price={160.12} 
                        rating={5}
                    />
                    <Product 
                        id="2"
                        title="The book is available in two types, the kindle edition as well as the paperback edition. The book contains 312 pages of wisdom and positive energy. The modern English language used is easy to understand. " 
                        image="https://images-na.ssl-images-amazon.com/images/I/51QTTApN-XL._SX324_BO1,204,203,200_.jpg" 
                        price={160.12} 
                        rating={5}
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id="3"
                        title="The Power of your Subconscious Mind" 
                        image="https://images-na.ssl-images-amazon.com/images/I/51QTTApN-XL._SX324_BO1,204,203,200_.jpg" 
                        price={160.12} 
                        rating={5}
                    />
                    <Product 
                        id="4"
                        title="The Power of your Subconscious Mind" 
                        image="https://images-na.ssl-images-amazon.com/images/I/51QTTApN-XL._SX324_BO1,204,203,200_.jpg" 
                        price={160.12} 
                        rating={5}
                    />
                    <Product 
                        id="5"
                        title="The Power of your Subconscious Mind" 
                        image="https://images-na.ssl-images-amazon.com/images/I/51QTTApN-XL._SX324_BO1,204,203,200_.jpg" 
                        price={160.12} 
                        rating={5}
                    />
                </div>
                <div className="home__row">
                <Product 
                        id="6"
                        title="The book is available in two types, the kindle edition as well as the paperback edition. The book contains 312 pages of wisdom and positive energy. The modern English language used is easy to understand. " 
                        image="https://images-na.ssl-images-amazon.com/images/I/51QTTApN-XL._SX324_BO1,204,203,200_.jpg" 
                        price={160.12} 
                        rating={5}
                    />
                </div>
                
            </div>
        </div>
    );
}

export default Home;


