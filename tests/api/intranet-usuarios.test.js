// tests/api/intranet-usuarios.test.js
const request = require('supertest');
const API = 'https://reqres.in';
const API_KEY = 'free_user_3FPtnx5Saua9qas0kayna2a4vn6'; 

describe('API Intranet UNSCH - Gestión de Estudiantes (Simulada)', () => {

    test('REQ-01: GET /api/users?page=1 -> 200 OK (Listar estudiantes)', async () => {
        const res = await request(API)
            .get('/api/users?page=1')
            .set('x-api-key', API_KEY); 
            
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body.data)).toBe(true);
        expect(res.body.data.length).toBeGreaterThan(0);
    });

    test('REQ-02: GET /api/users/2 -> 200 OK (Detalle de estudiante)', async () => {
        const res = await request(API)
            .get('/api/users/2')
            .set('x-api-key', API_KEY); 
            
        expect(res.status).toBe(200);
        expect(res.body.data.id).toBe(2);
        expect(res.body.data).toHaveProperty('email');
    });

    test('REQ-03: GET /api/users/999 -> 404 Not Found (Estudiante no existe)', async () => {
        const res = await request(API)
            .get('/api/users/999')
            .set('x-api-key', API_KEY); 
            
        expect(res.status).toBe(404);
    });

    test('REQ-04: POST /api/users -> 201 Created (Registrar estudiante)', async () => {
        const nuevoEstudiante = {
            name: 'Carlos Leonardo',
            job: 'Estudiante de Ingeniería de Sistemas'
        };

        const res = await request(API)
            .post('/api/users')
            .send(nuevoEstudiante)
            .set('Content-Type', 'application/json')
            .set('x-api-key', API_KEY); 
            
        expect(res.status).toBe(201);
        expect(res.body.name).toBe('Carlos Leonardo');
        expect(res.body).toHaveProperty('id');
        expect(res.body).toHaveProperty('createdAt');
    });

    test('REQ-05: DELETE /api/users/2 -> 204 No Content (Dar de baja)', async () => {
        const res = await request(API)
            .delete('/api/users/2')
            .set('x-api-key', API_KEY); 
            
        expect(res.status).toBe(204);
        expect(res.body).toEqual({}); 
    });

});