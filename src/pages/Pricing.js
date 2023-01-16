import React, { Fragment } from "react";
//Import Component
import NavBarOther from "../components/navbarother";
import Footer from "../components/footer";

const Pricing = () => {
    return (
        <Fragment>
            <NavBarOther />

            <section id="pricing" className="our-blog main-blog">
                <div className="container">
                    <div className="row">
                        <div className="meta-details" >

                            <h2 style={{ marginTop: "10px!important" }}> Pricing Disclaimer</h2>



                            <p>
                                All prices, products, and offers on BlockVerse website are subject to
                                change without notice
                            </p>




                            <p

                            >


                                While we make sure to provide most accurate and up-to-date information, in
                                some
                                
                                cases one or more items on our website may be priced incorrectly.
                                This might
                               
                               happen due to human errors, digital images, technical errors, or a
                                mismatch in
                               
                               pricing information received .

                            </p>
                            <p

                            >

                                BlockVerse reserves the right to change prices for all our products,
                                offers, or deals.
                               
                               These changes are done due to market conditions, course termination,
                                providers,
                                
                               price changes, errors in advertisements, and other mitigating
                                circumstances.
                               
                                However, the price you paid at the time of purchase still holds for
                                you.

                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </Fragment>

    )
}

export default Pricing