import { getAllPost } from "../lib/helper";
//import { getSataticProps, getStaticPaths } from "next";
import { useRouter } from "next/router";

export default function Post({ post }) {
  return (
    <article>
      {post.map((p) => (
        <div key={p.id}>
          <h1>{p.id}</h1>
          <h1>{p.title}</h1>
          <h1>{p.description}</h1>
        </div>
      ))}
    </article>
  );
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const post = getAllPost(id);

  return {
    props: { post },
  };
}

export async function getStaticPaths() {
  const posts = getAllPost();

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}
