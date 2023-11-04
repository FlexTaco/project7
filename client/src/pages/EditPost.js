import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./EditPost.css";
import { supabase } from "../client";

const EditPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});

  async function deletePost(event) {
    event.preventDefault();

    await supabase.from("Posts").delete().eq("id", id);

    window.location = "/";
  }

  useEffect(() => {
    async function fetchPost() {
      const { data } = await supabase
        .from("Posts")
        .select()
        .eq("id", id)
        .single();

      // set state of posts
      setPost(data);
    }

    fetchPost();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const updatePost = async (event) => {
    event.preventDefault();

    await supabase
      .from("Posts")
      .update({
        title: post.title,
        author: post.author,
        description: post.description,
        beauty: post.beauty,
      })
      .eq("id", id);

    window.location = "/home";
  };

  return (
    <div>
      <form onSubmit={updatePost}>
        <label for="title">Name</label> <br />
        <input
          type="text"
          id="title"
          name="title"
          value={post.title}
          onChange={handleChange}
        />
        <br />
        <br />
        <label for="author">Occupation</label>
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
        <label for="description">Bio</label>
        <br />
        <textarea
          rows="5"
          cols="50"
          id="description"
          name="description"
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
        <input type="submit" value="Submit" />
        <button className="deleteButton" onClick={deletePost}>
          Delete
        </button>
      </form>
    </div>
  );
};

export default EditPost;
