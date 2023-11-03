import { Helmet } from "react-helmet"
import { Form, useActionData, useLoaderData } from "react-router-dom"
// library
import { toast } from "react-toastify"
import axios from "axios"
import _ from "lodash"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
// helpers
import { metaTitles } from "../helpers/MetaTitles"
import { client } from "../helpers/Client"

function Contact() {
  const data = useLoaderData()
  const actionData = useActionData()

  // console.log("loaderData", data)
  // console.log("actionData", actionData)

  return (
    <>
      <Helmet>
        <title>{metaTitles.contact}</title>
      </Helmet>

      <section className="contact-intro">
        <div className="content max-width p-t-96 align-center">
          <div className="h1 theme-color">{data.header}</div>
          <div className="description font-size-lg">
            {documentToReactComponents(data.description)}
          </div>
        </div>
      </section>

      <section className="contact-form">
        <div className="content max-width-md p-t-48">
          {(() => {
            if (actionData && actionData.sent === true) {
              return (
                <div
                  className="h2 align-center"
                  dangerouslySetInnerHTML={{ __html: actionData.message }}
                ></div>
              )
            } else if (actionData && actionData.sent === false) {
              return (
                <div
                  className="h2 align-center"
                  dangerouslySetInnerHTML={{ __html: actionData.message }}
                ></div>
              )
            } else {
              return (
                <Form method="post" action="/contact">
                  <div className="input-wrapper">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-input"
                      placeholder="Name"
                    />
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                  </div>
                  <div className="input-wrapper">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-input"
                      placeholder="Email Address"
                    />
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                  </div>
                  <div className="input-wrapper">
                    <textarea
                      name="message"
                      id="message"
                      className="form-input"
                      placeholder="Message"
                    ></textarea>
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                  </div>
                  <div className="form-submit align-right">
                    <button className="btn-button" type="submit">
                      Send Message
                    </button>
                  </div>
                </Form>
              )
            }
          })()}
        </div>
      </section>
    </>
  )
}

// Route loader function
export const contactLoader = async () => {
  // console.log("contactLoader")

  try {
    const response = await client.getEntries({
      content_type: "contactIntro",
      "sys.id": "599Dcth7WsUpy8gE8SL05",
    })
    return response.items[0].fields
  } catch (error) {
    console.warn(error)
  }
}

// Route action function
export const contactAction = async ({ request }) => {
  // console.log("contactAction")

  const fData = await request.formData()
  const submitData = {
    name: fData.get("name"),
    email: fData.get("email"),
    message: fData.get("message"),
  }

  if (_.isEmpty(submitData.name)) {
    return toast.error("Name is empty!", { toastId: "name" })
  } else if (_.isEmpty(submitData.email)) {
    return toast.error("Email is empty!", { toastId: "email" })
  } else if (_.isEmpty(submitData.message)) {
    return toast.error("Message is empty!", { toastId: "message" })
  } else {
    // submit to php email
    try {
      const response = await axios.post("/ContactEnquiry.php", submitData)
      return response.data
    } catch (error) {
      console.warn(error)
    }
  }
}

export default Contact
