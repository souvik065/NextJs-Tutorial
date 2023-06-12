import useSWR, { SWRConfig } from "swr";

const fetcher = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }
};

export default function Users({ fallback }) {
  return <SWRConfig value={{ fallback }}>{getData()}</SWRConfig>;
}

export async function getStaticProps() {
  try {
    const res = await fetch("http://localhost:3000/api/user");
    const user = await res.json();

    return {
      props: {
        fallback: {
          "/api/users": users,
        },
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

  if (error) return <div>Error Fetching data</div>;

  if (!data) return <div>Loading...</div>;

  return (
    <article>
      {console.log("Users Props:", data)}
      {data.map((u) => {
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

<SWRConfig
  value={{
    refreshInterval: 3000,
    fetcher: (resource, init) =>
      fetch(resource, init).then((res) => res.json()),
  }}
></SWRConfig>;
