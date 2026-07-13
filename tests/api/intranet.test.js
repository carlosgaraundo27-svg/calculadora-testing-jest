const { 
    procesarMatricula, 
    consultarNotas, 
    verificarEstadoFinanciero, 
    generarConstancia 
} = require('../../src/Intranet/intranet.js');

describe('Módulo I: Matrícula en Línea', () => {
    test('TC-MAT-001: Matrícula exitosa al límite exacto de 22 créditos', () => {
        const cursos = [{ nombre: 'Cálculo', creditos: 5 }, { nombre: 'Algoritmos', creditos: 17 }]; // Suma 22
        const resultado = procesarMatricula(cursos);
        expect(resultado.exito).toBe(true);
        expect(resultado.mensaje).toBe('Matrícula procesada correctamente');
    });

    test('TC-MAT-002: Rechazo de matrícula por exceso de créditos', () => {
        const cursos = [{ nombre: 'Cálculo', creditos: 10 }, { nombre: 'Física', creditos: 13 }]; // Suma 23
        const resultado = procesarMatricula(cursos);
        expect(resultado.exito).toBe(false);
        expect(resultado.mensaje).toBe('Superó el máximo de 22 créditos permitidos. Retire un curso'); 
    });

    test('TC-MAT-011: Bloqueo de matrícula por cruce de horarios', () => {
        const cursos = [
            { nombre: 'Sistemas Operativos', horario: 'Lun 08:00-10:00' },
            { nombre: 'Base de Datos II', horario: 'Lun 08:00-10:00' } 
        ];
        const resultado = procesarMatricula(cursos);
        expect(resultado.exito).toBe(false);
        expect(resultado.mensaje).toBe('No se puede procesar. Existe un cruce de horarios'); 
    });
});

describe('Módulo II: Consulta de Notas', () => {
    const bdNotas = { '2026-I': [{ curso: 'Ingeniería Económica', nota: 17 }] };

    test('TC-NOT-003: Visualización correcta de notas del semestre activo', () => {
        const resultado = consultarNotas('2026-I', bdNotas);
        expect(resultado.exito).toBe(true);
        expect(resultado.datos.length).toBeGreaterThan(0);
    });

    test('TC-NOT-004: Rechazo de consulta en semestre sin registro de notas', () => {
        const resultado = consultarNotas('2026-II', bdNotas);
        expect(resultado.exito).toBe(false);
        expect(resultado.mensaje).toBe('No existen calificaciones registradas para el semestre seleccionado'); 
    });
});

describe('Módulo III: Pagos / Tesorería', () => {
    test('TC-PAG-005: Consulta de estado sin deudas pendientes (Solvente)', () => {
        const resultado = verificarEstadoFinanciero(0);
        expect(resultado.estado).toBe('Al día'); 
        expect(resultado.mensaje).toContain('S/. 0.00'); 
    });

    test('TC-PAG-006: Alerta visible por deuda pendiente en semestre activo', () => {
        const resultado = verificarEstadoFinanciero(37.00);
        expect(resultado.estado).toBe('Deuda');
        expect(resultado.alerta).toBe(true);
    });
});

describe('Módulos IV y V: Historial y Documentos', () => {
    test('TC-PAG-012: Bloqueo de solicitud de constancia por deuda activa > S/ 50.00', () => {
        const resultado = generarConstancia({ deuda: 55.00, sesionActiva: true, tieneMatricula: true }); 
        expect(resultado.exito).toBe(false);
        expect(resultado.mensaje).toBe('Trámite retenido. Registra una deuda superior a S/ 50.00'); 
    });

    test('TC-HIS-008: Intento de descarga con sesión expirada', () => {
        const resultado = generarConstancia({ deuda: 0, sesionActiva: false, tieneMatricula: true });
        expect(resultado.exito).toBe(false);
        expect(resultado.mensaje).toBe('Sesión expirada por inactividad');
    });

    test('TC-DOC-010: Intento de descarga en periodo sin matrícula', () => {
        const resultado = generarConstancia({ deuda: 0, sesionActiva: true, tieneMatricula: false });
        expect(resultado.exito).toBe(false);
        expect(resultado.mensaje).toBe('No se encontraron registros de matrícula para el periodo seleccionado'); 
    });
});
