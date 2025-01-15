import { HfInference } from '@huggingface/inference'

// Create your Hugging Face Token: https://huggingface.co/settings/tokens
// Set your Hugging Face Token: https://scrimba.com/dashboard#env
// Learn more: https://scrimba.com/links/env-variables
const hf = new HfInference(import.meta.env.VITE_HF_TOKEN)
// Hugging Face Inference API docs: https://huggingface.co/docs/huggingface.js/inference/README

const textToGenerate = "The definition of machine learning inference is "

async function generateText() {
  const response = await hf.textGeneration({
    inputs: textToGenerate,
    model:"HuggingFaceH4/zephyr-7b-beta"
  })
  console.log(response)
  const textarea = document.createElement('textarea')
  textarea.style.backgroundColor = 'yellow'
  textarea.style.width = '200%'
  textarea.style.height = '200px'
  textarea.value = JSON.stringify(response, null, 2)
  document.body.appendChild(textarea)
}

generateText()