import { Link } from "react-router";

export const BreadCrumb = () => {
  return (
    <div className="breadcrumbs text-sm">
      <ul>
        <li className="text-black">  
          <Link to={"/"}>
            <a>Home</a>
          </Link>
        </li>
        <li className="text-gray-500">
          Product Details
        </li>
      </ul>
    </div>
  );
};
