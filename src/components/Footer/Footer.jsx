import React from 'react';
import Linkdin from '../../img/linkedin.png';
import Facebook from '../../img/facebook.png';
import Twitter from '../../img/twitter.png';
import Instagram from '../../img/instagram.png';
import './Footer.css'

const Footer = ()=>{
    return(
        <div class="contenedorFooter">
                <section class="container">
                    <a href='/'>
                        <div class="contenedorFooter__logo">
                        <p>Atenea Sport</p>
                        </div>
                    </a>
                </section>
                <div class="contenedorFooter__Linkedin">
                                <span>Sitio Web Creado Por Cecilia Diaz ® </span>
                                <a href="https://www.linkedin.com/in/cecilia-diaz-890a62159/" target="_blank">
                                    <div class="redes">
                                        <img src={Linkdin}  class="linkedin img-fluid" alt="logo"/>
                                    </div>
                                </a>
                </div>
                <div class="footer-redes">
                        <h3 >Seguinos en nuestra redes</h3>
                        <section class="container">
                            <div class="redesPosicion">
                                <div className='redes'>
                                    <a href="https://es-la.facebook.com/" target="_blank"><img src={Facebook}   class="facebookLogo img-fluid" alt="Logo Fb"/></a>
                                </div>
                                <div className='redes'>
                                    <a href="https://www.instagram.com/?hl=es" target="_blank"><img src={Instagram} alt="Logo Ig" class="instagramLogo img-fluid"/></a>
                                </div>
                                <div className='redes'>
                                    <a href="https://twitter.com/?lang=es" target="_blank"><img src={Twitter} alt="Logo Tw" class="twitterLogo img-fluid"/></a>
                                </div>
                            </div>
                        </section>
                </div>
        </div>
    )
}

export default Footer;