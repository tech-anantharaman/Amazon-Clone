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
                        title="Echo Dot (3rd Gen) – New and improved smart speaker with Alexa (Black)" 
                        image="https://images-na.ssl-images-amazon.com/images/I/61EXU8BuGZL._SL1100_.jpg" 
                        price={2999} 
                        rating={4}
                    />
                    <Product 
                        id="2"
                        title="Attitude Is Everything: Change Your Attitude ... Change Your Life!" 
                        image="https://images-na.ssl-images-amazon.com/images/I/41F8ATXoMOL._SX317_BO1,204,203,200_.jpg" 
                        price={199} 
                        rating={5}
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id="3"
                        title="Mediweave Compact Digital Infrared (IR) Thermometer Gun AET-R1D1 (1 Pieces), CE and RoHS Certified" 
                        image="https://images-na.ssl-images-amazon.com/images/I/51UZD2kVt1L._SL1000_.jpg" 
                        price={3129} 
                        rating={2}
                    />
                    <Product 
                        id="4"
                        title="Sunfeast Dark Fantasy Choco Fills, Enrobed within a perfectly baked rich cookie outer " 
                        image="https://images-na.ssl-images-amazon.com/images/I/712UP4Hr-kL._SL1500_.jpg" 
                        price={30} 
                        rating={5}
                    />
                    <Product 
                        id="5"
                        title="Nescafe Gold Blend Rich and Smooth Coffee Powder, 100g Glass Jar" 
                        image="https://images-na.ssl-images-amazon.com/images/I/71zS922yVqL._SL1500_.jpg" 
                        price={499} 
                        rating={4}
                    />
                </div>
                <div className="home__row">
                <Product 
                        id="6"
                        title="Sony Bravia 138.8 cm (55 inches) 4K Ultra HD Smart LED TV KD-55X7002G (Black), Live an enriching viewing experience with brilliant clarity powered by 4K X-Reality Pro and TRILUMINOS™ Display on this TV. Discover the thrilling entertainment with direct YouTube & Netflix button and USB Tethering." 
                        image="https://images-na.ssl-images-amazon.com/images/I/81Nw2ifyBzL._SL1500_.jpg" 
                        price={109900} 
                        rating={5}
                    />
                </div>
                
            </div>
        </div>
    );
}

export default Home;


