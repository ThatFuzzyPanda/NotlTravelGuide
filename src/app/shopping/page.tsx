import React from "react";
import NavBar from "../components/navbar";

const page = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="flex flex-col w-full">
            <div className="max-w-md">
              <h1 className="text-4xl font-bold">The Old Town Strip Strip</h1>
              <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                  What you'll find
                </div>
                <div className="collapse-content">
                  <p>
                    Boutiques <br /> Art galleries <br /> Antique shops <br />{" "}
                    Specialty food stores <br />
                    Gift shops <br /> Cafés and restaurants <br /> Wine shops or
                    tasting rooms <br />
                    Bookstores <br /> Jewelry stores <br />
                    Clothing stores
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                  Where is it?
                </div>
                <div className="collapse-content">
                  <p>hello</p>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                  All of the shops by Catagory
                </div>
                <div className="collapse-content">
                  <p>hello</p>
                </div>
              </div>
            </div>
            <div className="divider"></div>
            <div className="max-w-md">
              <h1 className="text-4xl font-bold">The Outlet Mall</h1>
              <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                  What you'll find
                </div>
                <div className="collapse-content">
                  <p>
                    Clothing
                    <br />
                    Footwear
                    <br />
                    Accessories
                    <br />
                    Home goods
                    <br />
                    Sportswear and outdoor gear
                    <br />
                    Beauty and cosmetics
                    <br />
                    Electronics
                    <br />
                    Specialty stores
                    <br />
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                  Where is it?
                </div>
                <div className="collapse-content">
                  <p>hello</p>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                  All of the shops by Catagory
                </div>
                <div className="collapse-content">
                  <p>hello</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
