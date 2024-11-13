// In single-spa, the assets need to be loaded from a dynamic location,
// instead of hard coded to `/assets`. We use webpack public path for this.
// See https://webpack.js.org/guides/public-path/#root

// Esta función toma una URL y devuelve la URL completa para cargar los recursos desde la ubicación dinámica
// configurada en Webpack. Esto es importante en una arquitectura de micro front-end donde la ubicación de los
// recursos no está fija.

export function assetUrl(url: string): string {
  // @ts-ignore
  // __webpack_public_path__ es una variable global definida por Webpack que contiene el camino público configurado.
  const publicPath = __webpack_public_path__;
  // Verifica si el camino público termina en '/', si no es así, agrega '/' para asegurar que la URL final esté correcta.
  const publicPathSuffix = publicPath.endsWith('/') ? '' : '/';
  // Verifica si la URL proporcionada comienza con '/', si no es así, agrega '/' para asegurar la correcta concatenación.
  const urlPrefix = url.startsWith('/') ? '' : '/';
  // Retorna la URL completa combinando el camino público, el sufijo necesario, el prefijo y la URL del recurso.
  // De esta forma, se garantiza que los recursos se carguen correctamente desde la ubicación configurada dinámicamente.
  return `${publicPath}${publicPathSuffix}assets${urlPrefix}${url}`;
}
