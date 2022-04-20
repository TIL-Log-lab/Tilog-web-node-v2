import * as SI from "react-icons/si";
import * as FA from "react-icons/fa";
import * as GR from "react-icons/gr";
import * as BS from "react-icons/bs";
import * as CONST from "@Constants/techName";
import { ITechIcons } from "@Interface/techIcons";

const TechIcons: ITechIcons = {
  [CONST.JAVA_SCRIPT]: {
    Render: () => <SI.SiJavascript className="text-javascript" />,
  },
  [CONST.TYPE_SCRIPT]: {
    Render: () => <SI.SiTypescript className="text-typescript" />,
  },
  [CONST.HTML]: {
    Render: () => <SI.SiHtml5 className="text-html" />,
  },
  [CONST.GIT]: {
    Render: () => <SI.SiGit className="text-git" />,
  },
  [CONST.NESTJS]: {
    Render: () => <SI.SiNestjs className="text-nestjs" />,
  },
  [CONST.REACT]: {
    Render: () => <SI.SiReact className="text-react" />,
  },
  [CONST.SWIFT]: {
    Render: () => <SI.SiSwift className="text-swift" />,
  },
  [CONST.DATABASE]: {
    Render: () => <FA.FaDatabase className="text-database" />,
  },
  [CONST.MYSQL]: {
    Render: () => <GR.GrMysql className="text-mysql" />,
  },
  [CONST.AWS]: {
    Render: () => <SI.SiAmazonaws className="text-aws" />,
  },
  [CONST.DOCKER]: {
    Render: () => <SI.SiDocker className="text-docker" />,
  },
  [CONST.DOCKER_COMPOSE]: {
    Render: () => <SI.SiDocker className="text-docker" />,
  },
  [CONST.REDIS]: {
    Render: () => <SI.SiRedis className="text-redis " />,
  },
  [CONST.NODEJS]: {
    Render: () => <FA.FaNodeJs className="text-nodejs" />,
  },
  [CONST.CSS]: {
    Render: () => <SI.SiCss3 className="text-css" />,
  },
  [CONST.INFRA]: {
    Render: () => <BS.BsFillHddNetworkFill />,
  },
  [CONST.UNKNOWN]: {
    Render: () => <BS.BsFillPatchQuestionFill />,
  },
};

export default TechIcons;
