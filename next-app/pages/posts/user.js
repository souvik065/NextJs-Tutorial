import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Users() {
  const { user, isLoading, isError } = getData();

  if (isError) return <div>Error Fetching data</div>;

  if (!isLoading) return <div>Loading...</div>;

  return (
    <article>
      {console.log("Users Props:", user)}
      {user.map((u) => {
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
    const res = await fetch("http://localhost:3000/api/users");
    const user = await res.json();

    return {
      props: {
        user: user,
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

function getData() {
  const { data, error } = useSWR("http://localhost:3000/api/users", fetcher);

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
}
