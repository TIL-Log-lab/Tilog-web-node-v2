import { ReactElement } from "react";

import * as SI from "react-icons/si";
import * as FA from "react-icons/fa";
import * as GR from "react-icons/gr";
import * as BS from "react-icons/bs";

interface TechIconsProviderInterface {
  [techName: string]: ReactElement;
}

const TechIconsProvider: TechIconsProviderInterface = {
  JAVASCRIPT: <SI.SiJavascript className="text-javascript" />,
  TYPE_SCRIPT: <SI.SiTypescript className="text-typescript" />,
  HTML: <SI.SiHtml5 className="text-html" />,
  GITHUB: <SI.SiGithub className="" />,
  NESTJS: <SI.SiNestjs className="text-nestjs" />,
  REACT: <SI.SiReact className="text-react" />,
  SWIFT: <SI.SiSwift className="text-swift" />,
  DATABASE: <FA.FaDatabase className="text-database" />,
  MYSQL: <GR.GrMysql className="text-mysql" />,
  AWS: <SI.SiAmazonaws className="text-aws" />,
  DOCKER: <SI.SiDocker className="text-docker" />,
  DOCKER_COMPOSE: <SI.SiDocker className="text-docker" />,
  REDIS: <SI.SiRedis className="text-redis " />,
  NODEJS: <FA.FaNodeJs className="text-nodejs" />,
  CSS: <SI.SiCss3 className="text-css" />,
  INFRA: <BS.BsFillHddNetworkFill />,
};
export default TechIconsProvider;
