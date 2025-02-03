import { useEffect } from "react"
import { Link } from "react-router-dom"
// helpers
import { animateOnView } from "../helpers/Utils"
// assets
import noImage from "../assets/no-image.png"

function WorksCard({ item }) {
  const {
    type,
    advertType,
    thumbnail,
    image,
    position,
    title,
    description,
    year,
    url,
    newDeveloper,
  } = item.fields
  const useImage = thumbnail
    ? thumbnail.fields.file.url
    : image
    ? image.fields.file.url
    : noImage

  useEffect(() => {
    animateOnView()
  }, [])

  return (
    <>
      <div
        className="workscard animateOnView"
        data-anim="show"
        style={{ color: newDeveloper ? "#C8C8C8" : "inherit" }}
      >
        <div className="wc-image">
          {newDeveloper ? (
            <img
              src={useImage}
              style={{
                marginBottom: "4px",
                filter: "grayscale(100%)",
                opacity: 0.2,
              }}
            />
          ) : (
            <Link to={"/work/detail/" + item.sys.id}>
              <img src={useImage} />
            </Link>
          )}
        </div>
        <div className="wc-info">
          <div className="h3">{title}</div>
          <p className="font-size-sm">
            {year} | {type === "Advert" ? "Ad" : type}
            {advertType ? " | " + advertType : ""}
          </p>
        </div>
        <div className="wc-btn">
          {newDeveloper ? (
            <p className="newdev">New design. Built by another dev</p>
          ) : (
            <Link className="btn-card" to={"/work/detail/" + item.sys.id}>
              Learn more
            </Link>
          )}
        </div>
      </div>
    </>
  )
}

export default WorksCard
