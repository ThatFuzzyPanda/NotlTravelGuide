import React from "react";

interface Business {
  id: number;
  title: string;
  url: string;
}

const FeaturedBusiness = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  const business: Business[] = await res.json();

  return (
    <>
      <ul className="flex flex-row flex-nowrap">
        {business.map((business) => (
          <li className="p-4 basis-2" key={business.id}>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={business.url} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{business.title}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Check Them Out!</button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FeaturedBusiness;
