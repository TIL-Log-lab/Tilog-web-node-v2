import { ReactElement } from "react";

import * as BS from "react-icons/bs";
import * as FA from "react-icons/fa";
import * as GR from "react-icons/gr";
import * as SI from "react-icons/si";

interface TechIconsInterface {
  [techName: string]: ReactElement;
}

const TechIcons: TechIconsInterface = {
  JAVASCRIPT: <SI.SiJavascript className="inline text-javascript" />,
  TYPESCRIPT: <SI.SiTypescript className="inline text-typescript" />,
  HTML: <SI.SiHtml5 className="inline text-html" />,
  GITHUB: <SI.SiGithub className="inline" />,
  NESTJS: <SI.SiNestjs className="inline text-nestjs" />,
  REACT: <SI.SiReact className="inline text-react" />,
  SWIFT: <SI.SiSwift className="inline text-swift" />,
  DATABASE: <FA.FaDatabase className="inline text-database" />,
  MYSQL: <GR.GrMysql className="inline text-mysql" />,
  AWS: <SI.SiAmazonaws className="inline text-aws" />,
  DOCKER: <SI.SiDocker className="inline text-docker" />,
  DOCKER_COMPOSE: <SI.SiDocker className="inline text-docker" />,
  REDIS: <SI.SiRedis className="inline text-redis " />,
  NODEJS: <FA.FaNodeJs className="inline text-nodejs" />,
  CSS: <SI.SiCss3 className="inline text-css" />,
  INFRA: <BS.BsFillHddNetworkFill className="inline" />,
  UNKNOWN: <BS.BsFillPatchQuestionFill className="inline" />,
};
export default TechIcons;
