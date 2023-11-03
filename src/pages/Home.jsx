import { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"
// library
import _ from "lodash"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
// helpers
import { metaTitles } from "../helpers/MetaTitles"
import { client } from "../helpers/Client"
// components
import WorksCard from "../components/WorksCard"
// assets
import logoBg from "../assets/home_hero_bg.jpg"
import logoCreative from "../assets/home_hero_logo_creative.png"
import logoWiz from "../assets/home_hero_logo_wiz.png"
import logoStrapline from "../assets/home_hero_logo_strapline.png"

function Home() {
  // console.log("Home")
  const [aboutIntro, setAboutIntro] = useState({})
  const [works, setWorks] = useState([])

  useEffect(() => {
    const getAboutIntro = async () => {
      try {
        const response = await client.getEntries({
          content_type: "aboutIntro",
          "sys.id": "3KmGcp3xOkLvWndnRcTb1n",
        })
        setAboutIntro(response.items[0].fields)
      } catch (error) {
        console.warn(error)
      }
    }

    const getWorks = async () => {
      try {
        const response = await client.getEntries({
          content_type: "work",
        })
        // display 3 random items from list
        const randItems = _.sampleSize(response.items, 4)
        setWorks(randItems)
      } catch (error) {
        console.warn(error)
      }
    }

    getAboutIntro()
    getWorks()
  }, [])

  return (
    <>
      <Helmet>
        <title>{metaTitles.home}</title>
      </Helmet>

      <section className="hero" style={{ backgroundImage: `url("${logoBg}")` }}>
        <div className="logo">
          <img
            className="creative noselect"
            src={logoCreative}
            width="322"
            height="81"
          />
          <img className="wiz noselect" src={logoWiz} width="183" height="62" />
          <div className="circle theme-bg"></div>
          <div className="rectangles">
            <div className="item theme-bg"></div>
            <div className="item theme-bg"></div>
            <div className="item theme-bg"></div>
          </div>
          <img
            className="strapline noselect"
            src={logoStrapline}
            width="314"
            height="25"
          />
        </div>
      </section>

      <section className="about">
        <div className="content max-width p-t-96">
          <div className="h1 theme-color float-left m-r-16">
            {aboutIntro.header}
          </div>
          <div className="description font-size-lg">
            {documentToReactComponents(aboutIntro.description)}
          </div>
        </div>
      </section>

      <section className="work-cards">
        <div className="content max-width p-t-96">
          <div className="workscard-container">
            {_.map(works, (item) => (
              <WorksCard item={item} key={item.sys.id} />
            ))}
          </div>
          <div className="align-center p-t-32">
            <Link className="btn" to="/work/all">
              Show more
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
