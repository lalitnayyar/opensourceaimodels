import { listModels } from "@huggingface/hub";

// Create your Hugging Face Token: https://huggingface.co/settings/tokens
// Set your Hugging Face Token: https://scrimba.com/dashboard#env
// Learn more: https://scrimba.com/links/env-variables
const token = import.meta.env.VITE_HF_TOKEN

// Create a textarea element
const textarea = document.createElement('textarea');
textarea.style.width = '300%';
textarea.style.height = '600px';
document.body.appendChild(textarea);

for await (const model of listModels({
    credentials: {
        accessToken: token
    },
    search: {
        task: "text-generation"
    }
})) {
    // Log the model to the textarea
    textarea.value += JSON.stringify(model, null, 2) + '\n';
    break
}