import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <div className="mb-4 flex justify-between bg-primary px-6 py-4 text-white lg:mb-16 lg:py-6">
        <a href="/nahw-notes-app/">
          <img src="assets/book-icon.svg" />
        </a>
        <nav className="flex w-4/5 justify-around md:w-4/5 lg:w-3/5 xl:w-2/5">
          <Link to="/nahw-notes-app/" className="home-nav-link">
            Home
          </Link>
          <Link to="/nahw-notes-app/tarkeeb" className="home-nav-link">
            Nahw
          </Link>
          <Link className="home-nav-link" to="/nahw-notes-app/vocabulary">
            Vocabulary
          </Link>
          <Link className="home-nav-link" to="/nahw-notes-app/tarkeeb-practice">
            Sarf
          </Link>
          <Link className="home-nav-link" to="/nahw-notes-app/progress">
            Progress
          </Link>
          <input
            className="hidden rounded-md border-[1px] border-gray-300 px-2 py-1 text-sm text-black focus:outline-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 md:inline"
            type="text"
            placeholder="Search..."
          />
        </nav>
      </div>
    </>
  );
}
