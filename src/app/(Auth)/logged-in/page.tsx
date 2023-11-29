import Link from "next/link";

const LoggedIn = () => {
  return (
    <div>
      <h1>LoggedIn</h1>
      <Link href={"/home"}>Go To Home</Link>
    </div>
  );
};

export default LoggedIn;
