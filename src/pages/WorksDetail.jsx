import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
// library
import _ from "lodash"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
// helpers
import { client } from "../helpers/Client"
// assets
import noImage from "../assets/no-image.png"

function WorksDetail() {
  const navigate = useNavigate()
  const [workDetail, setWorkDetail] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const getWorkDetail = async () => {
      try {
        const response = await client.getEntries({ 
          content_type: "work", 
          "sys.id": id
        })
        // console.log(response.items[0].fields)
        setWorkDetail(response.items[0].fields)

      } catch(error) {
        console.warn(error)
        // redirect
        navigate("/error", {replace: true})
      }
    }

    getWorkDetail()
  }, [])

  const { type, advertType, thumbnail, image, position, title, description, year, url } = workDetail
  // const bgImage = image ? image.fields.file.url : noImage
  const bgPosition = position ? position : "center top"
  const isAdvert = ["Advert"].indexOf(type) !== -1
  const linkUrl = isAdvert ? "advert/"+ _.kebabCase(advertType) : _.kebabCase(type)
  const linkText = isAdvert ? advertType : type
  const viewText = ["Website", "Wordpress", "WP-Shopify"].indexOf(type) !== -1 ? "Site" : type

  return (
    <>
      <section className="work-details">
        {
          (() => {
            if (image) {
              return (
                <div className="image" style={{backgroundImage: `url("${image.fields.file.url}")`, backgroundPosition: bgPosition}}></div>
              )
            } else {
              return (
                <div className="noimage theme-bg"></div>
              )
            }
          })()
        }
        <div className="content max-width">
          <div className="info">
            <div className="row">
              <div className="col">
                <div className="h1 theme-color">{title}</div>
                <div className="nowrap"><strong>{year} | {type === "Advert" ? "Ad" : type}{advertType ? " | "+ advertType : ""}</strong></div>
              </div>
              <div className="col">
                <a className="btn" href={url} target="_blank">View {viewText}</a>
                <div className="p-t-8"><Link className="btn-card" to={"/work/"+ linkUrl}>All {linkText}</Link></div>
              </div>
            </div>
            <div className="description font-size-md">
              {documentToReactComponents(description)}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default WorksDetail