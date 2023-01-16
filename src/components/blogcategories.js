import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
/**
 * @componentName Blog Categories
 * @description This components will display list of Blog Categories
 */

/// Import Slice Component 
import { retrieveCategories } from "../slices/BlogCategory";


const BlogCategories = ({ handleClick }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [arrState, SetarrState] = useState([]);
  let message = "";

  useEffect(() => {
    setIsLoading(true);
    const timeoutID = window.setTimeout(() => {
      if (isLoading === true) {
        dispatch(retrieveCategories())
          .then((data) => {
            if (data.payload.status === 0) {
              toast.warn(data.data);
            } else {
              setIsLoading(false);

              message = data.payload.message;

              SetarrState(JSON.parse(JSON.stringify(data.payload.data)));
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

  const categoriedata = () => {
    return arrState.map((categories, index) => (
      <li className="list-group-item" key={index} onClick={() => handleClick(categories.t_in_id)}>
        {categories.t_vc_category}
        <span className="badge bg-secondary ms-2">
          {categories.cnt}
        </span>
      </li>
    ))
  };

  return (
    <div className="side-widget">
      <h3>Categories</h3>
      <ul className="list-group">
        {categoriedata()}
      </ul>
    </div>
  )
}

export default BlogCategories