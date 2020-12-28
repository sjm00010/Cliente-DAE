# Cliente web UjaPack
Para hacer uso de la API implementada se va a desarrollar una aplicación web. Esta sencilla aplicación web utilizará [MDB](https://mdbootstrap.com/docs/vue/) y [Vue](https://vuejs.org/). Se debe permitir:

- **Identificación de usuarios**: un sencillo login para usuarios, ya que no se debe poder acceder a la creación de envíos si no se esta registrado.
- **Creación de envíos**: un formulario con todos los campos necesarios para crear un envió. No es necesaria validación ya que se hace en el servidor. Es necesario estar registrado como *Administrador* para poder acceder a esta página.
- **Notificación del paso por un punto de control**: Un sencillo formulario, al que solo se puede acceder como *Operario*, divido en pasos:
   1. *Búsqueda del envío a notificar*: un formulario que consulte y obtenga los datos del envío a actualizar.
   2. *Introducción de datos requeridos*: un segundo formulario para introducir los datos necesarios para la notificación. Este segundo formulario se habilitara tras el primero siempre y cuando no haya un error en la obtención del envió.
- **Obtención de información del envío**: estado actual y fechas de paso por los puntos de control hasta el momento. Similar al formulario de *Búsqueda del envío a notificar*, se presentaran al usuario (sin identificar) los datos del envío solicitado.

## Como usar el proyecto
Antes de poder usar el cliente web es necesario tener iniciada la API y la base de datos en Docker, como se indica en el [proyecto del API](https://gitlab.com/sjm00010/dae).
### Iniciar el proyecto
Para iniciar el proyecto en la versión de desarrollo, solo es necesario clonar el repositorio y ejecutar en la consola el siguiente comando ``` npm start ```, que lanzará el proyecto y lo abrirá en una pestaña del navegador automaticamente.

### Versión de producción
Si se desea trabajar con la versión de produccion hay que realizar dos pasos:
1. **Compilar el proyecto**: ```npm run build``` compilará el proyecto en la carpeta llamada *dist*.
2. **Ejecutar el proyecto**: ```serve -s dist``` para lanzar el proyecto.
