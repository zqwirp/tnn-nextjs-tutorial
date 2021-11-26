export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export default function Details() {
  return (
    <>
      <h1>Details Page</h1>
    </>
  );
}
