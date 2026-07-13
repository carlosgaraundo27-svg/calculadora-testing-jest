// src/intranet.js

const procesarMatricula = (cursos) => {
    // Validar cruce de horarios
    const horarios = cursos.map(c => c.horario).filter(Boolean);
    const horariosUnicos = new Set(horarios);
    if (horarios.length !== horariosUnicos.size) {
        return { exito: false, mensaje: 'No se puede procesar. Existe un cruce de horarios' };
    }

    // Validar límite de créditos
    const totalCreditos = cursos.reduce((acc, curso) => acc + (curso.creditos || 0), 0);
    if (totalCreditos > 22) {
        return { exito: false, mensaje: 'Superó el máximo de 22 créditos permitidos. Retire un curso' };
    }

    return { exito: true, mensaje: 'Matrícula procesada correctamente' };
};

const consultarNotas = (semestre, bdNotas) => {
    if (!bdNotas[semestre] || bdNotas[semestre].length === 0) {
        return { exito: false, mensaje: 'No existen calificaciones registradas para el semestre seleccionado' };
    }
    return { exito: true, datos: bdNotas[semestre] };
};

const verificarEstadoFinanciero = (deuda) => {
    if (deuda === 0) {
        return { estado: 'Al día', mensaje: 'Deuda total: S/. 0.00', alerta: false };
    }
    return { estado: 'Deuda', mensaje: `Total a Pagar: S/ ${deuda.toFixed(2)}`, alerta: true };
};

const generarConstancia = (contextoUsuario) => {
    if (!contextoUsuario.sesionActiva) {
        return { exito: false, mensaje: 'Sesión expirada por inactividad' };
    }
    if (contextoUsuario.deuda > 50) {
        return { exito: false, mensaje: 'Trámite retenido. Registra una deuda superior a S/ 50.00' };
    }
    if (!contextoUsuario.tieneMatricula) {
        return { exito: false, mensaje: 'No se encontraron registros de matrícula para el periodo seleccionado' };
    }
    
    return { exito: true, mensaje: 'Documento PDF generado exitosamente' };
};

module.exports = {
    procesarMatricula,
    consultarNotas,
    verificarEstadoFinanciero,
    generarConstancia
};