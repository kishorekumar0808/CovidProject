const NotFound = () => (
  <div className="notfound-container">
    <img
      className="not-found-img"
      src="https://res.cloudinary.com/dhbyltxcl/image/upload/v1626073910/Group_7484_ds3e5h.png"
      alt="notFound"
    />
    <h1 className="notfound-heading">PAGE NOT FOUND</h1>
    <p className="notfound-description">
      we’re sorry, the page you requested could not be found Please go back to
      the homepage
    </p>
    <button type="button">Home</button>
  </div>
)

export default NotFound
