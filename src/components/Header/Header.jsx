import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">
            find your book of choice.
          </h2>
          <br />
          <p className="header-text fs-18 fw-3">
            Our website aims to be a one-stop shop for book lovers, offering an
            extensive collection of titles across various genres. From classic
            literature to contemporary fiction, non-fiction, children's books,
            and more, we strive to cater to diverse interests and reading
            preferences. Whether you're searching for bestsellers, niche reads,
            or simply exploring new authors, our website provides a vast
            selection to satisfy your literary cravings.
          </p>
          <SearchForm />
        </div>
      </header>
    </div>
  );
};

export default Header;
