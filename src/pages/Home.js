import React, { Fragment, Suspense } from "react";
import CookieConsent, { Cookies } from "react-cookie-consent";

/**
 * @componentName Home
 * @description This is for single page lazy load all other components
 */


/// Custom Components
import NavBar from "../components/navbar";
import Loading from "../components/loading";
import BusinessConsultancy from "../components/businessconsultancy";

/// Lazy Load all other components

const Banner = React.lazy(() => import("../components/banner.js"));
const Portals = React.lazy(() => import("../components/portals.js"));
const AllCourses = React.lazy(() => import("../components/allcourses.js"));
const Mission = React.lazy(() => import("../components/mission.js"));
const We = React.lazy(() => import("../components/we.js"));
const Team = React.lazy(() => import("../components/team.js"));
const Advisors = React.lazy(() => import("../components/advisors.js"));
const Faq = React.lazy(() => import("../components/faq.js"));
const Blogs = React.lazy(() => import("../components/blogs.js"));
const AboutUs = React.lazy(() => import("../components/aboutus.js"));
const Contact = React.lazy(() => import("../components/contact.js"));
const Footer = React.lazy(() => import("../components/footer.js"));

const Home = () => {
 return (
        <Fragment>
            <NavBar pageName="home" />
            <Suspense fallback={<Loading />}><Banner /></Suspense>
            <Suspense fallback={<Loading />}><Mission /></Suspense>
            <Suspense fallback={<Loading />}><We /></Suspense>
            <Suspense fallback={<Loading />}><Portals /></Suspense>
            <Suspense fallback={<Loading />}><AllCourses /></Suspense>
            <Suspense fallback={<Loading />}><BusinessConsultancy /></Suspense>
            <Suspense fallback={<Loading />}><Team /></Suspense>
            <Suspense fallback={<Loading />}><Advisors /></Suspense>
            <Suspense fallback={<Loading />}><Faq /></Suspense>
            <Suspense fallback={<Loading />}><Blogs /></Suspense>
            <Suspense fallback={<Loading />}><AboutUs /></Suspense>
            <Suspense fallback={<Loading />}><Contact /></Suspense>
            <Suspense fallback={<Loading />}><Footer /></Suspense>
            <CookieConsent location="bottom" cookieName="bvaCookies" expires={999} overlay flipButtons enableDeclineButton
                onDecline={() => {
                    Cookies.remove("bvaCookies");
                }}>
                This website uses cookies to enhance the user experience.
            </CookieConsent>
        </Fragment>
    )
}

export default Home