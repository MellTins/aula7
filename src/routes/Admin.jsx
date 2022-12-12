import imovelfetch from "../axios/config";

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import "./Admin.css";
import axios from "axios";

const Admin = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await imovelfetch.get("/Casas");

      const data = response.data;

      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deletePost = async (id) => {
    await imovelfetch.delete(`/Casas/${id}`);
    await imovelfetch.delete(`/Apartamentos/${id}`);
    await imovelfetch.delete(`/Lançamentos/${id}`);

    const filteredPosts = posts.filter((post) => post.id !== id);

    setPosts(filteredPosts);
  };

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div className="admin">
      <h1>Gerenciar posts</h1>
      {posts.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        posts.map((post) => (
          <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <div className="actions">
              <Link className="btn edit-btn" to={`/posts/edit/${post.id}`}>
                Editar
              </Link>
              <button
                className="btn delete-btn"
                onClick={() => deletePost(post.id)}
              >
                Excluir
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Admin;
