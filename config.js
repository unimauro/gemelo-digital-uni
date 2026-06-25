// Robot del Gemelo Digital de la UNI — vía gateway propio ai.tunky.net
// La API key vive en el SERVIDOR (gateway); aquí solo va el X-Client-Token (público, revocable,
// solo sirve desde el Origin permitido unimauro.github.io). Sin proxy → respuestas locales.
window.UNI_IA = {
  proxy:       "https://ai.tunky.net/v1/chat",
  clientToken: "gun_d6d26d0227d36cf4c83f70c8578c1da8",
  project:     "gemelo-uni",
  apiKey:      "",   // no se usa key pública; el gateway la guarda en el servidor
  model:       "meta-llama/llama-3.3-70b-instruct:free",
  endpoint:    "https://openrouter.ai/api/v1/chat/completions"
};
