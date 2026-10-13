# Frontend Entidad

Aplicación frontend desarrollada en Angular para gestionar entidades.

El sistema permite consultar las entidades registradas y crear nuevas entidades mediante un formulario conectado a una API REST.

## Funcionalidades

- Listar entidades registradas.
- Registrar una nueva entidad.
- Actualizar automáticamente la lista después de crear una entidad.
- Consumir una API REST utilizando `HttpClient`.

## Datos de una entidad

Cada entidad contiene:

- `id`
- `nit`
- `nombre`

Ejemplo:

```json
{
  "id": 1,
  "nit": "900123456",
  "nombre": "Entidad de prueba"
}
