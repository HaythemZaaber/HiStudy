import Image from "next/image";
import Link from "next/link";

import ServiceData from "../../data/elements/service.json";

const ServiceNine = () => {
  return (
    <>
      {ServiceData &&
        ServiceData.serviceNine.map((data, index) => (
          <div className="container" key={index}>
            <div className="row row--15 mt_dec--30">
              {data.body.map((item, innerIndex) => (
                <div
                  className="col-xl-3 col-md-6 col-sm-6 col-12 mt--30"
                  key={innerIndex}
                >
                  <div className="rbt-flipbox">
                    <div
                      className={`rbt-flipbox-wrap rbt-service rbt-service-1 ${
                        item.bgOne
                          ? "card-bg-1"
                          : "" || item.bgTwo
                          ? "card-bg-2"
                          : "" || item.bgThree
                          ? "card-bg-3"
                          : "" || item.bgFour
                          ? "card-bg-4"
                          : ""
                      }`}
                    >
                      <div className="rbt-flipbox-front rbt-flipbox-face inner h-[100%]">
                        <div className="icon">
                          <Image
                            src={item.img}
                            width={55}
                            height={55}
                            alt="card-icon"
                          />
                        </div>
                        <div className="flex flex-col justify-between h-[80%]">
                          <div className="content">
                            <h5 className="title">
                              <Link href="#">{item.title}</Link>
                            </h5>
                            <p>{item.desc}</p>
                          </div>
                          <Link
                            className="rbt-btn-link stretched-link mt-16 mb-6"
                            href="#"
                          >
                            Learn More<i className="feather-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                      <div className="rbt-flipbox-back rbt-flipbox-face inner">
                        <ul className="rbt-list-style-3 color-white">
                          {item.list.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <i className={subItem.icon}></i> {subItem.text}
                            </li>
                          ))}
                        </ul>
                        <Link
                          className="rbt-btn rbt-switch-btn btn-white btn-sm"
                          href="#"
                        >
                          <span data-text="Learn More">Learn More</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
    </>
  );
};

export default ServiceNine;
