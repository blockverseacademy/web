import React from "react";
import Icofont from 'react-icofont';
import { Link } from 'react-router-dom';

/**
 * @componentName Footer
 * @description Component to hold site footer information
 */

const Footer = () => {

    //Default Props
    const defaultProps = {
        copyrightText: "© 2022 BlockVerse Academy All Rights Reserved.",
        socialTitle: "Follow Us On:",
        FacebookLink: "https://www.facebook.com/BlockVerseAcademy/",
        TwitterLink: "https://twitter.com/BlockVerseHQ",
        InstagramLink: "mailto:reach@blockverseacademy.com",
        linkedinLink: "https://www.linkedin.com/company/blockverse-academy/",
        privacyLink: "/privacy",
        disclaimerLink: "/disclaimer",
        termsLink: "/terms",
        refundpolicy: "/refund",
        pricingPolicy: "/pricing"

    };
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <p className="copyright">{defaultProps.copyrightText}</p>
                    </div>
                    <div className="col-md-4">
                        <div className="social-icons bottom">
                            <Link className="copyright" to={defaultProps.termsLink} style={{ color: "white" }}>Terms</Link> |
                            &nbsp;<Link className="copyright" to={defaultProps.privacyLink} style={{ color: "white" }} >Privacy</Link>&nbsp;
                            |
                            &nbsp;<Link className="copyright" to={defaultProps.disclaimerLink} style={{ color: "white" }}>Disclaimer</Link>&nbsp;
                            |
                            &nbsp;<Link className="copyright" to={defaultProps.refundpolicy} style={{ color: "white" }}>Refund</Link>&nbsp;
                            |
                            &nbsp;<Link className="copyright" to={defaultProps.pricingPolicy} style={{ color: "white" }}>Pricing</Link>&nbsp;
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="social-icons bottom">
                            <ul className="list-inline">
                                <li>{defaultProps.socialTitle} </li>
                                <li>
                                    <a href={defaultProps.FacebookLink} target="_blank">
                                        <Icofont icon="icofont-facebook" />
                                    </a>
                                </li>
                                <li>
                                    <a href={defaultProps.TwitterLink} target="_blank">
                                        <Icofont icon="icofont-twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a href={defaultProps.linkedinLink} target="_blank">
                                        <Icofont icon="icofont-linkedin" />
                                    </a>
                                </li>
                                <li>
                                    <a href={defaultProps.InstagramLink} target="_blank">
                                        <Icofont icon="icofont-email" />
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer