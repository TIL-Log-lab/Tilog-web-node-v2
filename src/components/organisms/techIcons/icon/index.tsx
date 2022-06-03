import * as SI from "react-icons/si";
import * as FA from "react-icons/fa";
import * as GR from "react-icons/gr";
import * as BS from "react-icons/bs";
import { TechIconInterface } from "../interface/techIcons";

const TYPE_SCRIPT = "TYPESCRIPT";
const JAVA_SCRIPT = "JAVASCRIPT";
const HTML = "HTML";
const REACT = "REACT";
const SWIFT = "SWIFT";
const DATABASE = "DATABASE";
const GITHUB = "GITHUB";
const NESTJS = "NESTJS";
const MYSQL = "MySQL";
const AWS = "AWS";
const DOCKER = "DOCKER";
const DOCKER_COMPOSE = "DOCKER_COMPOSE";
const REDIS = "REDIS";
const CSS = "CSS";
const NODEJS = "NODEJS";
const INFRA = "INFRA";
const UNKNOWN = "UNKNOWN";

const TechIcons: TechIconInterface = {
  [JAVA_SCRIPT]: <SI.SiJavascript className="text-javascript" />,
  [TYPE_SCRIPT]: <SI.SiTypescript className="text-typescript" />,
  [HTML]: <SI.SiHtml5 className="text-html" />,
  [GITHUB]: <SI.SiGithub className="text-git" />,
  [NESTJS]: <SI.SiNestjs className="text-nestjs" />,
  [REACT]: <SI.SiReact className="text-react" />,
  [SWIFT]: <SI.SiSwift className="text-swift" />,
  [DATABASE]: <FA.FaDatabase className="text-database" />,
  [MYSQL]: <GR.GrMysql className="text-mysql" />,
  [AWS]: <SI.SiAmazonaws className="text-aws" />,
  [DOCKER]: <SI.SiDocker className="text-docker" />,
  [DOCKER_COMPOSE]: <SI.SiDocker className="text-docker" />,
  [REDIS]: <SI.SiRedis className="text-redis " />,
  [NODEJS]: <FA.FaNodeJs className="text-nodejs" />,
  [CSS]: <SI.SiCss3 className="text-css" />,
  [INFRA]: <BS.BsFillHddNetworkFill />,
  [UNKNOWN]: <BS.BsFillPatchQuestionFill />,
};

export default TechIcons;
