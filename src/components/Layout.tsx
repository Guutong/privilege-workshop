import { classNames } from "primereact/utils";
import { NavLink, Outlet } from "react-router-dom";

type MenuItemProps = { name: string; icon: string; path: string };
function MenuItem({ name, icon, path }: MenuItemProps) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        classNames({
          "text-bluegray-50 bg-bluegray-900": isActive,
          "flex border-round w-full p-3 cursor-pointer text-bluegray-100 hover:text-bluegray-50 hover:bg-bluegray-900 no-underline mb-2":
            true,
        })
      }
    >
      <i className={`pi mr-2 ${icon}`} style={{ fontSize: "1.2rem" }}></i>
      <span className="font-medium">{name}</span>
    </NavLink>
  );
}

export function Layout() {
  return (
    <div className="flex relative">
      <div
        className="flex flex-column bg-bluegray-700 h-screen"
        style={{ width: "280px" }}
      >
        <ul className="list-none p-3">
          <li>
            <MenuItem path={"/dashboard"} name="Dashboard" icon="pi-home" />
          </li>
          <li>
            <MenuItem
              path={"/privilege"}
              name="Privilege"
              icon="pi-credit-card"
            />
          </li>
          <li>
            <MenuItem path={"/coupon"} name="Coupon" icon="pi-ticket" />
          </li>
          <li>
            <MenuItem path={"/users"} name="Users" icon="pi-users" />
          </li>
          <li>
            <MenuItem path={"/logout"} name="Logout" icon="pi-sign-out" />
          </li>
        </ul>
      </div>
      <div className="flex flex-column p-4">
        <Outlet />
      </div>
    </div>
  );
}
