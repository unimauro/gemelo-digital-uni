// Robot del Gemelo Digital de la UNI — vía gateway propio (key oculta en el servidor)
// El gateway ai.tunky.net hace la llamada al LLM; aquí NO va ninguna API key.
// Requiere un X-Client-Token (autoriza al cliente). Pega el token abajo.
window.UNI_IA = {
  proxy:       "https://ai.tunky.net/v1/chat",
  clientToken: "",   // X-Client-Token que entrega ai.tunky.net (pídelo/ponlo aquí)
  model:       "meta-llama/llama-3.3-70b-instruct:free",
  apiKey:      "",   // NO usar key pública; el gateway la guarda en el servidor
  endpoint:    "https://openrouter.ai/api/v1/chat/completions"
};
