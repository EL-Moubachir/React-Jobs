import { Link } from "react-router";

export default function ErrorPage() {
  return (
    <div>
      <h1>ErrorPage</h1>
      <Link to="/"><button>Go to Home Page</button></Link>
    </div>
  )
}
