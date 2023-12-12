import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Alert from "./component/form/Alert";

function App() {
  const [jwt, setJwt] = useState("");
  const [alertMsg, setAlertMsg] = useState("");
  const [className, setClassName] = useState("d-none");

  const navigate = useNavigate();

  const logout = () => {
    setJwt("");
    navigate("/login");
  };

  useEffect(() => {
    if (jwt === "") {
      const requestOption = {
        method: "GET",
        credentials: "include",
      };

      fetch(`/refresh`, requestOption)
        .then((response) => response.json())
        .then((data) => {
          if (data.access_token) {
            setJwt(data.access_token);
          }
        })
        .catch((error) => {
          console.log("Couldn't get token");
        });
    }
  }, [jwt]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="mt-3">Go Watch Movie!</h1>
          </div>
          <div className="col text-end">
            {jwt === "" ? (
              <Link to="/login">
                <span className="badge bg-success">Login</span>
              </Link>
            ) : (
              <Link to="#!" onClick={logout}>
                <span className="badge bg-danger">Logout</span>
              </Link>
            )}
          </div>
          <hr className="mb-3" />
        </div>
        <div className="row">
          <div className="col-md-2">
            <nav>
              <div className="list-group">
                <Link to="/" className="list-group-item list-group-item-action">
                  Home
                </Link>
                <Link
                  to="/movies"
                  className="list-group-item list-group-item-action"
                >
                  Movies
                </Link>
                <Link
                  to="/genre"
                  className="list-group-item list-group-item-action"
                >
                  Genre
                </Link>
                {jwt !== "" && (
                  <>
                    <Link
                      to="/admin/movie/0"
                      className="list-group-item list-group-item-action"
                    >
                      Add Movies
                    </Link>
                    <Link
                      to="/admin"
                      className="list-group-item list-group-item-action"
                    >
                      Manage Catalogue
                    </Link>
                    <Link
                      to="/graphql"
                      className="list-group-item list-group-item-action"
                    >
                      GraphQL
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </div>
          <div className="col-md-10">
            <Alert className={[className]} message={[alertMsg]} />
            <Outlet
              context={{
                setJwt,
                setClassName,
                setAlertMsg,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
