/* ---------------------------------------------------------------------------------------------------------*/

import React, { useState } from "react";
import "./CreatePost.css";
import { supabase } from "../client";

const CreatePost = () => {
  const [post, setPost] = useState({
    title: "",
    author: "",
    description: "",
    beauty: "", // Default crewmate attribute values
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const createPost = async (event) => {
    event.preventDefault();

    const { error } = await supabase
      .from("Posts")
      .insert({
        title: post.title,
        author: post.author,
        description: post.description,
        beauty: post.beauty,
      })
      .select();

    if (error) {
      console.log(error);
    }

    window.location = "/home";
  };

  return (
    <div>
      <form>
        <label>Name</label> <br />
        <input
          type="text"
          id="title"
          name="title"
          value={post.title}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Occupation</label>
        <br />
        <input
          type="text"
          id="author"
          name="author"
          value={post.author}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Bio</label>
        <br />
        <textarea
          name="description"
          rows="5"
          cols="50"
          id="description"
          value={post.description}
          onChange={handleChange}
        ></textarea>
        <br />
        <label>Am I cute?</label>
        <input
          type="radio"
          name="beauty"
          value="ugly"
          checked={post.beauty === "ugly"}
          onChange={handleChange}
          style={{ fontSize: "12px" }}
        />
        Ugly
        <input
          type="radio"
          name="beauty"
          value="cute"
          checked={post.beauty === "cute"}
          onChange={handleChange}
          style={{ fontSize: "12px" }}
        />
        Cute
        <br />
        <input type="submit" value="Submit" onClick={createPost} />
      </form>
    </div>
  );
};

export default CreatePost;
