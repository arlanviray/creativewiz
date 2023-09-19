import { useEffect, useState } from "react"
import { NavLink, Outlet, useLoaderData, useNavigate, useParams } from "react-router-dom"
// library
import _ from "lodash"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
// helpers
import { client } from "../helpers/Client"

function WorksLayout() {
  const navigate = useNavigate()
  const data = useLoaderData()
  const [workIntro, setWorIntro] = useState([])
  const [workType, setWorkType] = useState([])
  const [workAdvertType, setWorkAdvertType] = useState([])
  const { category, subcategory } = useParams()

  useEffect(() => {
    // if category does not exist, redirect to WorksCategory
    if (_.isUndefined(category)) {
      navigate("all", {replace: true})
    }

    // Otherwise
    const getWorkIntro = async () => {
      try {
        const response = await client.getEntries({ 
          content_type: "workIntro", 
          "sys.id": "1cGsjwEYNn7j4F1dNeiBYe"
        })
        setWorIntro(response.items[0].fields)

      } catch(error) {
        console.warn(error)
      }
    }

    getWorkIntro()

    // get unique type items
    const uniqType = _.uniq(_.map(data, (item) => item.fields.type))
    setWorkType(_.orderBy(uniqType)) // sort alphabetically

    // get unique advert type items
    const uniqAdType = _.uniq(_.map(data, (item) => item.fields.advertType))
    setWorkAdvertType(_.orderBy(uniqAdType)) // sort alphabetically
  }, [])

  return (
    <>
      <section className="work-intro">
        <div className="content max-width p-t-96">
          <div className="h1 theme-color float-left m-r-16">{workIntro.header}</div>
          <div className="description font-size-lg">{documentToReactComponents(workIntro.description)}</div>
        </div>
      </section>

      <section className="work-cards">
        <div className="content max-width p-t-96">
          <div className="p-b-32">
            <div className="workscard-categories">
              <NavLink className="btn" to="all">ALL</NavLink>
              {_.map(workType, (type) => <NavLink className="btn" to={_.kebabCase(type)} key={type}>{type}</NavLink>)}
            </div>
            {
              (() => {
                if (category === "advert") {
                  return (
                    <div className="workscard-subcategories p-t-16">
                      {_.map(workAdvertType, (adType) => {
                        if (!_.isUndefined(adType)) return <NavLink className="btn-subcat" to={"advert/"+ _.kebabCase(adType)} key={adType}>{adType}</NavLink>
                      })}
                    </div>
                  )
                }
              })()
            }
          </div>

          <Outlet />
        </div>
      </section>
    </>
  )
}

// Route loader function
export const worksLoader = async () => {
  try {
    const response = await client.getEntries({
      content_type: "work"
    })
    // get items order by year
    return _.orderBy(response.items, [(obj) => {return obj.fields.year}], ["desc"])

  } catch(error) {
    console.warn(error)
  }
}

export default WorksLayout