import React from "react";

const serviceLists = [
  {
    id: 1,
    title: "1.5 M+",
    des: "Sqft. Designed",
    img: "",
  },
  {
    id: 2,
    title: "15+",
    des: "Cities Covered",
    img: "",
  },
  {
    id: 3,
    title: "50+",
    des: "Brand Catered",
    img: "",
  },
  {
    id: 4,
    title: "100%",
    des: "Repeat Business Ration",
    img: "",
  },
];

const OurServices = () => {
  return (
    <div className="my-16 section-container">
      <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
        <div className="md:w-3/4">
          <div className="text-left md:w-4/5">
            <h2 className="title">
              Get your premium office designed and built in 75 days!
            </h2>

            <button className="px-8 py-3 font-semibold text-white rounded-full bg-green btn">
              Get In Touch !
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="grid items-center grid-cols-1 gap-8 sm:grid-cols-2">
            {serviceLists.map((service) => (
              <div
                key={service.id}
                className="px-4 py-5 space-y-2 text-center transition-all duration-200 rounded-sm shadow-md cursor-pointer text-green hover:border hover:border-indigo-600"
              >
                <img src={service.img} alt="" className="mx-auto " />
                <h5 className="pt-3 font-semibold"> {service.title}</h5>
                <p className="text-[#90BD95]">{service.des}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
