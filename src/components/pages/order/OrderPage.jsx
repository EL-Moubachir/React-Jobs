import { Link, useParams } from "react-router";

export default function OrderPage() {
  // State
  const { username } = useParams();
  return (
    <div>
      <h1>Good Morning, {username}!</h1>
      <Link to="/"><button>Go to Home Page</button></Link>
    </div>
  )
}
