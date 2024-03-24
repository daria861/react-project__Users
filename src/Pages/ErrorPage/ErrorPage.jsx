import { Link } from "react-router-dom";

export function ErrorPage() {
    return (
        <>
            <h2><Link to='/users'>Back</Link></h2>
            <h2>Ooooop!</h2>
            <p>Error this page</p>
        </>
    )
}

export default ErrorPage();