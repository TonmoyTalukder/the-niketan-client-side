import React from 'react';
import './Footer.css';
import logo from '../../../images/logo.png';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div>
                <footer className="w-100 py-5 flex-shrink-0">
                    <div className="container py-5">
                        <div className="row gy-4 gx-1">
                            <div className="col-lg-4 col-md-6 px-0">
                                <h5 className="h1 text-white">
                                    <img className="footer-logo-img" src={logo} alt="" />
                                    <br />
                                    The Niketan</h5>
                                <p className="small text-muted">Your best promised assistance to best home for you.</p>
                                <p className="small text-muted mb-0">&copy; Copyrights. All rights reserved. <br /> <a className="text-primary" href="#">https://the-niketan.web.app/</a></p>
                            </div>
                            <div className="col-lg-2 col-md-6 px-0">
                                <h5 className="text-white mb-3">Who Are We?</h5>
                                <ul className="list-unstyled text-muted">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/apartments">Get started</Link></li>
                                    <li><Link to="/faq">FAQ</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-2 col-md-6 px-0">
                                <h5 className="text-white mb-3">Stay Tuned</h5>
                                <ul className="list-unstyled text-muted">
                                    <li><Link to="/home/#premium-apartments">New Apartments</Link></li>
                                    <li><Link to="/home/#top-destinations">Best Destinations</Link></li>
                                    <li><Link to="/apartments">All Apartments</Link></li>
                                    <li><Link to="/home/#reviews">Reviews</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-md-6 px-0">
                                <h5 className="text-white mb-3">Newsletter</h5>
                                <p className="small text-muted">Stay tuned with our update apartments news. Subscribe to our newsletter and get all updates to your inbox of email!</p>
                                <form action="#">
                                    <div className="input-group mb-3">
                                        <input className="form-control" type="text" placeholder="Recipient's email" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                        <button className="btn btn-primary" id="button-addon2" type="button"><i className="fas fa-paper-plane">Subscribe</i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Footer;