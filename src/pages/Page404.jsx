import { Link } from "react-router-dom";

const Page404 = () => {

  return (
    <section className="flex flex-col items-center justify-center h-[calc(100dvh-80.8px-80px)]">
      <h1 className="text-5xl">
        404
      </h1>
      <span className="text-black">
        Go to
        <Link className="p-1 underline underline-offset-3" to="/">
          Dashboard
        </Link>
      </span>
    </section>
  );
}

export default Page404;