import { getAllPost } from "../lib/helper";
import { useRouter } from "next/router";

export default function Post({ post }) {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  return (
    <article>
      <button onClick={() => router.push("user")}>post</button>
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
