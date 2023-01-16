import React, { Fragment, useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Icofont from "react-icofont";
import { Link } from "react-scroll";
import { Link as BLink } from 'react-router-dom'
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import LazyLoadImageComp from './LazyLoadImage';
import rocket from '../assets/images/rocket.webp'

/**
 * @componentName Top Banner
 * @description Banner Slides at Homepage
 */

import "./banner.css"


///Default Props
const banneronesData = [
    {
        BgClass: " slide-bg-",
        MainLogo: require("../assets/images/logo3.png"),
        TopTitle: "THE NEXT GENERATION",
        Title: "OF THE INTERNET IS BEING BUILT ",
        Content: "UPSKILL YOURSELF",
        BtnLink: "portals",
        BtnName: "get started",
        MetaTopTitle: "DEMYSTIFYING",
        MetaTitle: "THE METAVERSE ",
        MetaContent1: "Rouse your curiosity, explore key concepts,",
        MetaContent2: "learn from our expert trainer and practice in",
        MetaContent3: "the real world so that you can",
        MetaContentmore1: "STEP CONFIDENTLY INTO",
        MetaContentmore2: "THE VIRTUAL ONE",
        TopTitleScreen1: "SKILLING",
        TitleScreen1: "DIVERSE TALENT",
        ContentScreen1: "FOR NEW AGE ",
        ContentScreenmore1: "HIGH GROWTH TECHNOLOGIES",
        BtnLinkScreen1: "portals",
        BtnNameScreen1: "get started",
        TopTitleScreen2: "THE NEXT GENERATION",
        TitleScreen2: "OF THE INTERNET IS BEING BUILT ",
        ContentScreen2: "UPSKILL YOURSELF",
        ContentmoreScreen2: "AND BECOME ITS BUILDER ",
        BtnLinkScreen2: "portals",
        BtnNameScreen2: "get started",
    }
];

const Banner = () => {
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        localStorage.removeItem("ScreenWidth");
        localStorage.setItem("ScreenWidth", document.documentElement.clientWidth);
        window.addEventListener("resize", () => {
            setLoading(true);
            displayWindowSize();
            setLoading(false);
        });
        window.scrollTo(0, 0);


    }, [loading]);



    function displayWindowSize() {
        // Get width and height of the window excluding scrollbars
        var w = document.documentElement.clientWidth;
        var h = document.documentElement.clientHeight;
        console.log(w)
        // Display result inside a div element
        localStorage.removeItem("ScreenWidth");
        localStorage.setItem("ScreenWidth", w);
    }


    const BannerDataArr = (i) => {
        return banneronesData.map((bannerone, index) => (
            <LazyLoadComponent id={index}>
                <div id="bgclass" className={`single-slider-item slide-bg-${i}`} key={index}>

                    {i == 3 && (
                        <div className="diplay-table">
                            <div className="display-table-cell">
                                <div className="row" style={{ paddingLeft: "40px" }}>

                                    <div className="col-lg-12">
                                        <h1
                                            className={

                                                "hero-text animated fadeInDown slow opacityOne"

                                            }
                                            style={{ margin: "20px" }}
                                        >
                                            {bannerone.TopTitleScreen1} <strong style={{ color: 'black', color: 'black', WebkitTextFillColor: 'white', WebkitTextStrokeWidth: '1px', WebkitTextStrokeColor: 'black' }}>{bannerone.TitleScreen1}</strong>   {bannerone.ContentScreen1} {bannerone.ContentScreenmore1}
                                        </h1>


                                        <Link to={bannerone.BtnLinkScreen1} className="btn-a" style={{ margin: "20px", zIndex: "99999999" }}>
                                            <div className="button" style={{ margin: "20px" }}>
                                                {bannerone.BtnNameScreen1}
                                                <Icofont icon="icofont-long-arrow-right" />
                                                <div className="mask" /></div>
                                        </Link>

                                    </div>

                                </div>
                            </div>
                        </div>
                    )}

                    {i == 1 && (
                        <div className="diplay-table">
                            <div className="display-table-cell">
                                <div className="row" style={{ paddingLeft: "40px" }}>

                                    <div className="col-lg-7">
                                        <h1
                                            className={

                                                "hero-text animated fadeInDown slow opacityOne"

                                            } style={{ margin: "20px" }}
                                        >
                                            {bannerone.TopTitleScreen2}
                                        </h1>

                                        <h1
                                            className={

                                                "animated fadeInDown slow opacityOne"

                                            } style={{ margin: "20px" }}

                                        >
                                            {bannerone.TitleScreen2}
                                        </h1>


                                        <p
                                            className={
                                                "animated fadeInDown slow opacityOne"

                                            } style={{ margin: "20px" }}
                                        >
                                            {bannerone.ContentScreen2} <strong>{bannerone.ContentmoreScreen2}</strong>
                                        </p>
                                        <Link to={bannerone.BtnLinkScreen2} className="btn-a" style={{ margin: "20px", zIndex: "99999999" }}>
                                            <div className="button" style={{ margin: "20px" }}>
                                                {bannerone.BtnNameScreen2}
                                                <Icofont icon="icofont-long-arrow-right" />
                                                <div className="mask" /></div>
                                        </Link>

                                    </div>

                                </div>
                            </div>
                        </div>
                    )}

                    {i == 2 && (
                        <div className="diplay-table">
                            <div className="display-table-cell">
                                <div className="row" style={{ paddingLeft: "40px" }}>

                                    <div className="col-lg-7">
                                        <h1
                                            className={

                                                "hero-text animated fadeInDown slow opacityOne"

                                            } style={{ margin: "20px" }}
                                        >
                                            {bannerone.TopTitleScreen2}
                                        </h1>

                                        <h1
                                            className={

                                                "animated fadeInDown slow opacityOne"

                                            } style={{ margin: "20px" }}

                                        >
                                            {bannerone.TitleScreen2}
                                        </h1>


                                        <p
                                            className={
                                                "animated fadeInDown slow opacityOne"

                                            } style={{ margin: "20px" }}
                                        >
                                            {bannerone.ContentScreen2} <strong>{bannerone.ContentmoreScreen2}</strong>
                                        </p>
                                        <Link to={bannerone.BtnLinkScreen2} className="btn-a" style={{ margin: "20px", zIndex: "99999999" }}>
                                            <div className="button" style={{ margin: "20px" }}>
                                                {bannerone.BtnNameScreen2}
                                                <Icofont icon="icofont-long-arrow-right" />
                                                <div className="mask" /></div>
                                        </Link>

                                    </div>

                                </div>
                            </div>
                        </div>
                    )}

                    {i == 8 && (
                        <div className="diplay-table">
                            <div className="display-table-cell1">
                                <div className="row" style={{ paddingLeft: "40px", marginTop: "8%" }}>



                                    <div className="col-lg-7" style={{ padding: "10px" }}>
                                        <span
                                            className={

                                                "hero-text8 animated fadeInDown slow opacityOne"

                                            }
                                        >
                                            {bannerone.MetaTopTitle}
                                        </span>

                                        <h1
                                            className={

                                                "hero-text8 animated fadeInDown slow opacityOne"

                                            }
                                        >
                                            {bannerone.MetaTitle}
                                        </h1>
                                        <hr style={{ width: "21%", borderTop: "4px solid" }} />
                                        <p
                                            className={
                                                "hero-text4 animated fadeInDown slow opacityOne"

                                            }
                                        >
                                            {bannerone.MetaContent1}

                                        </p>
                                        <p
                                            className={
                                                "hero-text4 animated fadeInDown slow opacityOne"

                                            }
                                        >
                                            {bannerone.MetaContent2}

                                        </p>
                                        <p
                                            className={
                                                "hero-text4 animated fadeInDown slow opacityOne"

                                            }
                                        >
                                            {bannerone.MetaContent3}

                                        </p>
                                        <p
                                            className={
                                                "hero-text5 animated fadeInDown slow opacityOne"

                                            }
                                        >
                                            {bannerone.MetaContentmore1} <br />
                                            {bannerone.MetaContentmore2}

                                        </p>

                                    </div>
                                    <div
                                        className="col-lg-5"
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center"
                                        }}
                                    >
                                        <div
                                            className="row"
                                            style={{
                                                display: "flex",
                                                justifyContent: "flex-end",
                                                justifyItems: "center",
                                                flexDirection: "column",
                                                marginLeft: "40%"
                                            }}
                                        >
                                            <BLink className="btn-a" to="/orientation">
                                                <div className="Creativebutton" style={{ padding: 18 }}>
                                                    CLICK TO ENROLL
                                                    <i className="icofont-long-arrow-right" />
                                                    <div className="mask" />
                                                </div>
                                            </BLink>
                                            <div
                                                className="row"
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "flex-end",
                                                    justifyItems: "center",
                                                    flexDirection: "column",
                                                    marginLeft: "0%"

                                                }}
                                            >
                                                <br />
                                                <BLink className="btn-a" to="/orientation">
                                                    <div className="CreativebuttonPrice" style={{ padding: 2 }}>
                                                        Early Bird Price, <br />Grab Now!
                                                        <i className="icofont-long-arrow-right" />
                                                        <div className="mask" />
                                                    </div>
                                                </BLink>
                                                <br />
                                                <div style={{ display: "flex", justifyContent: "center" }}>
                                                    <LazyLoadImageComp src={rocket} alt="Early Bird Price" width={62} height={175}  ></LazyLoadImageComp>
                                                </div>
                                                {/* 
                                        <br /><br /><br />
                                        <div className="text-effect">
                                      
                                            <h1 className="neon" data-text="Early Bird Offer" contenteditable>Early Bird Offer</h1>
                                            <h1 className="neon" data-text="30% Reduction" contenteditable>30% Reduction</h1>
                                            <div className="gradient"></div>
                                            <div className="spotlight"></div>
                                        </div> */}

                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-lg-7" style={{ padding: "10px" }}>


                                    </div>
                                    <div
                                        className="col-lg-5"
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center"
                                        }}
                                    >

                                    </div>

                                </div>
                            </div>
                        </div>

                    )}


                </div>
            </LazyLoadComponent>
        ));
    };

    return (
        <Fragment>
            <div id="home" className="hompage-slides-wrapper">


                {/* <Carousel slide="true" controls="false" indicators="false" touch="true" nextIcon="" nextLabel="" prevIcon="" prevLabel=""> */}

                    {/* <Carousel.Item interval={3000}>
                        {BannerDataArr(3)}
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        {BannerDataArr(1)}
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        {BannerDataArr(2)}
                    </Carousel.Item> */}
                    {/* <Carousel.Item interval={3000}> */}
                        {BannerDataArr(8)}
                    {/* </Carousel.Item> */}





                {/* </Carousel> */}



            </div>
        </Fragment>
    );
}

export default Banner