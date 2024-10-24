import "./App.css";
import LINUX from "./assets/linux.png";
import HTML from "./assets/html.png";
import CSS from "./assets/css.png";
import JAVASCRIPT from "./assets/javascript.png";
import TYPESCRIPT from "./assets/typescript.png";
import REACTJS from "./assets/react.png";
import REDUX from "./assets/redux.png";
import REACTROUTER from "./assets/router.png";
import MUI from "./assets/mui.png";
import CHARTJS from "./assets/chartjs.png";
import NODEJS from "./assets/nodejs.png";
import EXPRESSJS from "./assets/expressjs.png";
import MONGODB from "./assets/mongodb.png";
import MONGOOSE from "./assets/mongoose.png";
import WEBPACK from "./assets/webpack.png";
import POSTMAN from "./assets/postman.png";
import JEST from "./assets/jest.png";
import GIT from "./assets/git.png";
import BITBUCKET from "./assets/bitbucket.png";
import DOCKER from "./assets/docker.png";
import AWS from "./assets/aws.png";

function App() {
  const skills = [
    { name: "Linux", icon: LINUX },
    { name: "HTML", icon: HTML },
    { name: "CSS", icon: CSS },
    { name: "JavaScript", icon: JAVASCRIPT },
    { name: "TypeScript", icon: TYPESCRIPT },
    { name: "React.js", icon: REACTJS },
    { name: "Redux", icon: REDUX },
    { name: "React Router", icon: REACTROUTER },
    { name: "Material UI", icon: MUI },
    { name: "Chart.js", icon: CHARTJS },
    { name: "Node.js", icon: NODEJS },
    { name: "Express.js", icon: EXPRESSJS },
    { name: "MongoDB", icon: MONGODB },
    { name: "Mongoose", icon: MONGOOSE },
    { name: "Webpack", icon: WEBPACK },
    { name: "Postman", icon: POSTMAN },
    { name: "Jest", icon: JEST },
    { name: "Git", icon: GIT },
    { name: "Bitbucket", icon: BITBUCKET },
    { name: "Docker", icon: DOCKER },
    { name: "AWS", icon: AWS },
  ];

  const footerItems = [
    { id: 1, text: "Quickblog", buttonText: "Visit Now" },
    { id: 2, text: "CrptoDash", buttonText: "Visit Now" },
    { id: 3, text: "Nalini Publication", buttonText: "Visit Now" },
    { id: 4, text: "PackageAnalyzer", buttonText: "Visit Now" },
    { id: 5, text: "ReactKickStart", buttonText: "Visit Now" },
  ];

  return (
    <>
      <div className="container">
        {/* Header Section */}
        <div className="header">
          <div className="info">
            <p style={{ fontSize: "36px" }}>Ajinkya Deshmukh</p>
            <p>Ready to bring value to your team</p>
          </div>
          <div className="photo">
            <p
              style={{
                padding: "12px",
                backgroundColor: "white",
                color: "#0C0CA0",
                borderRadius: "4px",
              }}
            >
              Download Resume
            </p>
          </div>
        </div>

        {/* Skill Section */}
        <div className="skill-container">
          {skills.map((skill, index) => (
            <div className="skill" key={index}>
              <img
                src={skill.icon}
                alt={skill.name}
                style={{ width: "auto", height: "40px" }}
              />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>

        {/* Footer Section */}
        <div className="footer">
          {footerItems.map((item) => (
            <div
              key={item.id}
              style={{
                width: "300px",
                placeItems: "center",
              }}
            >
              <div
                style={{
                  width: "200px",
                  height: "100px",
                  borderRadius: "12px",
                  padding: "12px",
                  backgroundColor: "white",
                  placeContent: "center",
                  textAlign: "center",
                }}
              >
                {item.text}
              </div>
              <p
                style={{
                  width: "200px",
                  backgroundColor: "white",
                  paddingBlock: "8px",
                  paddingInline: "12px",
                  borderRadius: "8px",
                  marginTop: "12px",
                  textAlign: "center",
                  color: "#0C0CA0",
                }}
              >
                {item.buttonText}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
