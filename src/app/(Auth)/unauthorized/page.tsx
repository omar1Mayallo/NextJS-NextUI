import Link from "next/link";
import React from "react";

const Unauthorized = () => {
  return (
    <div>
      <h1>
        You don't have permissions to this page,{" "}
        <Link href={"/home"}>Go Back</Link>
      </h1>
    </div>
  );
};

export default Unauthorized;
