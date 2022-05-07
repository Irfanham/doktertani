import "./feed.css";
import Post from "../post/Post";
import Content from "../content/Content";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("/posts/profile/" + username)
        : await axios.get("posts/timeline/61137470dc6f2c48de2f7d4e");
      setPosts(res.data);
    };
    fetchPosts();
  }, [username]);

  return (
    <div className="feedContainer">
      <div className="feedWrapper">
        <Post />
        {posts.map((i) => (
          <Content key={i._id} content={i} />
        ))}
      </div>
    </div>
  );
}
