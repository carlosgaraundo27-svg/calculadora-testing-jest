# Reporte de Vulnerabilidades - Laboratorio 11

## VII. TABLA DE HALLAZGOS

| # | Vulnerabilidad encontrada | Nivel de riesgo | Sistema y endpoint afectado | Recomendación |
|---|---|---|---|---|
| 1 | Sin límite de intentos de login (Fuerza bruta - A07) | ALTO | Restful-Booker - POST /auth | Implementar rate limiting: máximo 5 intentos por minuto por IP. |
| 2 | Credenciales por defecto (admin/password123 - A05) | MEDIO | Restful-Booker - POST /auth | Cambiar credenciales antes de desplegar. Aplicar política de contraseña segura. |
| 3 | Exposición de información en errores (A09) | MEDIO/BAJO | Restful-Booker - POST /booking | Estandarizar los mensajes de error (400 Bad Request) para no revelar detalles técnicos. |
| 4 | Broken Access Control (Modificación sin token - A01) | ALTO | Restful-Booker - PUT /booking | Implementar validación estricta de token Bearer/Cookie en todos los métodos de escritura (PUT, POST, PATCH, DELETE). |
| 5 | [Cabecera Content Security Policy (CSP) no configurada] | [Nivel: ej. MEDIUM] | Restful-Booker - [Endpoint] | [Asegúrese de que su servidor web, servidor de aplicaciones, balanceador de carga, etc. esté configurado para establecer la cabecera Content-Security-Policy.] |
| 6 | [Divulgación de Marcas de Tiempo - Unix] | [Nivel: ej. LOW] | Restful-Booker - [Endpoint] | [Confirmar que los datos encontrados de información sobre la marca de tiempo no son sensibles, ni se pueden usar en patrones explotables de divulgación.] |

---
*Nota: La API de Airport Gap fue evaluada (A01 y A03) y superó correctamente las pruebas de acceso bloqueando peticiones no autorizadas (401) y parámetros malformados (422/400).*