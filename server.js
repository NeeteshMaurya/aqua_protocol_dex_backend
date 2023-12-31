const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv")

const {connectMongodb} = require ("./dbconnections")
const TokenQuestions = require("./routes")
const {Configuration, OpenAIApi} = require("openai");

dotenv.config()
const config = new Configuration({
    apiKey: `${process.env.API_KEY}`
})
 
const openai = new OpenAIApi(config)

//db connection
connectMongodb(process.env.MONGODB_URL).then(()=>console.log("mongodb connected"))

// Setup server
const app = express();
app.use(bodyParser.json());
app.use(cors({
  origin: '*'
}));

app.post("/chat/completions", async (req, res) => {
  const { prompt } = req.body;
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",    //text-davinci-003
    max_tokens: 2048,
    temperature: 1,
    messages: [
      {role:"user",content:prompt}
    ],
  }).then((completion)=>{
    const txt = completion.data.choices[0].message.content
    res.send(JSON.parse(txt));
  }).catch((error)=>{
    res.send(error)
    console.log(error)
  })
  
});

app.use("/api/questions", TokenQuestions)  //use this api when url is same as given here 

// const PORT = 8080;

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port: ${process.env.PORT}`);
});