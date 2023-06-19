const baseURL = "http://localhost:3000/api/posts";

// Endpoint: http://localhost:3000/api/posts
export default async function getPost(params) {
  const res = await fetch(`${baseURL}`);
  const posts = await res.json();

  return posts;
}
