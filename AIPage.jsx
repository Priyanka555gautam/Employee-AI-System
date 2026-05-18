import { useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";

function AIPage() {

  const [result, setResult] = useState("");

  const getAIRecommendation = async () => {

    try {

      const token = localStorage.getItem("token");

      const res = await axios.post(
        "http://localhost:5000/api/ai/recommend",
        {},
        {
          headers: {
            Authorization: token,
          },
        }
      );

      setResult(
        res.data.choices[0].message.content
      );

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <div>

      <Navbar />

      <div className="container">

        <h1 className="main-heading">
          AI Recommendation Engine
        </h1>

        <div className="center-box">

          <button
            className="ai-btn"
            onClick={getAIRecommendation}
          >
            Generate AI Recommendation
          </button>

        </div>

        <div className="ai-box">
          <pre>{result}</pre>
        </div>

      </div>

    </div>
  );
}

export default AIPage;