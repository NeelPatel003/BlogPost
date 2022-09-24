import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { handleAddPosts } from "../redux/actions/index";
export function AddBlog() {
  const dispatch = useDispatch();
  const history = useNavigate();

  const [allValue, setAllValue] = useState({
    title: "",
    id: "",
    body: "",
  });

  const handle = {
    change: (e, name) => {
      setAllValue({ ...allValue, [name]: e });
    },
    submit:()=>{
        const passData = {
            title: allValue?.title,
            id: allValue?.id,
            body: allValue?.body,
          };
          dispatch(
            handleAddPosts(passData)
          );
          history("/");
    }
  };


  return (
    <div className="container">
      <div className="row">
        <h1>Add Blog</h1>
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
            Add Blog
          </button>
        </div>
      </div>
    </div>
  );
}
