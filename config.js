// Robot del Gemelo Digital de la UNI — OpenRouter (opcional)
// Pega tu API key de https://openrouter.ai/keys
// ⚠️ Sitio estático: la key queda PÚBLICA. Usa un modelo :free o un proxy.
// Sin key → el robot usa respuestas locales (heurísticas sobre los datos reales).
window.UNI_IA = {
  apiKey: "",   // sk-or-v1-...
  proxy:  "",   // o un endpoint proxy (Vercel) y deja apiKey vacío
  model:  "meta-llama/llama-3.3-70b-instruct:free",
  endpoint: "https://openrouter.ai/api/v1/chat/completions"
};
