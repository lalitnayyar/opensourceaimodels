import { HfInference } from '@huggingface/inference'

// Create your Hugging Face Token: https://huggingface.co/settings/tokens
// Set your Hugging Face Token: https://scrimba.com/dashboard#env
// Learn more: https://scrimba.com/links/env-variables
const hf = new HfInference(import.meta.env.VITE_HF_TOKEN)
// Hugging Face Inference API docs: https://huggingface.co/docs/huggingface.js/inference/README

const textToTranslate = "It's an exciting time to be an AI engineer"

async function generateText() {
  const textTranslationResponse = await hf.translation({
    model: 'facebook/mbart-large-50-many-to-many-mmt',
    inputs: textToTranslate,
    parameters: {
      src_lang: "en_XX",
      tgt_lang: "hi_IN"
    }
  })
  console.log(textTranslationResponse)
  const textarea = document.createElement('textarea')
  textarea.style.backgroundColor = 'yellow'
  textarea.style.width = '100%'
  textarea.style.height = '200px'
  textarea.value =  textToTranslate+ ' - Translated to -'+JSON.stringify(textTranslationResponse, null, 2)
  document.body.appendChild(textarea)
}

generateText()