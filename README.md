# Handmade Shop – Frontend

Frontend de una plataforma e-commerce para productos artesanales desarrollado con **Angular** y **Tailwind CSS**.

Este proyecto forma parte de mi portfolio como desarrolladora **Frontend / Full Stack Junior**, con el objetivo de demostrar conocimientos en desarrollo de aplicaciones, consumo de APIs REST, autenticación mediante JWT y organización de proyectos con Angular.

> **Backend del proyecto:** https://github.com/manuela217/handmade-shop-backend

---

## Características

- Catálogo de productos
- Registro de usuarios
- Inicio de sesión
- Autenticación mediante JWT
- Gestión de sesión
- Carrito de compras
- Gestión de pedidos
- Panel de administración
- Diseño responsive
- Consumo de API REST

---

## Tecnologías

| Tecnología | Uso |
|------------|-----|
| Angular | Framework frontend |
| TypeScript | Lenguaje principal |
| Tailwind CSS | Estilos |
| Angular Router | Navegación |
| HttpClient | Consumo de API REST |
| RxJS | Programación reactiva |

---

## Arquitectura

El proyecto sigue una estructura modular basada en la separación de responsabilidades, facilitando el mantenimiento y la escalabilidad de la aplicación.

```
src/app
├── core
│   ├── guards
│   ├── interceptors
│   └── services
├── features
│   ├── admin
│   │   ├──categories
│   │   └──products
│   ├── auth
│   │   ├──login
│   │   ├──logout
│   │   └──register
│   ├── cart
│   │   └──summary-order
│   ├── categories
│   ├── home
│   ├── orders
│   │   └──order-confirmaation
│   └── products
│   │   └──detail-product
└──shared
    ├── components
    │   ├──footer
    │   ├──header-admin
    │   └──navbar
    ├── dto
    ├── enums
    └── models

```

### Organización

**Core**

Contiene los servicios globales de la aplicación, los guards y la gestión de sesión.

**Features**

Agrupa las distintas funcionalidades y vistas de la aplicación.

**Shared**

Incluye modelos, DTOs y elementos compartidos entre distintos módulos.

---

## Autenticación

La autenticación se realiza mediante **JWT (JSON Web Token)**.

### Flujo de autenticación

1. El usuario inicia sesión.
2. El backend devuelve un JWT.
3. El token se almacena en la sesión del navegador.
4. Las peticiones autenticadas incluyen el token en la cabecera Authorization.
5. Los guards protegen las rutas privadas.

### Roles

La aplicación distingue entre dos tipos de usuarios:

| Rol | Funcionalidad |
|------|---------------|
| ADMIN | Gestión de productos y categorías |
| USER | Compra y gestión de pedidos |

Tras iniciar sesión, cada usuario es redirigido automáticamente a la sección correspondiente según su rol.

---

## Funcionalidades

### Usuario

- Registro
- Inicio de sesión
- Visualización del catálogo
- Carrito de compra
- Realización de pedidos

### Administrador

- Gestión de categorías
- Gestión de productos

---

## Configuración

### Requisitos

- Node.js
- Angular CLI

### Clonar el proyecto

```bash
git clone git@github.com:manuela217/handmade-shop-frontend.git

cd handmade-shop-frontend
```

---

### Instalar dependencias

```bash
npm install
```

---

### Configuración

La URL del backend se configura mediante los archivos de entorno de Angular.

Ejemplo:

```ts
export const environment = {
  apiUrl: 'http://localhost:8080/api/v1'
};
```

---

### Ejecutar la aplicación

```bash
ng serve
```

La aplicación estará disponible en:

```
http://localhost:4200
```

---

## Comunicación con el backend

El frontend consume la API REST desarrollada con Spring Boot para:

- Registro de usuarios
- Inicio de sesión
- Gestión de productos
- Gestión de categorías

Toda la comunicación se realiza mediante peticiones HTTP utilizando **HttpClient**.

---

## Próximas mejoras

- Implementación de HttpInterceptor para la gestión automática del JWT
- Gestión automática de expiración del token
- Gestión centralizada de errores HTTP
- Pantalla de historial de pedidos del usuario
- Mejora de componentes reutilizables
- Tests unitarios
- Mejora de la accesibilidad

---

## Objetivos de aprendizaje

Durante el desarrollo de este proyecto se han aplicado conceptos como:

- Angular
- TypeScript
- Consumo de APIs REST
- Gestión del estado de autenticación
- Guards
- Routing
- Componentes reutilizables
- Organización modular
- Diseño responsive

---

## 👩‍💻 Autor

Desarrollado por Manuela Mendoza Barba

Proyecto de portfolio como desarrolladora frontend/fullstack junior

- GitHub: https://github.com/manuela217
- LinkedIn: https://www.linkedin.com/in/manuela-mendoza-barba/

---

> Este proyecto forma parte de mi portfolio personal y tiene un propósito únicamente educativo y demostrativo. Su desarrollo continúa con nuevas funcionalidades y mejoras conforme avanzo en mi aprendizaje de Angular y desarrollo Full Stack.