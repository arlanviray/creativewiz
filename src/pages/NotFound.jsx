import { Link } from "react-router-dom"

function NotFound() {
  return (
    <>
      <section className="contact-intro">
        <div className="content max-width p-t-96 align-center">
          <div className="h1 theme-color">Page not found.</div>
          <div className="description font-size-lg p-b-24">Oops! The page you are looking for does not exist.</div>
          <Link className="btn" to="/">Back to Homepage</Link>
        </div>
      </section>
    </>
  )
}

export default NotFound