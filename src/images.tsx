import React from 'react'

export default function App() {
const places = [
{
  name: "newyork",
  city: "Agra",
  description:
    "This is a longer card with supporting text below as a natural lead-in to additional content",
  url: "https://res.cloudinary.com/dtljonz0f/image/upload/c_auto,ar_4:3,w_1920,g_auto/f_auto/q_auto/shutterstock_329662223_ss_non-editorial_3_csm8lw?_a=BAVARSAP0",
},

{
  name: "Brazil",
  city: "Nigga",
  description:
    "This is a longer card with supporting text below as a natural lead-in to additional content",
  url: "https://media.audleytravel.com/-/media/images/home/south-america/brazil/country-guides/best-of-brazil-tips-for-the-first-time-visitor/copacabana_beach_shutterstock_1620688570_3000x1000.webp?q=79&w=1920&h=685",
},
{
  name: "Effel Tower",
  city: "Paris",
  description:
    "This is a longer card with supporting text below as a natural lead-in to additional content",
  url: "https://media.gettyimages.com/id/1492597085/photo/paris-skyline-with-eiffel-tower-on-a-sunny-day-wide-angle-view-france.jpg?s=2048x2048&w=gi&k=20&c=4vXmjZiVnLm0PTudRrjXxEmxY3sn0NA5951eMIPoycM=",
},
{
  name: "RedFort",
  city: "Delhi",
  description:
    "This is a longer card with supporting text below as a natural lead-in to additional content",
  url: "https://media.istockphoto.com/id/1169495248/photo/agra-fort-medieval-indian-fort-at-agra-india-at-sunrise.jpg?s=1024x1024&w=is&k=20&c=Y8B93hsz7QBve5gvdG4LuOagH1Zx_2GxO_W8XXBXZks=",

}

]

return (
  <div>
    

    <div className="row row-cols-1 row-cols-md-2 g-4">
      {places.map((place) => (
        <div className="col">
          <div className="card">
            <img src={place.url} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{place.name}</h5>
              <p className="card-text">{place.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
}