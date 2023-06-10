import Layout from "../layout/layout";

export default function Page(props) {
  return (
    <Layout>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </Layout>
  );
}

export async function getServerSideProps() {
  const posts = {
    title: "Daily Tution Post ",
    description: "Test Description",
  };

  return {
    props: posts,
  };
}
