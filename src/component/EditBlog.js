import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {handleUpdatePosts } from "../redux/actions/index";
export function EditBlog() {
  const dispatch = useDispatch();
  const history = useNavigate();
  const POST_ID = useSelector((e) => e?.post?.postId);
  //get users data from reducers(store) and check update id and user id
  const POST = useSelector((e) =>
    e?.post?.getPost.find((ele) => ele.id === POST_ID)
  );

  const [allValue, setAllValue] = useState({
    title: POST?.title,
    id: POST?.id,
    body: POST?.body
  });

  const handle = {
    change: (e, name) => {
      setAllValue({ ...allValue, [name]: e });
    },
    submit:()=>{
        const passData = {
            id: POST_ID,
            title: allValue?.title,
            body: allValue?.body,
          };
          dispatch(
            handleUpdatePosts(passData)
          );
          history("/");
    }
  };


  return (
    <div className="container">
      <div className="row">
        <h1>Edit Blog</h1>
      </div>
      <div className="row">
        <div className="">
          <label for="nameInput">ID</label>
          <input
            className="u-full-width"
            type="number"
            placeholder="Blog Id"
            id="nameInput"
            onChange={(e) => {
              handle.change(e?.target.value, "id");
            }}
            value={allValue?.id}
          />
          <label for="emailInput">Title</label>
          <input
            className="u-full-width"
            type="text"
            placeholder="Blog Title"
            id="emailInput"
            onChange={(e) => {
              handle.change(e?.target.value, "title");
            }}
            value={allValue?.title}
          />
          <label for="emailInput">Body</label>
         <textarea id="w3review" className="u-full-width" rows="4" cols="100"  onChange={(e) => {
              handle.change(e?.target.value, "body");
            }}
            value={allValue?.body}></textarea>
          
          <button onClick={()=> handle.submit()} className="button-primary">
            Edit Blog
          </button>
        </div>
      </div>
    </div>
  );
}
