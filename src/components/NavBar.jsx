const NavBar = (props) => {
  const navItems = ["Home", "Products", "Details"];
  const toUpperNavElements = (text) => {
    return text.toUpperCase();
  };
  const navItemsStyled = navItems.map((item) => toUpperNavElements(item)); // ["HOME", "PRODUCTS", "DETAILS"];
  console.log(props.children);

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
              <a class="nav-link" href="#">
                Features
              </a>
              <a class="nav-link" href="#">
                Pricing
              </a>
              <a class="nav-link disabled">Disabled</a>
            </div>
          </div>
          {props.WidgetCart()}
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
