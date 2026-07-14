// spike-test.js - Spike Test sobre Restful-Booker
// Simula un pico repentino: de 5 a 100 usuarios en 5 segundos
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '10s', target: 5 },   // inicio normal
    { duration: '5s', target: 100 },  // PICO: de 5 a 100 en 5 segundos
    { duration: '10s', target: 100 }, // mantener el pico
    { duration: '5s', target: 5 },    // caída repentina
    { duration: '10s', target: 0 },   // recuperación
  ],
  thresholds: {
    // En un pico extremo aceptamos hasta 2 segundos
    http_req_duration: ['p(95)<2000'],
    http_req_failed: ['rate<=0.10'], // hasta 10% de errores en el pico
  }
};

export default function () {
  // Petición al endpoint de reservas
  const res = http.get('https://restful-booker.herokuapp.com/booking');
  check(res, {
    'status 200': (r) => r.status === 200,
    'tiene datos': (r) => Array.isArray(JSON.parse(r.body)),
  });
  sleep(0.5); // pausa más corta, usuarios impacientes en un pico
}