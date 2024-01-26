import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <div className="mb-4 flex justify-between px-6 py-4 lg:mb-16">
        <img src="/assets/book-icon.svg" />
        <nav className="flex w-4/5 justify-around md:w-4/5 lg:w-3/5 xl:w-2/5">
          <Link to="/" className="home-nav-link">
            Home
          </Link>
          <Link to="/tarkeeb" className="home-nav-link">
            Nahw
          </Link>
          <Link className="home-nav-link" to="/tarkeeb-practice">
            Vocabulary
          </Link>
          <Link className="home-nav-link" to="/">
            Sarf
          </Link>
          <Link className="home-nav-link" to="/progress">
            Progress
          </Link>
          <input
            className="hidden rounded-md border-[1px] border-gray-300 px-2 py-1 text-sm focus:outline-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 md:inline"
            type="text"
            placeholder="Search..."
          />
        </nav>
      </div>
    </>
  );
}
