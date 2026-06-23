# 🎓 Gemelo Digital de la UNI — Impacto Académico por Sol Invertido

**¿Qué decisiones acercan a la UNI a las mejores universidades de Latinoamérica, y cuáles solo consumen presupuesto sin generar valor académico medible?**

Un "**Waze institucional**" para la **Universidad Nacional de Ingeniería**: mide el impacto académico/científico **por cada sol invertido** y simula cómo distintas decisiones de inversión mueven a la UNI en los rankings.

🔗 **Demo (GitHub Pages):** https://unimauro.github.io/gemelo-digital-uni/

> ⚠️ **Demostración con datos ilustrativos.** El valor está en el **modelo y el marco de decisión**; los números se reemplazan por datos oficiales (SUNEDU/RENACYT, MEF, QS/SIR, Scopus/WoS) cuando se integren.

---

## El problema no es tecnológico — es de gobernanza, incentivos y asignación de recursos

Sin afirmar que existan actos irregulares, en muchas universidades públicas de Latinoamérica los recursos tienden a concentrarse en **partidas fáciles de ejecutar y justificar** (infraestructura, mantenimiento, servicios, consultorías, adquisiciones), mientras que lo que **realmente mueve los rankings** exige inversión sostenida de largo plazo:

- Investigación científica · Publicaciones indexadas · Citaciones
- Profesores con doctorado · Internacionalización · Convenios de investigación
- Laboratorios de alto nivel · Patentes y transferencia tecnológica
- Posgrados de calidad · Atracción de talento

**La paradoja frecuente:** se ejecuta mucho presupuesto, pero se genera poco **impacto académico medible**.

---

## 💡 Índice de Impacto por Sol Invertido (ISI)

Por cada **S/ 1 millón** invertido, medir: papers publicados, citaciones, patentes, fondos captados, empresas creadas, convenios internacionales, investigadores RENACYT y posición en rankings.

Así se vuelve visible algo como (ilustrativo):

| Inversión (S/ 20M) | Impacto académico |
|---|---|
| Nuevo edificio | **Bajo** |
| Fondo de investigación | **Alto** |
| Becas doctorales | **Muy alto** |
| Convenios internacionales | **Muy alto** |
| Servicios administrativos | **Difícil de medir** |

---

## 🧪 Gemelo Digital: simular antes de decidir

Una **copia matemática** de la universidad (docentes, docentes con PhD, publicaciones, presupuesto, posgrado, deserción, empleabilidad, patentes, infraestructura, convenios) sobre la que se corren **escenarios**:

- **A — +20% presupuesto a investigación** → +15% publicaciones, +10% citaciones, +5 posiciones.
- **B — Nueva infraestructura** → +0.5 posiciones.
- **C — 200 becas doctorales** → +20 posiciones en 8 años.

El objetivo es pasar de *"creo que esto ayudará"* a *"la simulación indica un 78% de probabilidad de subir 15 posiciones"*.

> Los coeficientes del modelo son **transparentes y ajustables** (ver el simulador). En esta demo son ilustrativos; con datos reales y series históricas se calibran.

---

## El KPI más importante
Un tablero con una sola pregunta: **¿qué actividades generan mayor impacto académico y científico por cada sol invertido?** Cuando se mide `presupuesto → resultado`, `gasto → impacto`, `inversión → ranking`, la discusión deja de ser política y pasa a ser **evidencia**.

## 🎯 Objetivo
**Que la UNI suba en los rankings** — y que el modelo sea **referente para todas las universidades públicas del Perú**.

---

## Stack
`index.html` único (HTML + CSS + JS vanilla) + Chart.js. Sin backend. Se publica en GitHub Pages.
Marco principal: **ShanghaiRanking / ARWU** (100% académico: PUB, HiCi, N&S, Award/Alumni, PCP) — el ranking que más pesa. Complementos: **QS** y **THE**. Arquitectura lista para integrar fuentes oficiales: **Scopus / Web of Science**, **SUNEDU**, **CONCYTEC/RENACYT**, **MEF (presupuesto)**, **SCImago (SIR)**.

## Roadmap (resumen)
- [x] Concepto + ISI + simulador (gemelo digital) + escenarios + "Waze institucional" — datos ilustrativos.
- [ ] Integrar datos reales: presupuesto UNI (MEF), publicaciones/citaciones (Scopus/SIR), docentes PhD/RENACYT, ranking histórico (QS).
- [ ] Calibrar coeficientes del modelo con series históricas (elasticidades reales inversión→impacto).
- [ ] Comparador UNI vs pares (PUCP, UNMSM, USP, UNAM, UChile, Unicamp…).
- [ ] Generar el "Plan de Ascenso en Rankings" descargable (PDF).

*Hecho por [Carlos Mauro Cárdenas](https://unimauro.github.io/). Anti-overclaiming: se distingue siempre dato real de ilustrativo.*
