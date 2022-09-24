import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
//import get post Action from actions
import { handlePostLists } from "../redux/actions/index";
export function BlogList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handlePostLists());
  }, []);

  const _GET_POST_LISTS = useSelector((e) => e?.post);

const handle={
    serach:()=>{
        
        
     console.log();
    },
};
  return (
    <div className="ArticleContainer">
      <h1>Simple blog with React</h1>
      <div className="AddArticle">
        <div className="two columns">
          <Link to="/addBlog">
            <button className="button-primary">Add New Blog</button>
          </Link>
        </div>
        <div className="two columns">
          
        <input
            className="u-full-width"
            type="text"
            placeholder="Blog Id"
            id="nameInput"
            onChange={(e) => {
              handle.serach(e?.target.value,);
            }}
           
          />
         
        </div>
      </div>
      <div class="grid-container">
        {_GET_POST_LISTS?.loading ? (
          <p>Loading Posts...</p>
        ) : (
          _GET_POST_LISTS?.getPost?.map((post, index) => (
            <article key={index}>
              {console.log("getPost", _GET_POST_LISTS)}
              <h2>
                {index + 1}. {post.title}
              </h2>
              <p>{post.body.substr(0, 100)}...</p>
              <button
                className="delete"
                onClick={() => {
                  dispatch({ type: "DELETE_POSTS_LIST", payload: post.id });
                }}
              >
                Delete
              </button>
              <Link to={`/editBlog`}>
                    <button
                      onClick={() => {
                        dispatch({ type: "POST_ID", payload: post?.id });
                      }}
                    >
                      Edit
                    </button>
                  </Link>
            </article>
          ))
        )}
      </div>
    </div>
  );
}
