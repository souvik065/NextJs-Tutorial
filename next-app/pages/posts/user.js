import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Users({ users }) {
  const { data, error } = useSWR("http://localhost:3000/api/user", fetcher);

  if (error) return <div>Error Fetching data</div>;

  if (!data) return <div>Loading...</div>;

  return (
    <article>
      {console.log("Users Props:", users)}
      {users.map((u) => {
        return (
          <div key={u.id}>
            <p></p>
            <h1>{u.name}</h1>
          </div>
        );
      })}
    </article>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch("http://localhost:3000/api/user");
    const data = await res.json();

    return {
      props: {
        users: data,
      },
    };
  } catch (error) {
    console.error(error);
    // Handle the error gracefully or display an appropriate error message
    return {
      props: {
        error: "An error occurred while fetching user data",
      },
    };
  }
}
