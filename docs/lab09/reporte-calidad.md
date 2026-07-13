# Reporte de Calidad — SGI InkaRetail
# IS-489 | Semestre 2026-I | Ing. Lizbeth Jaico
## 1. Resumen ejecutivo

| Indicador | Valor | Estado |
|------------------|---------------|---------|
| Tests unitarios | 12 passing | ✓ OK |
| Tests de API | 10 passing | ✓ OK |
| Tests E2E | 7 passing | ✓ OK |
| Cobertura total | 93.18% | ✓ OK |
| Quality Gate | PASSED | ✓ OK |
| Bugs (Sonar) | 0 | ✓ OK |
| Code Smells | 0 | ✓ OK |
## 2. Cobertura por módulo

| Módulo | Statements | Branches | Functions |
|----------------------------------|-----------|----------|-----------|
| src/calculadora/calculadora.js | 100% | 100% | 100% |
| src/Intranet/intranet.js | 96.42% | 88.88% | 100% |

## 3. Trazabilidad: casos de prueba por tipo

| Tipo | Lab | Cantidad | Estado |
|---------------|--------|----------|---------|
| Unitarios | Lab 05 | 12 | Automatizados |
| API | Lab 06 | 10 | Automatizados |
| E2E | Lab 07 | 7 | Automatizados |

## 4. Estado del pipeline CI/CD

- **Pipeline Jest (Pruebas Unitarias y API):** PASS en cada Push hacia las ramas principales.
- **Pipeline Playwright (Pruebas E2E):** PASS en cada Pull Request para validar integración.
- **SonarCloud:** Quality Gate PASSED (0% de duplicaciones, 93.18% de cobertura estimada tras el merge).

## 5. Hallazgos y recomendaciones

- **Análisis estático limpio:** El reporte de SonarCloud indica que existen 0 bugs, 0 vulnerabilidades y 0 code smells. El código cumple con los estándares de calidad del "Sonar way" sin agregar deuda técnica nueva.
- **Líneas no cubiertas detectadas:** Al revisar el reporte de cobertura de Jest en consola y en el formato HTML, se identificó que la **línea 45** del archivo `src/Intranet/intranet.js` no está siendo ejecutada por ningún caso de prueba actual.
- **Recomendaciones de mejora:** Se recomienda diseñar e implementar un nuevo caso de prueba en `intranet.test.js` que cubra la condición lógica de la línea 45. Esto permitirá elevar la métrica de ramas (Branches) del módulo de la Intranet de un 88.88% al 100%, maximizando la fiabilidad del sistema de matrículas.