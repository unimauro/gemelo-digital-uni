// Robot del Gemelo Digital de la UNI — vía gateway propio ai.tunky.net
// La API key vive en el SERVIDOR (gateway); aquí solo va el X-Client-Token (público, revocable,
// solo sirve desde el Origin permitido unimauro.github.io). Sin proxy → respuestas locales.
window.UNI_IA = {
  proxy:       "https://ai.tunky.net/v1/chat",
  clientToken: "obs_5356ba138c2761b3c84faf38bd82e4e4",
  project:     "observatorio",
  apiKey:      "",   // no se usa key pública; el gateway la guarda en el servidor
  model:       "meta-llama/llama-3.3-70b-instruct:free",
  endpoint:    "https://openrouter.ai/api/v1/chat/completions"
};
