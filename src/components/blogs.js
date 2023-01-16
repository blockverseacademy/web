import React, { useState, useEffect, Fragment } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Icofont from "react-icofont";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LazyLoadImageComp from '../components/LazyLoadImage'


/**
 * @componentName Blogs
 * @description This components will display list of active Blogs created on Database
 */

/// Import Slice Component 
import { retrieveBlogs } from "../slices/Blogs";

//// Import Custom Components
import BlogCategories from "./blogcategories";

/// Include Third Party Components 
import moment from "moment";

/// Custom Stylesheet
import './blog.css'

//Default Props
const SectionbgTitle = "Blog";
const sectionTitle = "Our Blog";
const sectionDescription =
  "Learn everything you need to know about the Metaverse, Blockchain. Join millions of students from around the world already learning in BlockVerse Academy. Wide Range of Topics.";

const Blogs = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [arrState, SetarrState] = useState([]);
  const [numbers, SetNumbers] = useState([]);
  const [totalRecords, SetTotalRecords] = useState(0);
  const [title, SetTitle] = useState("All Blogs");
  const [param, SetParam] = useState({
    catID: 0,
    username: "NA",
    recCount: "A",
    page: 1
  });

  let message = "";
  let errors = null;

  useEffect(() => {
    setIsLoading(true);
    const timeoutID = window.setTimeout(() => {
      if (isLoading === true) {
        dispatch(retrieveBlogs(param))
          .then((data) => {
            if (data.payload.status === 0) {
              toast.warn(data.data);
            } else {
              setIsLoading(false);

              message = data.payload.message;
              SetTotalRecords(data.payload.totalRecords);
              setIsLoading();
              errors = "Errors";
              SetNumbers(
                Array(data.payload.totalPages)
                  .fill(5)
                  .map((x, i) => i)
              );

              SetarrState(JSON.parse(JSON.stringify(data.payload.items)));
            }
          })
          .catch((e) => {

            toast.warn(e);
          });
      } else {
        setIsLoading(false);
      }
    }, 250);
    return () => window.clearTimeout(timeoutID);
  }, []);

  const blogdata = () => {
    return (
      <Fragment>
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              {arrState.map((blog, index) => (
                <div className="col-md-6 col-lg-6" key={index}>
                  <div
                    className="blog-item"
                    key={index}
                    onClick={() =>
                      handleBlogDetails(
                        blog.t_in_id,
                        blog.t_vc_title,
                        blog.t_vc_img,
                        blog.t_vc_contents,
                        blog.t_vc_category,
                        blog.t_dt_createdDate,
                        blog.t_vc_type
                      )
                    }
                    style={{ cursor: "pointer" }}
                  >
                    <div className="blog-img">

                      {blog.t_vc_type === "I" && (
                        <LazyLoadImageComp
                          src={`${process.env.REACT_APP_BASE_URL_IMAGE}/${blog.t_vc_img}`}
                          alt="Blogs" loading="lazy"
                        />
                      )}
                      {blog.t_vc_type === "V" && (
                        <video
                          src={`${process.env.REACT_APP_BASE_URL_IMAGE}/${blog.t_vc_img}` }
                          controls
                          loop
                          autoPlay
                        ></video>
                      )}
                    </div>
                    <div className="blog-info">
                      <div className="date-box">
                        {moment(blog.t_dt_timestamp).format("DD")}{" "}
                        <span className="month">
                          {moment(blog.t_dt_timestamp).format("MMM")}
                        </span>
                      </div>
                      <div className="title-meta">
                        <h2>{blog.t_vc_title}</h2>
                        <div className="post-meta">
                          <ul>
                            <li>
                              <Icofont icon="icofont-funky-man" /> Categrory :{" "}
                              {blog.t_vc_category}
                            </li>

                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="post-content">
                      <p>{blog.postContent}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-3 col-12">
            {
              <BlogCategories
                totalBlogs={totalRecords}
                handleClick={handleClick}
                param={param}
              ></BlogCategories>
            }
          </div>
        </div>
      </Fragment>
    );
  };

  const changePage = (i) => {
    dispatch(
      retrieveBlogs({
        catID: param.catID,
        username: param.username,
        recCount: param.recCount,
        page: i
      })
    )
      .then((data) => {
        if (data.payload.status === 0) {
          toast.warn(data.data);
        } else {
          setIsLoading(false);

          message = data.payload.message;
          errors = "Errors";
          SetNumbers(
            Array(data.payload.totalPages)
              .fill(5)
              .map((x, i) => i)
          );
          localStorage.removeItem('blogcount');
          if (i == 0) {
            localStorage.setItem('blogcount', 1);
          }
          else {
            localStorage.setItem('blogcount', i);
          }
          SetarrState(JSON.parse(JSON.stringify(data.payload.items)));
        }
      })
      .catch((e) => {

        toast.warn(e);
      });
  };

  const handleClick = (id) => {

    dispatch(
      retrieveBlogs({
        catID: id,
        username: param.username,
        recCount: param.recCount,
        page: 1
      })
    )
      .then((data) => {
        if (data.payload.status === 0) {
          toast.warn(data.data);
        } else {
          setIsLoading(false);

          message = data.payload.message;
          SetTotalRecords(data.payload.totalRecords);
          SetParam({
            catID: id,
            username: param.username,
            recCount: param.recCount,
            page: 1
          });
          errors = "Errors";
          SetNumbers(
            Array(data.payload.totalPages)
              .fill(5)
              .map((x, i) => i)
          );

          SetarrState(JSON.parse(JSON.stringify(data.payload.items)));
          if (id == 0) {
            SetTitle("All Blogs");
          } else {
            SetTitle(data.payload.items[0].t_vc_category);
          }
        }
      })
      .catch((e) => {

        toast.warn(e);
      });
  };

  const handleBlogDetails = (id, title, img, content, category, date, type) => {
    const data = {
      id: id,
      blogtitle: title,
      img: img,
      content: content,
      category: category,
      date: moment(date).format("DD MMM YYYY kk:mm:ss"),
      type: type
    };
    localStorage.removeItem("blogDetails");
    localStorage.setItem("blogDetails", JSON.stringify(data));

    navigate(`/blogdetails`);
  };

  if (arrState.length === 0) {
    <div className="col-md-9 col-12 mb-2">
      <p>
        <i className="fa fa-exclamation-triangle me-2" aria-hidden="true"></i>{" "}
        No blog found for the selected category!
      </p>
    </div>;
  }

  return (
    <>
      <section id="blog" className="our-blog ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <ScrollAnimation animateIn="fadeInUp">
                <div className="section-title">
                  <h2>{sectionTitle}</h2>
                  <p style={{ color: "black" }}>{sectionDescription}</p>
                  <span className="section-title-bg">{SectionbgTitle}</span>
                </div>
              </ScrollAnimation>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 col-md-12 all-post">
              <div className="col-lg-12 pagination-area text-center">
                <ul className="pagination">

                  {numbers.map((data, i) => {
                    return (
                      <li key={i}>
                        <Link className="page-link" onClick={() => changePage(i + 1)}>
                          {" "}
                          {i + 1}{" "}
                        </Link>
                      </li>
                    );
                  })}

                </ul>
              </div>
            </div>
            {blogdata()}

          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
