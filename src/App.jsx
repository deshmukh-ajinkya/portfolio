import "./App.css";
import Photo from "./assets/photo.jpeg";
import Icon from "./assets/google.png";

function App() {
  const skills = [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "GraphQL",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "Docker",
    "AWS",
  ];

  const footerItems = [
    { id: 1, text: "Quickblog", buttonText: "Visit Now" },
    { id: 2, text: "QuickPackageAnalyzer", buttonText: "Visit Now" },
    { id: 3, text: "QuickBlog", buttonText: "Visit Now" },
    { id: 4, text: "QuickCrptoDash", buttonText: "Visit Now" },
    { id: 5, text: "Nalini Publication", buttonText: "Visit Now" },
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
              <img src={Icon} alt="icon" />
              <p>{skill}</p>
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
                  height: "72px",
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
