# SimpleApp

Esta es una aplicación básica que utiliza Next JS 13, Tailwind y Next-Auth para permitir a los usuarios iniciar sesión con Google y ver su nombre y correo electrónico.

## Requisitos previos

Antes de ejecutar esta aplicación, asegúrate de haber configurado las siguientes variables de entorno:

- `GOOGLE_ID`: El ID de cliente de Google que se utiliza para autenticar a los usuarios.
- `GOOGLE_SECRET`: El secreto de cliente de Google que se utiliza para autenticar a los usuarios.
- `NEXT_PUBLIC_WEB_URL`: La URL pública de la aplicación.
- `NEXTAUTH_URL`: La URL pública de autenticación de Next-Auth.

## Cómo iniciar la aplicación

1. Clona este repositorio en tu máquina local.
2. Ejecuta `npm install` para instalar todas las dependencias.
3. Crea un archivo `.env.local` en el directorio raíz del proyecto y agrega las variables de entorno mencionadas anteriormente.
4. Ejecuta `npm run dev` para iniciar la aplicación en modo de desarrollo.

## Cómo utilizar la aplicación

1. Accede a la URL de la aplicación.
2. Haz clic en el botón "Iniciar sesión con Google".
3. Inicia sesión con tu cuenta de Google.
4. Verás tu nombre y correo electrónico en la pantalla de inicio de sesión.

¡Disfruta de la aplicación!