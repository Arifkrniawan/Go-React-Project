import { useRouteError } from "react-router-dom";


export default function Error(){
    const error = useRouteError();

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-4">
                    <h1 className="mt-3">Opps!</h1>
                    <p>Error occured, please comeback later</p>
                    <p>
                        <em>{error.statusText}</em>
                    </p>
                </div>
            </div>
        </div>
    )
}