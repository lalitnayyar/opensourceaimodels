import { listModels } from "@huggingface/hub";

// Create your Hugging Face Token: https://huggingface.co/settings/tokens
// Set your Hugging Face Token: https://scrimba.com/dashboard#env
// Learn more: https://scrimba.com/links/env-variables
const token = import.meta.env.VITE_HF_TOKEN

// Create a list element
const list = document.createElement('ul');
list.style.width = '100%';
list.style.height = '500px';
list.style.color = 'white'; // Set list text color to white
document.body.appendChild(list);

// HuggingFace.js Hub Docs: https://huggingface.co/docs/huggingface.js/hub/README

// Challenge 1: Get Text To Image Models with inference enabled and 2000+ likes

async function isModelInferenceEnabled(modelName) {
    const response = await fetch(`https://api-inference.huggingface.co/status/${modelName}`)
    const data = await response.json()
    return data.state == "Loadable"
}

const models = []

let serialNumber = 1;

for await (const model of listModels({
    credentials: {
        accessToken: token
    },
    search: {
        task: "text-to-image"
    }
})) {
    if (model.likes < 2000) {
        const listItem = document.createElement('li');
        listItem.textContent = `${serialNumber}. Skipping ${model.name} because it has less than 2000 likes`;
        list.appendChild(listItem);
        serialNumber++;
        continue;
    } 
    
    if (await isModelInferenceEnabled(model.name)) {
        models.push(model);
    }
}

// Log the models to the list
models.forEach(model => {
    const listItem = document.createElement('li');
    listItem.textContent = `${serialNumber}. ${JSON.stringify(model, null, 2)}`;
    list.appendChild(listItem);
    serialNumber++;
});