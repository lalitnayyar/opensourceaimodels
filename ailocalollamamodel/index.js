import ollama from "ollama";
import express from "express";

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
    const question = req.query.question;
    if (!question) {
        res.status(200).send("Ask something via the `?question=` parameter");  
    } else {
        const response = await ollama.chat({
            model: 'mistral',
            messages: [{ role: 'user', content: question }],
        });
        const formattedResponse = response.message.content.split('\n').map(line => `<p>${line}</p>`).join('');
        const htmlResponse = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Response</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        margin: 20px;
                    }
                    p {
                        background-color: #f4f4f4;
                        padding: 10px;
                        border: 1px solid #ddd;
                        border-radius: 4px;
                    }
                </style>
            </head>
            <body>
                <h1>Response</h1>
                <h2>Question:</h2>
                <p>${question}</p>
                <h2>Answer:</h2>
                ${formattedResponse}
            </body>
            </html>
        `;
        res.status(200).send(htmlResponse);
    }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

