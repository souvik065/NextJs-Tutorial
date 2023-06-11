import Layout from "../layout/layout";

export default function Home({ posts }) {
  return (
    <Layout home>
      <h1>{posts.title}</h1>
      <p>{posts.description}</p>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = {
    title: "new Post",
    description: "Post Data from state",
  };

  return {
    props: {
      posts,
    },
  };
}
