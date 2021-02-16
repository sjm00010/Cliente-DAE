# Cliente web UjaPack
Para hacer uso de la API implementada se va a desarrollar una aplicación web. Esta sencilla aplicación web utilizará [MDB](https://mdbootstrap.com/docs/vue/) y [Vue](https://vuejs.org/). Se debe permitir:

- **Identificación de usuarios**: un sencillo login para usuarios, ya que no se debe poder acceder a la creación de envíos si no se esta registrado.
- **Creación de envíos**: un formulario con todos los campos necesarios para crear un envió. No es necesaria validación ya que se hace en el servidor. Es necesario estar registrado como *Administrador* para poder acceder a esta página.
- **Notificación del paso por un punto de control**: Un sencillo formulario, al que solo se puede acceder como *Operario*, divido en pasos:
   1. *Búsqueda del envío a notificar*: un formulario que consulte y obtenga los datos del envío a actualizar.
   2. *Introducción de datos requeridos*: un segundo formulario para introducir los datos necesarios para la notificación. Este segundo formulario se habilitara tras el primero siempre y cuando no haya un error en la obtención del envió.
- **Obtención de información del envío**: estado actual y fechas de paso por los puntos de control hasta el momento. Similar al formulario de *Búsqueda del envío a notificar*, se presentaran al usuario (sin identificar) los datos del envío solicitado.

### Iniciar el proyecto
Para iniciar el proyecto en la versión de desarrollo, es necesario clonar el repositorio, instalar las dependencias (``` npm install ```) y ejecutar en la consola el siguiente comando ``` npm start ```, que lanzará el proyecto con HTTPS y lo abrirá en una pestaña del navegador automaticamente.

## Como usar el proyecto
1. Iniciar la base de datos en Docker.
2. Iniciar la API, como se indica en el [proyecto del API](https://github.com/sjm00010/Practicas-DAE).
3. Iniciar el cliente web.

Se debe realizar en ese orden para que el cliente no le quite el puerto al API. Además de lo comentado es aconsejable, para no tener problemas durante la ejecución del cliente web debido al certificado HTTPS, habilitar la siguiente opción en Chrome : ```chrome://flags/#allow-insecure-localhost```. Si no se realiza debera de abrirse la aplicacion en incognito ya que Google Chrome (así como otro navegadores) bloquea certificados no reconcidos.

### Versión de producción
Si se desea trabajar con la versión de produccion hay que realizar dos pasos:
1. **Compilar el proyecto**: ```npm run build``` compilará el proyecto en la carpeta llamada *dist*.
2. **Ejecutar el proyecto**: ```serve -s dist``` para lanzar el proyecto.
