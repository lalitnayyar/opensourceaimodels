import { HfInference } from '@huggingface/inference'

// Create your Hugging Face Token: https://huggingface.co/settings/tokens
// Set your Hugging Face Token: https://scrimba.com/dashboard#env
// Learn more: https://scrimba.com/links/env-variables
const hf = new HfInference(import.meta.env.VITE_HF_TOKEN)
// Hugging Face Inference API docs: https://huggingface.co/docs/huggingface.js/inference/README

const textToClassify = "I just bought a new camera. It's been a real disappointment."

async function generateText() {
    const response = await hf.textClassification({
    model: "SamLowe/roberta-base-go_emotions",
    inputs: textToClassify
  })
  console.log(response)
  const textarea = document.createElement('textarea')
  textarea.style.backgroundColor = 'yellow'
  textarea.style.width = '200%'
  textarea.style.height = '200px'
  textarea.value = JSON.stringify(response) + response[0].label
  document.body.appendChild(textarea)
}

generateText()