import { useEffect } from "react"
import { useLoaderData, useNavigate, useParams } from "react-router-dom"
// library
import _ from "lodash"
// components
import WorksCard from "../components/WorksCard"

function WorksSubCategory() {
  const navigate = useNavigate()
  const data = useLoaderData()
  const { category, subcategory } = useParams()

  useEffect(() => {
    // get unique advert type items
    const uniqAdType = _.uniq(_.map(data, (item) => item.fields.advertType))

    // set errors
    const validAdType = _.findIndex(uniqAdType, (adType) => {return _.kebabCase(adType) === subcategory})
    if (validAdType < 0 || category !== "advert") {
      navigate("/error", {replace: true})
    }
  }, [])

  return (
    <>
      <div className="workscard-container">
        {_.map(data, (item) => {
          if (subcategory === _.kebabCase(item.fields.advertType)) {
            return <WorksCard item={item} key={item.sys.id} />
          }
        })}
      </div>
    </>
  )
}

export default WorksSubCategory