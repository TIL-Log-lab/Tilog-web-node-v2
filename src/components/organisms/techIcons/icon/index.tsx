import * as SI from "react-icons/si";
import * as FA from "react-icons/fa";
import * as GR from "react-icons/gr";
import * as BS from "react-icons/bs";
import { TechIconInterface } from "src/components/organisms/techIcons/interface/techIcons";

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
  [JAVA_SCRIPT]: {
    Render: () => <SI.SiJavascript className="text-javascript" />,
  },
  [TYPE_SCRIPT]: {
    Render: () => <SI.SiTypescript className="text-typescript" />,
  },
  [HTML]: {
    Render: () => <SI.SiHtml5 className="text-html" />,
  },
  [GITHUB]: {
    Render: () => <SI.SiGithub className="text-git" />,
  },
  [NESTJS]: {
    Render: () => <SI.SiNestjs className="text-nestjs" />,
  },
  [REACT]: {
    Render: () => <SI.SiReact className="text-react" />,
  },
  [SWIFT]: {
    Render: () => <SI.SiSwift className="text-swift" />,
  },
  [DATABASE]: {
    Render: () => <FA.FaDatabase className="text-database" />,
  },
  [MYSQL]: {
    Render: () => <GR.GrMysql className="text-mysql" />,
  },
  [AWS]: {
    Render: () => <SI.SiAmazonaws className="text-aws" />,
  },
  [DOCKER]: {
    Render: () => <SI.SiDocker className="text-docker" />,
  },
  [DOCKER_COMPOSE]: {
    Render: () => <SI.SiDocker className="text-docker" />,
  },
  [REDIS]: {
    Render: () => <SI.SiRedis className="text-redis " />,
  },
  [NODEJS]: {
    Render: () => <FA.FaNodeJs className="text-nodejs" />,
  },
  [CSS]: {
    Render: () => <SI.SiCss3 className="text-css" />,
  },
  [INFRA]: {
    Render: () => <BS.BsFillHddNetworkFill />,
  },
  [UNKNOWN]: {
    Render: () => <BS.BsFillPatchQuestionFill />,
  },
};

export default TechIcons;
