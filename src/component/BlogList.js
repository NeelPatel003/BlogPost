import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
//import get post Action from actions
import { handlePostLists } from "../redux/actions/index";
import Highlighter from "react-highlight-words";
export function BlogList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handlePostLists());
  }, []);

  const _GET_POST_LISTS = useSelector((e) => e?.post);

  const [search,setSearch]=useState()

  return (
    <div className="ArticleContainer">
      <h1>Simple blog with React</h1>
      <div className="AddArticle">
        <div className="two columns">
          <Link to="/addBlog">
            <button className="button-primary">Add New Blog</button>
          </Link>
        </div>
        <div className="">
          
        <input
            className="u-full-width"
            type="text"
            placeholder="Blog Id"
            id="nameInput"
            onChange={(e) => {
                setSearch(e?.target.value,);
            }}
           
          />
         
        </div>
      </div>
      <div class="grid-container">
      
        {  _GET_POST_LISTS?.getPost?.map((post, index) => (
            <article key={index}>
              {console.log("getPost", _GET_POST_LISTS)}
              <h2>
                {index + 1}. {post.title}
              </h2>
              <p>{post.body.substr(0, 100)}...</p>
              <Highlighter
    highlightClassName="YourHighlightClass"
    searchWords={[search]}
    autoEscape={true}
    textToHighlight={post.body}
  />
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
          ))}
       
      </div>
    </div>
  );
}
