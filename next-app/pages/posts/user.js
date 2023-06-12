import useSWR from "swr";

const fetcher = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }
};

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
  const { data, error } = useSWR("http://localhost:3000/api/users", fetcher, {
    onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
      if (error.status === 404) return;

      if (key === "/api/user") return;

      if (retryCount >= 10) return;

      setTimeout(() => revalidate({ retryCount }), 5000);
    },
  });

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
}
