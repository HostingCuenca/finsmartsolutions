// // src/middleware.js
// export function onRequest({ request, redirect, locals }, next) {
//     const url = new URL(request.url);
//
//     // Permitir acceso a la página de mantenimiento directamente
//     // Permitir acceso a la página de mantenimiento directamente
//     if (url.pathname === '/mantenimiento' || url.pathname === '/mantenimiento/') {
//         return next();
//     }
//
//     // Permitir acceso a recursos estáticos
//     if (
//         url.pathname.startsWith('/assets/') ||
//         url.pathname.startsWith('/public/') ||
//         url.pathname.startsWith('/img/') ||
//         url.pathname.endsWith('.css') ||
//         url.pathname.endsWith('.js') ||
//         url.pathname.endsWith('.svg') ||
//         url.pathname.endsWith('.png') ||
//         url.pathname.endsWith('.jpg') ||
//         url.pathname.endsWith('.jpeg') ||
//         url.pathname.endsWith('.ico') ||
//         url.pathname.endsWith('.xml')
//     ) {
//         return next();
//     }
//
//     // Redirigir todas las demás páginas a la página de mantenimiento
//     return redirect('/mantenimiento');
// }