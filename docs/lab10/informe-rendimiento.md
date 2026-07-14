# Informe de Pruebas de Rendimiento y Carga con k6

## IX. TABLA DE ANÁLISIS

| Métrica | Load Test (10 VUs) | Stress Test (50 VUs) | Spike Test (100 VUs) |
| :--- | :--- | :--- | :--- |
| **p95 http_req_duration** | 118.92 ms | 109.48 ms | 219.09 ms |
| **Promedio (avg)** | 104.24 ms | 101.29 ms | 200.16 ms |
| **Máximo (max)** | 194.1 ms | 135.29 ms | 328.05 ms |
| **% de errores (http_req_failed)** | 60.00% | 88.61% | 0.00% |
| **Total de peticiones (http_reqs)** | 500 | 3135 | 2254 |
| **¿Cumple los thresholds?** | FAIL | FAIL | PASS |
| **Conclusión** | **Normal:** La API responde rápido pero rechaza el 60% de peticiones por límite de tasa (Rate Limit). | **Bajo estrés:** El sistema colapsa (88.6% errores) bloqueando el acceso masivo de usuarios. | **Bajo pico extremo:** La API escala perfectamente, procesando la carga en menos de 250ms sin errores. |

---

## Conclusiones Finales del Sistema

### 1. ¿En qué punto el sistema empieza a degradarse?
El comportamiento del sistema depende de la API evaluada:
*   **En Airport Gap (Load/Stress Test):** El sistema **no se degrada en velocidad** (los tiempos de respuesta se mantienen siempre cerca a los 100ms), pero **se degrada drásticamente en disponibilidad casi de inmediato**. Al llegar a solo 10 usuarios concurrentes, el servidor activa sus mecanismos de defensa (Rate Limiting - HTTP 429) rechazando el 60% del tráfico. Al estresarlo a 50 usuarios, la degradación de disponibilidad es casi total (88.61% de rechazo).
*   **En Restful-Booker (Spike Test):** El sistema demostró una gran robustez. Al inyectar 100 usuarios en apenas 5 segundos, no mostró signos de degradación ni en tiempo de respuesta (p95 de 219.09 ms) ni en disponibilidad (0% de errores).

### 2. ¿Cuántos usuarios soporta cómodamente?
*   **Airport Gap:** Soporta cómodamente a **menos de 10 usuarios** concurrentes realizando peticiones continuas. Para soportar más tráfico sin fallar las pruebas, sería necesario configurar o solicitar una ampliación en el límite de peticiones (Rate Limit) del servidor.
*   **Restful-Booker:** El sistema demostró soportar cómodamente picos extremos de **hasta 100 usuarios simultáneos**, procesando un volumen de más de 2200 peticiones en 40 segundos manteniendo un rendimiento óptimo.