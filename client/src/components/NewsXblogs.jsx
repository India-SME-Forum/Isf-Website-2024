import React from "react";
import { Newspaper } from "lucide-react";

const UpdateCard = ({ date, title, content }) => {
  return (
    <div className="card glass cursor-pointer rounded-r-3xl hover:scale-105 duration-200 transition-all z-20 w-full bg-sky-200 shadow-xl">
      <div className="card-body">
        <div className="flex items-center justify-between">
          <h2 className="  ">{title}</h2>
        </div>
        <p>{content}</p>
        <p className="text-xs">{date}</p>
      </div>
    </div>
  );
};

const NewsXblogs = () => {
  const updates = [
    {
      date: "MONDAY, NOVEMBER 11, 2024",
      title: "Memeber Spotlight 1: ERIC POLINS",
      content:
        "lorem ipsum dolor sit amet Eric Polins Company Name: HCP Associates LT Class Year: 2005 ...",
    },
    {
      date: "MONDAY, NOVEMBER 11, 2024",
      title: "Ministry Event Updates 11/11",
      content:
        "Member News Bradley Earns 32 National Rankings and 260 Metropolitan ...",
    },
    {
      date: "MONDAY, NOVEMBER 11, 2024",
      title: "LT CLASS OF 2025 MEDIA DAY",
      content:
        "Megan Keplinger, is a member of LT Class of 2025 and with the  Bay ...",
    },
    {
      date: "FRIDAY, NOVEMBER 8, 2024 India",
      title: "MEP 2024 QUARTER 3 IMPACT REPORT",
      content:
        "India SME forum Impact Report 2024 Q3 Impact Report The Minority ...",
    },
  ];

  return (
    <div>
      <div className="  2xl:px-32">
        <span className="flex items-baseline 2xl:gap-2">
          <h1 className="text-start z-10 pl-5 2xl:pl-10 pt-10 text-2xl ">
            Recent Updates & Blogs {"  "}
          </h1>{" "}
          <p className=""><Newspaper className="w-8 h-7 "/></p>
        </span>
        <div className="bg-sky-100 glass z-20  rounded-2xl grid grid-cols-1 2xl:m-10 m-5 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {updates.map((update, index) => (
            <UpdateCard
              key={index}
              date={update.date}
              title={update.title}
              content={update.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsXblogs;
