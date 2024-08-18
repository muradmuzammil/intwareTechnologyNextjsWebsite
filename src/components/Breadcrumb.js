import Link from "next/link";
import React from "react";

const Breadcrumb = ({ title, textColor, textHeading }) => {
  return (
    <>
      {/* ================ Breadcrumb Start ================*/}
      <div
        className="breadcrumb-area bg-cover"
        style={{ backgroundImage: 'url("./assets/img/bg/7.png")' }}
      >
        <div className="container">
          <div className="breadcrumb-inner">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <h2 className="page-title">
                  <span className="text-primary">{textHeading}</span> {title}
                </h2>
              </div>
              <div className="col-lg-6 text-lg-end">
                <ul className="page-list">
                  <li>
                    <Link href="/index-1">Home</Link>
                  </li>
                  {"  "}/{" "}
                  <li>
                    <span className="me-1">{textHeading}</span>

                    {title}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ================ Breadcrumb End ================*/}
    </>
  );
};

export default Breadcrumb;
