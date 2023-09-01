import React from 'react'



function Card({ details }) {
    return (
        <>
            {/* <!-- Free Tier --> */}
            <div className="col-lg-4">
                <div className="card mb-5 mb-lg-0">
                    <div className="card-body">
                        <h5 className="card-title text-muted text-uppercase text-center">{details.plan}</h5>
                        <h6 className="card-price text-center">${details.price}<span className="period">/month</span></h6>
                        <hr />
                        <ul className="fa-ul">
                            <li className={details.userenabler ? "" : "text-muted"}><span className="fa-li"><i className={details.userenabler ? "fas fa-check" : "fas fa-times"}></i></span>{details.users}</li>
                            <li className={details.storageenabler ? "" : "text-muted"}><span className="fa-li"><i className={details.storageenabler ? "fas fa-check" : "fas fa-times"}></i></span>{details.storage}</li>
                            <li className={details.publicprojectenabler ? "" : "text-muted"}><span className="fa-li"><i className={details.publicprojectenabler ? "fas fa-check" : "fas fa-times"}></i></span>{details.publicprojects}</li>
                            <li className={details.communityaccessenabler ? "" : "text-muted"}><span className="fa-li"><i className={details.communityaccessenabler ? "fas fa-check" : "fas fa-times"}></i></span>{details.communityaccess}</li>
                            <li className={details.privateprojectenabler ? "" : "text-muted"}><span className="fa-li"><i className={details.privateprojectenabler ? "fas fa-check" : "fas fa-times"}></i></span>{details.privateprojects}</li>
                            <li className={details.phonesupportenabler ? "" : "text-muted"}><span className="fa-li"><i className={details.phonesupportenabler ? "fas fa-check" : "fas fa-times"}></i></span>{details.phonesupport}</li>
                            <li className={details.subdomainenabler ? "" : "text-muted"}><span className="fa-li"><i className={details.subdomainenabler ? "fas fa-check" : "fas fa-times"}></i></span>{details.subdomain}</li>
                            <li className={details.statusreportenabler ? "" : "text-muted"}><span className="fa-li"><i className={details.statusreportenabler ? "fas fa-check" : "fas fa-times"}></i></span>{details.statusreport}</li>
                        </ul>
                        <div className="d-grid">
                            <a href="#" className="btn btn-primary text-uppercase">Button</a>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Card