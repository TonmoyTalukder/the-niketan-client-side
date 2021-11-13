import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Contact = () => {
    return (
        <div style={{background:  '#404245'}}><Header/>
        <div className="container text-light" >
            
            <h1 className="pt-5 pb-2">Contact with us</h1>

            <div>
                <iframe  className="bg-secondary rounded-3" src="https://docs.google.com/forms/d/e/1FAIpQLSf5gyr-QIwvEIJz3EJNWsGkOmm4KXVT1KaK0uwfvqUM7MT79Q/viewform?embedded=true" 
                width="75%" 
                height="1273" 
                frameborder="0" 
                marginheight="0" 
                marginwidth="0">Loading…</iframe>
            </div>

        </div>
        <Footer/>
        </div>
    );
};

export default Contact;