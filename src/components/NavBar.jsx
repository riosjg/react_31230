import WidgetCart from "./WidgetCart";
import { Link } from "react-router-dom";

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
              <a className="nav-link active" aria-current="page" href="">
                Home
              </a>
              <a className="nav-link" href="">
                Features
              </a>
              <a className="nav-link" href="">
                Pricing
              </a>
              <a className="nav-link disabled">Disabled</a>
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
