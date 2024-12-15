import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <section className="header">
        <nav>
          <p>
            <NavLink to={"/"}>Hii! It's Pran</NavLink>
          </p>

          <p>
            <ul className="nav-list">
              <li>
                <NavLink to={"/"} style={navigator} viewTransition={true}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/data/using/old"} viewTransition={true}>
                  Old Data
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/data/using/rq"}
                  viewTransition={true}
                  aria-valuemin={true}
                >
                  React Query Fetch Data
                </NavLink>
              </li>
            </ul>
          </p>
        </nav>
      </section>
    </>
  );
};

export default Header;
