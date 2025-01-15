import { HfInference } from '@huggingface/inference'

// Create your Hugging Face Token: https://huggingface.co/settings/tokens
// Set your Hugging Face Token: https://scrimba.com/dashboard#env
// Learn more: https://scrimba.com/links/env-variables
const hf = new HfInference(process.env.HF_TOKEN)

// Hugging Face Inference API docs: https://huggingface.co/docs/huggingface.js/inference/README

const textToGenerate = "The definition of machine learning inference is "