This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts Este proyecto se realizo con [Create React App](https://github.com/facebookincubator/create-react-app).

Puede ver el sitio [oprimiendo click aqui](http://165.227.204.33:3000/).

## Indice

- [Especificaciones del desarrollo](#especificaciones-del-desarrollo)
- [Instalación y despliegue](#instalacion-y-despliegue)


## Especificaciones del desarrollo

El desarrollo esta enfocado a una prueba de selección para desarrollador front-end contiene las siguientes caracteristicas:

* `Home` La aplicación trae al azar 2 imagenes de perros desde una API y el cual al presionar en alguna de las 2 imagenes lo lleva hasta el detalle de ese perro
* `Todos` Al cargar la pagina /Todos, primero realiza la peticion donde se ejcuenta un spinner mientras llega la data, donde despues se mostrara todas las imagenes traida desde la API.

* `Enrutamiento` El enrutamiento es simple, tiene las rutas `/Home`, `/Todos`, `/Detail` y al ingresar alguna ruta erronea sera redirigido al `/Home`.

## Pruebas unitarias

* Las pruebas unitarias se encuentran en la ruta: `/__test__/components/`
* Se realizo pruebas unitarias de la petcion de la API y al boton.
* Ejecute las pruebas unitarias con el siguiente comando: `jest`


## instalacion y despliegue

* Clone el proyecto con git ejecutando el siguiente comando  `git clone https://github.com/FauricioValencia/ESOFT.git`.
* Instale las dependencias con siguiente comando `yarn`.
* Corra el proyecto con el siguiente comando `yarn start`.

