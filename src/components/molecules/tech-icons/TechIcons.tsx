import { ReactElement } from "react";

import * as BS from "react-icons/bs";
import * as FA from "react-icons/fa";
import * as GR from "react-icons/gr";
import * as SI from "react-icons/si";

interface TechIconsInterface {
  [techName: string]: ReactElement;
}

const TechIcons: TechIconsInterface = {
  JAVASCRIPT: <SI.SiJavascript className="text-javascript" />,
  TYPESCRIPT: <SI.SiTypescript className="text-typescript" />,
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
  UNKNOWN: <BS.BsFillPatchQuestionFill />,
};
export default TechIcons;
