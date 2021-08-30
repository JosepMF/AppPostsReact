import { useEffect, useState } from "react";

export function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => setPosts(json));

    console.log("posts:", posts);
  }, []);

  return (
    <table className="table table-secondary table-striped">
      <thead className="text-center">
        <tr>
          <th>title</th>
          <th>description</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((e) => (
          <tr>
            <td>{e.title}</td>
            <td>{e.body}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
