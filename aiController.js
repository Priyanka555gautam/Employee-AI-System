import axios from "axios";
import Employee from "../models/Employee.js";

export const getAIRecommendation = async (req, res) => {
  try {

    const employees = await Employee.find();

    const prompt = `
Analyze these employees and provide:

1. Promotion recommendations
2. Employee ranking
3. Training suggestions
4. Improvement feedback

Employee Data:
${JSON.stringify(employees)}
`;

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-3.5-turbo",

        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.json(response.data);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};