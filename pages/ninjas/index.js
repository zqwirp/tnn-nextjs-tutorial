import styles from "../../styles/Ninjas.module.css";

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: { ninjas: data }, // will be passed to the page component as props
  };
}

export default function Ninjas({ ninjas }) {
  return (
    <>
      <h1>All Ninjas</h1>
      {ninjas.map((ninja) => (
        <div key={ninja.id}>
          <a className={styles.single}>
            <h3>{ninja.name}</h3>
          </a>
        </div>
      ))}
    </>
  );
}
