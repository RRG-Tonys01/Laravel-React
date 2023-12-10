import { useOutlet } from "react-router-dom";

export default function Dashboard(){
  return (
      <div className="container-fluid p-0 m-0 d-flex">
        <div className="container py-2 my-1">
          <div className="row d-flex border-bottom border-light">
            <div className="col-6">
              <div className="d-flex float-start">
                <div className="border-end border-light p-2">
                  <p className="my-auto fw-lighter fs-6">Overview</p>
                </div>
                <div className="border-end border-light p-2">
                  <p className="my-auto fw-lighter fs-6">Audiences</p>
                </div>
                <div className="border-end border-light p-2">
                  <p className="my-auto fw-lighter fs-6">Demographics</p>
                </div>
                <div className="border-light p-2">
                  <p className="my-auto fw-lighter fs-6">More</p>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex float-end">
                <div className="border-end border-light p-2">
                  <p className="my-auto fw-lighter fs-6">Overview</p>
                </div>
                <div className="border-end border-light p-2">
                  <p className="my-auto fw-lighter fs-6">Audiences</p>
                </div>
                <div className="border-end border-light p-2">
                  <p className="my-auto fw-lighter fs-6">Demographics</p>
                </div>
                <div className="border-light p-2">
                  <p className="my-auto fw-lighter fs-6">More</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
  )
}
