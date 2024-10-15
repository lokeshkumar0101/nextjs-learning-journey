import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="w-full py-4 bg-teal-500 text-white text-3xl text-center font-bold flex justify-between px-10">
        <h3>Home</h3>
        <ul>
          <Link
            className="text-lg text-white font-semibold pr-5"
            href="/about"
          >
            About
          </Link>

          <Link
            className="text-lg text-white font-semibold"
            href="/contact"
          >
            Contact
          </Link>
        </ul>
      </div>
    </>
  );
};

export default page;
