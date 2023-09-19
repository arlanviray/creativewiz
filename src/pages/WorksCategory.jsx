import { useEffect } from "react"
import { useLoaderData, useNavigate, useParams } from "react-router-dom"
// library
import _ from "lodash"
// components
import WorksCard from "../components/WorksCard"

function WorksCategory() {
  const navigate = useNavigate()
  const data = useLoaderData()
  const { category } = useParams()

  useEffect(() => {
    // get unique type items
    const uniqType = _.uniq(_.map(data, (item) => item.fields.type))

    // set errors
    const validType = _.findIndex(uniqType, (type) => {return _.kebabCase(type) === category || category === "all"})
    if (validType < 0) {
      navigate("/error", {replace: true})
    }
  }, [])

  return (
    <>
      <div className="workscard-container">
        {_.map(data, (item) => {
          if (category === _.kebabCase(item.fields.type) || category === "all") {
            return <WorksCard item={item} key={item.sys.id} />
          }
        })}
      </div>
    </>
  )
}

export default WorksCategory