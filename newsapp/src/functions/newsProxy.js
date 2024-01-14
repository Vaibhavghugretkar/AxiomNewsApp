// functions/newsProxy.js

const fetch = require("node-fetch");

exports.handler = async function (event, context) {
  try {
    const response = await fetch(
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=0c68f6d51c29468e90f7156376935eab"
    );

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};
