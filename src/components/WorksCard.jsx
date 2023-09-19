import { useEffect } from "react"
import { Link } from "react-router-dom"
// helpers
import { animateOnView } from "../helpers/Utils"
// assets
import noImage from "../assets/no-image.png"

function WorksCard({ item }) {
  const { type, advertType, thumbnail, image, position, title, description, year, url } = item.fields
  const useImage = thumbnail ? thumbnail.fields.file.url : (image ? image.fields.file.url : noImage)
  
  useEffect(() => {
    animateOnView()
  }, [])

  return (
    <>
      <div className="workscard animateOnView" data-anim="show">
        <div className="wc-image">
          <Link to={"/work/detail/"+ item.sys.id}><img src={useImage} /></Link>
        </div>
        <div className="wc-info">
          <div className="h3">{title}</div>
          <p className="font-size-sm">{year} | {type === "Advert" ? "Ad" : type}{advertType ? " | "+ advertType : ""}</p>
        </div>
        <div className="wc-btn">
          <Link className="btn-card" to={"/work/detail/"+ item.sys.id}>Learn more</Link>
        </div>
      </div>
    </>
  )
}

export default WorksCard