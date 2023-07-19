const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv")

const {connectMongodb} = require ("./dbconnections")
const TokenQuestions = require("./routes")
const {Configuration, OpenAIApi} = require("openai");

dotenv.config()
const config = new Configuration({
    apiKey: "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",
})
 
const openai = new OpenAIApi(config)

//db connection
connectMongodb(process.env.MONGODB_URL).then(()=>console.log("mongodb connected"))

// Setup server
const app = express();
app.use(bodyParser.json());
app.use(cors());

// endpoint for ChatGPT
app.post("/chat", async (req, res) => {
  const { prompt } = req.body;

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    max_tokens: 512,
    temperature: 0,
    prompt: prompt,
  });
  res.send(completion.data.choices[0].text);
});

app.use("/api/questions", TokenQuestions)  //use this api when url is same as given here

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${process.env.PORT}`);
});