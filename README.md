# Suite de Pruebas Automáticas y CI/CD

![CI Jest](https://github.com/carlosgaraundo27-svg/calculadora-testing-jest/actions/workflows/ci-jest.yml/badge.svg)
![CI Playwright](https://github.com/carlosgaraundo27-svg/calculadora-testing-jest/actions/workflows/ci-playwright.yml/badge.svg)
[![Quality Gate](https://sonarcloud.io/api/project_badges/measure?project=carlosgaraundo27-svg_calculadora-testing-jest&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=carlosgaraundo27-svg_calculadora-testing-jest)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=carlosgaraundo27-svg_calculadora-testing-jest&metric=coverage)](https://sonarcloud.io/summary/new_code?id=carlosgaraundo27-svg_calculadora-testing-jest)

Proyecto de implementación de un entorno de pruebas completo y despliegue continuo (CI/CD) utilizando GitHub Actions y SonarCloud.

## Tecnologías utilizadas

*   **Pruebas Unitarias y de API:** Jest
*   **Pruebas End-to-End (E2E):** Playwright
*   **Análisis de Código Estático:** SonarCloud
*   **Integración Continua:** GitHub Actions

## Cómo ejecutar las pruebas localmente

1.  **Instalar dependencias:**
    ```bash
    npm install
    npm install -D @playwright/test
    npx playwright install
    ```

2.  **Ejecutar pruebas unitarias y de API (Jest):**
    ```bash
    npm test
    ```
    *Para ver el reporte de cobertura:* `npm run test:coverage`

3.  **Ejecutar pruebas E2E (Playwright):**
    ```bash
    npx playwright test
    ```