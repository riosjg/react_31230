import StyledText from "./StyledText";

const NavBar = (props) => {
  const navItems = ["Home", "Products", "Details"];
  const toUpperNavElements = (text) => {
    return text.toUpperCase();
  };
  const navItemsStyled = navItems.map((item) => toUpperNavElements(item)); // ["HOME", "PRODUCTS", "DETAILS"];
  console.log(navItemsStyled);
  //   const homeText = toUpperNavElements("Home");
  //   const productsText = toUpperNavElements("Products");
  //   const detailsText = toUpperNavElements("Details");
  const displayName = props.children.toUpperCase();

  return (
    <>
      <nav>
        <p>{displayName}</p>
        {navItemsStyled.map((item) => (
          <StyledText text={item} />
        ))}
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
