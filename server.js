const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv")

const {connectMongodb} = require ("./dbconnections")
const TokenQuestions = require("./routes")
const {Configuration, OpenAIApi} = require("openai");

dotenv.config()
const config = new Configuration({
    apiKey: `${process.env.API_KEY}` //"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" //"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",
})
 
const openai = new OpenAIApi(config)

//db connection
connectMongodb(process.env.MONGODB_URL).then(()=>console.log("mongodb connected"))

// Setup server
const app = express();
app.use(bodyParser.json());
app.use(cors());

// endpoint for ChatGPT
// async function callChatGPT(text){
//   try{
//     const completion = await openai.createCompletion({
//       model: "text-davinci-003",
//       max_tokens: 2048,
//       temperature: 0,
//       prompt: text,
//     })
//     console.log(completion.data.choices[0].text)
//   }catch(e){
//     console.log(e)
//   }
// }
// callChatGPT("write an article about school")
app.post("/chat", async (req, res) => {
  const { prompt } = req.body;
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    max_tokens: 2048,
    temperature: 0,
    prompt: prompt,
  });
  res.send(completion.data.choices[0].text);
});

app.use("/api/questions", TokenQuestions)  //use this api when url is same as given here

// const PORT = 8080;

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port: ${process.env.PORT}`);
});