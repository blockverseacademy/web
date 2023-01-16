import React, { Fragment } from "react";


//Import Component
import NavBarOther from "../components/navbarother";
import Footer from "../components/footer";
import './refund.css'

const Refund = () => {

    const sectionTitle = "Our Refund Policy";

    return (
        <Fragment>
            <NavBarOther />
            <section id="blog" className="our-blog main-blog">
                <div className="container">
                    <div className="row">
                        <div className="meta-details" >


                            <h2 style={{ marginTop: "10px!important" }}>{sectionTitle}</h2>
                            <p>
                                BlockVerse Academy  has a fair policy in place for refunds. The refund policy as well as procedure shall be communicated to all learners (both existing and prospective) clearly via our website. The refund policy shall be reviewed regularly to ensure it is fair and equitable to all learners. Learners  are required to adhere to the refund policy for any request of refund.

                            </p>
                            <span>
                                For a refund pertaining to withdrawal due to non-delivery of a course, BlockVerse Academy will notify students in writing in the event of any of the following:
                                <ul className="cl">
                                    <li><i className="icofont-check"></i>
                                        The course does not commence on the course commencement date
                                    </li>
                                    <li><i className="icofont-check"></i>
                                        It terminates the course before the course commencement date

                                    </li>
                                    <li><i className="icofont-check"></i>
                                        It does not complete the course by the course completion date
                                    </li>
                                    <li><i className="icofont-check"></i>
                                        It terminates the course before the course completion date

                                    </li>
                                </ul>
                            </span>

                            <p>
                                Within three working days, BlockVerse Academy will inform students in writing of the alternative study arrangement (if any). If a learner decides to withdraw, he/she will be refunded 100 percent of course fees paid within seven working days from the day the learner submits the request to withdraw.

                            </p>

                            <p>
                                If the learner withdraws from the course for any reason other than those stated above, BlockVerse Academy will refund to the student an amount based on the following table:

                            </p>
                            <div className="item">
                            <div className="row" >
                                <div className="col-md-4">
                                    % of the amount of fees paid to be refunded
                                </div>
                                <div className="col-md-4">
                                    If Student’s written notice of withdrawal is received:
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    75%
                                </div>
                                <div className="col-md-4">
                                    between 10 to 15 days before the Course Commencement Date
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4">
                                    50%
                                </div>
                                <div className="col-md-4">
                                    less than 10 days but more than 7 days before the Course Commencement Date
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4">
                                    10%
                                </div>
                                <div className="col-md-4">
                                    within 7 days of the Course Commencement Date
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    0%
                                </div>
                                <div className="col-md-4">
                                    After the Course Commencement Date
                                </div>
                            </div>

                            </div>

                            <p>
                                The amount will be refunded to the student within 7 working days from the day BlockVerse academy receives the learner’s written notice of withdrawal on its official mail ID (contact@blockverseacademy.com) .
                                Requests that are received after 12.00 noon IST (Indian Standard time) would be considered as submission on the next working day.

                            </p>

                            <p>
                            The refund process time of 7 working days excludes the time taken for processing by the bank. All refunds will be paid directly to the learner only, unless written and signed instruction is provided by the learner to pay the refund to an account belonging to a person other than the learner
                            </p>

                        </div>

                        {/* Sidebar: src/components*/}
                    </div>
                </div>
            </section>
            <Footer />
        </Fragment>
    );
}

export default Refund