import { Link } from "react-router-dom";
import WidgetCart from "./WidgetCart";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link
                style={{ textDecoration: "none", margin: "1rem" }}
                to={"category/instruments"}
              >
                Instruments
              </Link>
              <Link
                style={{ textDecoration: "none", margin: "1rem" }}
                to={"category/hardware"}
              >
                Hardware
              </Link>
            </div>
          </div>
          <WidgetCart />
        </div>
      </nav>
    </>
  );
};

export default NavBar;

// class NavBar extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     const displayName = this.props.name.toUpperCase();
//     return (
//       <nav>
//         <p>{displayName}</p>
//         <p>Home</p>
//         <p>Products</p>
//         <p>Details</p>
//       </nav>
//     );
//   }
// }

// export default NavBar;
