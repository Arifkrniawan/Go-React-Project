import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Alert from "./component/form/Alert";

function App() {
  const [jwt, setJwt] = useState("");
  const [alertMsg, setAlertMsg] = useState("");
  const [className, setClassName] = useState("d-none");

  const [ticking, setTicking] = useState(false);
  const [tickingInterval, setTickingInterval] = useState();

  const navigate = useNavigate();

  const logout = () => {
    const requestOptions = {
      method: "GET",
      credentials: "include",
    }

    fetch(`/logout`, requestOptions)
    .catch(error => {
      console.log("error logging out", error)
    })
    .finally(()=>{
      setJwt("")
    });

    navigate("/login");

  };

  useEffect(() => {
    if (jwt === "") {
      const requestOption = {
        method: "GET",
        credentials: "include",
      };

      fetch(`/refresh`, requestOption)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        return response.text(); // Get response as text
      })
      .then((data) => {
        if (data) {
          try {
            const jsonData = JSON.parse(data); // Parse response as JSON
            if (jsonData.access_token) {
              setJwt(jsonData.access_token);
              console.log(jsonData);
            } else {
              console.log("No access_token in response data");
            }
          } catch (error) {
            console.log("Error parsing JSON:", error);
          }
        } else {
          console.log("Empty response received");
        }
      })
      .catch((error) => {
        console.log("Couldn't get token", error);
      });
    }
  }, [jwt]);

  const toogleRefersh = () => {
    console.log("clicked")
    
    if (!ticking){
        console.log("turning on ticking")
        let i = setInterval(() =>{
          console.log("this will run every second")
        },1000)
        setTickingInterval(i);
        console.log("setting tick interval to ", i);
        setTicking(true)
    } else {
        console.log("turning off ticking");
        console.log("turning off ticking interval", tickingInterval);
        setTickingInterval(null);
        clearInterval(tickingInterval);
        setTicking(false);
    }
  }

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
          <a className="btn btn-outline-secondary" href="#!" onClick={toogleRefersh}>toggle Ticking</a>
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
