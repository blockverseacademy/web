import React, { useState, useEffect, Fragment } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Icofont from "react-icofont";
import { HashLink } from 'react-router-hash-link';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";


import avatar from "../assets/images/avatar.webp";

//Import Component
import NavBarOther from "../components/navbarother";
import Footer from "../components/footer";


/// Import Slice Component 
import {
  retrieveBlogsComments,
  CreateBlogsComments
} from "../slices/Blogcomments";
import { retrieveBlogs } from "../slices/Blogs";
import {
  CreateReactions,
  retrieveBlogsReactions
} from "../slices/BlogReactions";



///Include Third Party Components 

import moment from "moment";

/// Custom Stylesheet
import './blogs.css'


const Blogs = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id, blogtitle, img, content, category, date, type } = JSON.parse(
    localStorage.getItem("blogDetails")
  );

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const [modalShow, setModalShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [arrState, SetarrState] = useState([]);
  const [arrComments, SetarrComments] = useState([]);
  const [numbers, SetNumbers] = useState([]);
  const [totalRecords, SetTotalRecords] = useState(0);
  const [title, SetTitle] = useState("All Blogs");
  const [like, SetLike] = useState(0);
  const [love, SetLove] = useState(0);
  const [funny, SetFunny] = useState(0);
  const [sad, SetSad] = useState(0);
  const [info, SetInfo] = useState(0);

  const [param, SetParam] = useState({
    catID: 0,
    username: "NA",
    recCount: "A",
    page: 1
  });

  let message = "";
  let errorsDetails = null;

  useEffect(() => {
    const timeoutID = window.setTimeout(() => {
      dispatch(retrieveBlogsComments({ BlogID: id }))
        .then((data) => {
          if (data.payload.status === 0) {
            toast.warn("No Data Found");
          } else {
            SetarrComments(JSON.parse(JSON.stringify(data.payload.data)));
          }
        })
        .catch((e) => {
          console.log(e);
          toast.warn(e);
        });

      // Get Blog Rections

      dispatch(retrieveBlogsReactions({ BlogID: id }))
        .then((data) => {
          if (data.payload.status === 0) {
            toast.warn("No Data Found");
          } else {
            if (data.payload.data.length > 0) {
              SetLike(data.payload.data[0].t_in_likes);
              SetFunny(data.payload.data[0].t_in_funny);
              SetSad(data.payload.data[0].t_in_sad);
              SetInfo(data.payload.data[0].t_in_informative);
              SetLove(data.payload.data[0].t_in_love);
            }

            // console.log(JSON.parse(JSON.stringify(data.payload.data)));
          }
        })
        .catch((e) => {
          console.log(e);
          toast.warn(e);
        });
    }, 250);
    return () => window.clearTimeout(timeoutID);
  }, []);

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
          toast.warn("No Data Found");
        } else {
          setIsLoading(false);
          console.log(data.payload);
          message = data.payload.message;
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
        console.log(e);
        toast.warn(e);
      });
  };

  const handleClick = (id) => {
    console.log(param);
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
          toast.warn("No Data Found");
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
          errorsDetails = "Errors";
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
        console.log(e);
        toast.warn(e);
      });
  };

  const onSubmit = (data) => {

    let catID = id;
    dispatch(
      CreateBlogsComments({
        BlogID: catID,
        comments: data.comment,
        commentedBy: data.commentby
      })
    )
      .then((data) => {

        if (data.payload.status === 0) {
          toast.warn("No Data Found");
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

          console.log(JSON.parse(JSON.stringify(data.payload.data)));
          SetarrComments(JSON.parse(JSON.stringify(data.payload.data)));
        }
      })
      .catch((e) => {
        console.log(e);
        toast.warn(e);
      });
  };

  const errorMessage = (message) => {
    return <p style={{ color: "red" }}>{message}</p>;
  };

  const insertReactions = (param) => {
    const timeoutID = window.setTimeout(() => {
      dispatch(CreateReactions(param))
        .then((data) => {
          if (data.payload.status === 0) {
            toast.warn("No Data Found");
          } else {
            console.log(data.payload.data);
          }
        })
        .catch((e) => {
          console.log(e);
          toast.warn(e);
        });
    }, 250);
    return () => window.clearTimeout(timeoutID);
  };

  const handleinfo = () => {
    SetInfo(info + 1);
    insertReactions({
      BlogID: id,
      likes: like,
      love: love,
      funny: funny,
      sad: sad,
      info: info + 1
    });
  };
  const handlelike = () => {
    SetLike(like + 1);
    insertReactions({
      BlogID: id,
      likes: like + 1,
      love: love,
      funny: funny,
      sad: sad,
      info: info
    });
  };
  const handlelove = () => {
    SetLove(love + 1);
    insertReactions({
      BlogID: id,
      likes: like,
      love: love + 1,
      funny: funny,
      sad: sad,
      info: info
    });
  };
  const handlefunny = () => {
    SetFunny(funny + 1);
    insertReactions({
      BlogID: id,
      likes: like,
      love: love,
      funny: funny + 1,
      sad: sad,
      info: info
    });
  };
  const handlesad = () => {
    SetSad(sad + 1);
    insertReactions({
      BlogID: id,
      likes: like,
      love: love,
      funny: funny,
      sad: sad + 1,
      info: info
    });
  };

  const handleBack = () => {
    navigate("/home#blog");
  };
  return (
    <Fragment>

      <NavBarOther />


      <section id="blogs" className="our-blog main-blog">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-md-6 col-sm-12 col-lg-6">
                  <div className="blog-details">
                    <div className="img-section">
                      <HashLink
                        to="/home#blog"
                        scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })} className="btn-a" href="#"
                      >
                        <div className="button">

                          <Icofont icon="icofont-long-arrow-left" />
                          Back to Blogs
                          <div className="mask" />
                        </div>
                      </HashLink>
                      <br /><br />
                      {type === "I" && (
                        <img
                          src={`${process.env.REACT_APP_BASE_URL_IMAGE}/${img}`}
                        />
                      )}
                      {type === "V" && (
                        <video
                          src={`${process.env.REACT_APP_BASE_URL_IMAGE}/${img}`}
                          controls
                          loop
                          autoPlay
                        ></video>
                      )}

                    </div>

                    <div className="blog-info">
                      <div className="date-box">
                        {moment(date).format("DD")}{" "}
                        <span className="month">
                          {" "}
                          {moment(date).format("MMM")}
                        </span>
                      </div>
                      <div className="title-meta">
                        <h2>{blogtitle}</h2>
                        <div className="post-meta">
                          <ul>
                            <li>
                              <Icofont icon="icofont-funky-man" /> Category:{" "}
                              {category}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <hr className="mt-4" />
                    <p>{content}</p>
                  </div>
                </div>
                <div className="col-md-6">

                  <div className="post-content">


                    <div className="sharing-link">
                      <a className="btn reactBtn" onClick={handlelike}>
                        <i className="fa fa-thumbs-o-up" aria-hidden="true" />
                        &nbsp;Like&nbsp;
                        <span className="badge bg-secondary">{like}</span>
                      </a>
                      <a className="btn reactBtn" onClick={handlelove}>
                        <i className="fa fa-heart-o" aria-hidden="true" />
                        &nbsp; Love&nbsp;
                        <span className="badge bg-secondary">{love}</span>
                      </a>
                      <a className="btn reactBtn" onClick={handlefunny}>
                        <i className="fa fa-smile-o" aria-hidden="true" />
                        &nbsp;Funny&nbsp;
                        <span className="badge bg-secondary">{funny}</span>
                      </a>

                      <a className="btn reactBtn" onClick={handleinfo}>
                        <i className="fa fa-lightbulb-o" aria-hidden="true" />
                        &nbsp;Informative&nbsp;
                        <span className="badge bg-secondary">{info}</span>
                      </a>
                    </div>
                  </div>



                  <div className="comments-form">
                    <h3 className="comments-title">Leave a Comments</h3>
                    <form
                      className="row g-3 mb-3"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <div className="row">
                        <div className="col-md-12 col-12">
                          <label>Pleae enter your name</label>
                          <input
                            type="text"
                            name="commentby"
                            id="commentby"
                            rows={3}
                            className="form-control"
                            placeholder="Pleae enter your name"
                            {...register("commentby", {
                              required: true
                            })}
                          />
                          {errors.comment && errorMessage("Name is required")}
                        </div>
                        <div className="col-md-12 col-12">
                          <label>Pleae enter your comments</label>
                          <textarea
                            type="text"
                            name="comment"
                            id="comment"
                            rows={3}
                            className="form-control"
                            placeholder="Write comment..."
                            {...register("comment", {
                              required: true
                            })}
                          />
                          {errors.comment &&
                            errorMessage("Comments are required")}
                        </div>
                      </div>
                      <div className="col-md-4 col-4">
                        <button
                          type="submit"
                          className="btn"
                          style={{ backgroundColor: "#fe5619", color: "white" }}
                        >
                          Post Reply
                        </button>

                      </div>
                    </form>
                    <div className="col-md-12 col-12">
                      <h3 className="comments-title">Comments on Post</h3>

                      {arrComments &&
                        arrComments.map((data, i) => {
                          return (
                            <div
                              className="row comments-section mb-3"
                              key={i}
                            >
                              <div className="col-md-2 col-3">
                                <div className="img">
                                  <img
                                    src={avatar}
                                    alt=""
                                  />
                                </div>
                              </div>

                              <div className="col-md-8 col-6">
                                <i
                                  className="fa fa-comment me-1"
                                  aria-hidden="true"
                                ></i>
                                <small>{data.t_vc_commentedBy}</small>

                                <small>
                                  {moment(data.t_dt_timestamp).format(
                                    "DD MMM YYYY kk:mm:ss"
                                  )}
                                </small>
                                <p>{data.t_vc_comments}</p>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </div>
            </div>



          </div>
        </div>
      </section>


      <Footer />
    </Fragment>
  );
};

export default Blogs;
