import Link from "next/link";

const Home = () => {
  return (
    <div>
      <Link href="/editor">
        <a>Editor</a>
      </Link>
    </div>
  );
};

export default Home;
