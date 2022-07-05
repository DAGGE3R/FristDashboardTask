import React from "react";
import "./main.styles.scss";
import { TopChart } from "./top-charts.compnents";
import blueChart from "../../Assets/bleu-chart.svg";
import lightBleuChart from "../../Assets/light-bleu-chart.svg";
import yellowChart from "../../Assets/Yellow-chart.svg";
import redChart from "../../Assets/red-chart.svg";
import { MiddleChart } from "./middle-chart.component";
import { BottomStats } from "./bottom-stats.components";
import { SocialMedia } from "./social-media.component";
import fbLogo from "../../Assets/fb.svg";
import twitterLogo from "../../Assets/twitter.svg";
import linkedinLogo from "../../Assets/LinkedIn.svg";
import instagramLogo from "../../Assets/Instagram.svg";

export const Main = () => {
  return (
    <div className="container-charts">
      <div className="top-charts">
        <TopChart
          number={"9990"}
          img={blueChart}
          description={"members online"}
        />
        <TopChart
          number={"9980"}
          img={lightBleuChart}
          description={"members online"}
        />
        <TopChart
          number={"9970"}
          img={yellowChart}
          description={"members online"}
        />
        <TopChart
          number={"9960"}
          img={redChart}
          description={"members online"}
        />
      </div>
      <div className="middle-chart">
        <MiddleChart />
      </div>
      <div className="stats">
        <BottomStats
          color={"rgb(43,194,83)"}
          descStats={"Visits"}
          usersNumber={"29.703 Users (40%)"}
          numPercentage={"40%"}
        />
        <BottomStats
          color={"#72B9D6"}
          descStats={"Unique"}
          usersNumber={"24.093 Unique Users (20%)"}
          numPercentage={"20%"}
        />
        <BottomStats
          color={"#E9C41E"}
          descStats={"Pageviews"}
          usersNumber={"78.706 Views (60%)"}
          numPercentage={"60%"}
        />
        <BottomStats
          color={"#E77276"}
          descStats={"Visits"}
          usersNumber={"22.123 Users (80%)"}
          numPercentage={"80%"}
        />
        <BottomStats
          color={"#4089CE"}
          descStats={"Visits"}
          usersNumber={"40.15%"}
          numPercentage={"40%"}
        />
      </div>
      <div className="socialMedia-container">
        <SocialMedia
          color={"#3C599B"}
          logo={fbLogo}
          number1={"89K"}
          number2={"459"}
        />
        <SocialMedia
          color={"#00ABF0"}
          logo={twitterLogo}
          number1={"89K"}
          number2={"459"}
        />
        <SocialMedia
          color={"#4A76B5"}
          logo={linkedinLogo}
          number1={"89K"}
          number2={"459"}
        />
        <SocialMedia
          gradient={
            "linear-gradient(45deg, rgba(2,0,36,1) 0%, rgba(254,218,117,1) 0%, rgba(250,126,30,1) 27%, rgba(214,41,118,1) 46%, rgba(150,47,191,1) 65%, rgba(79,91,213,1) 87%)"
          }
          color={"#3C599B"}
          logo={instagramLogo}
          number1={"89K"}
          number2={"459"}
        />
      </div>
    </div>
  );
};
