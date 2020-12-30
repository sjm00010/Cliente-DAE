// Variable para almacenar el último envio consultado
export let envioActual = null;
export function setEnvio(envio){ envioActual = envio; }

// Variable para almacenar el último envio creado
export let envioCreado = null;
export function setCreado(envio){ envioCreado = envio; }

// Tipo de login
export let admin = true;
export function setTipo(tipo){ admin = tipo; }