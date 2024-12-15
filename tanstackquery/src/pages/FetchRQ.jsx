import { fetchPosts } from "../API/Api";
import { useState, useEffect } from "react";

export const FetchRQ = () => {
  const [posts, setPosts] = useState([]);

  const getPostData = async () => {
    try {
      const res = await fetchPosts();
      setPosts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPostData();
  }, []);

  !posts ?? <h1> Loading... </h1>;

  return (
    <>
      <h1>
        <ul>
          {posts.map((current) => {
            const { title, body, id } = current;

            return <li key={id} >{title}</li>;
          })}
        </ul>
      </h1>
    </>
  );
};
