import React from "react"
import Card from "./componet/Card"


function App() {

  let data = [
    {
      plan: "FREE",
      price: "0",
      users:"single user",
      userenabler:true,
      storage:"50gb storage",
      storageenabler:true,
      publicprojects:"unlimited publice projects",
      publicprojectenabler:true,
      communityaccess:"community access",
      communityaccessenabler:true,
      privateprojects:"unlimited private projects",
      privateprojectenabler:false,
      phonesupport:"dedicated phone support",
      phonesupportenabler:false,
      subdomain:"Free subdomain",
      subdomainenabler:false,
      statusreport:"monthly status report",
      statusreportenabler:false
    },
    {
      plan: "PLUS",
      price: "9",
      users:"5 users",
      userenabler:true,
      storage:"50gb storage",
      storageenabler:true,
      publicprojects:"unlimited publice projects",
      publicprojectenabler:true,
      communityaccess:"community access",
      communityaccessenabler:true,
      privateprojects:"unlimited private projects",
      privateprojectenabler:true,
      phonesupport:"dedicated phone support",
      phonesupportenabler:true,
      subdomain:"Free subdomain",
      subdomainenabler:true,
      statusreport:"monthly status report",
      statusreportenabler:false

    },
    {
      plan: "PRO",
      price: "49",
      users:"unlimited users",
      userenabler:true,
      storage:"50gb storage",
      storageenabler:true,
      publicprojects:"unlimited publice projects",
      publicprojectenabler:true,
      communityaccess:"community access",
      communityaccessenabler:true,
      privateprojects:"unlimited private projects",
      privateprojectenabler:true,
      phonesupport:"dedicated phone support",
      phonesupportenabler:true,
      subdomain:"Free subdomain",
      subdomainenabler:true,
      statusreport:"monthly status report",
      statusreportenabler:true

    }]

  return (
    <>

      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {
              data.map((e,i) => {
                return <Card details={e} key={i}/>

              })
            }

          </div>
        </div>
      </section>


    </>

  )
}

export default App
