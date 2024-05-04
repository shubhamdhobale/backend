import express from 'express';

const app = express();

app.get('/',(req , res) => {
  res.send("Routes are working")
})

app.get("/api/jokes" , (req , res) => {
  const jokes = [
    
      {
        "id": 1,
        "title": "The Past, Present, and Future Walked into a Bar",
        "content": "It was tense."
      },
      {
        "id": 2,
        "title": "Why don't skeletons fight each other?",
        "content": "They don't have the guts."
      },
      {
        "id": 3,
        "title": "Parallel lines have so much in common.",
        "content": "It's a shame they'll never meet."
      },
      {
        "id": 4,
        "title": "I told my wife she was drawing her eyebrows too high.",
        "content": "She looked surprised."
      },
      {
        "id": 5,
        "title": "What's Forrest Gump's password?",
        "content": "1forest1"
      },
      {
        "id": 6,
        "title": "Why don't scientists trust atoms?",
        "content": "Because they make up everything."
      },
      {
        "id": 7,
        "title": "I'm reading a book on anti-gravity.",
        "content": "It's impossible to put down."
      },
      {
        "id": 8,
        "title": "Why did the scarecrow win an award?",
        "content": "Because he was outstanding in his field."
      },
      {
        "id": 9,
        "title": "What do you call fake spaghetti?",
        "content": "An impasta."
      },
      {
        "id": 10,
        "title": "Why don't scientists trust stairs?",
        "content": "Because they're always up to something."
      }
    ]
    res.send(jokes);
})

app.listen(3000 , () => {
  console.log("server is running on port 3000");
})