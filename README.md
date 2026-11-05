# SIGA Enhanced

Un tema más amable para **siga.usm.cl** (Sistema de Información y Gestión Académica de la USM), pensado sobre todo para usarlo cómodo desde el celular.

> **Proyecto no oficial.** No tiene relación con la Universidad Técnica Federico Santa María. Solo cambia la apariencia de la página.

## Qué hace

- Modo claro u oscuro (sigue el del sistema) y acento azul o dorado.
- Menú principal en tarjetas agrupadas (Mi carrera, Mis ramos, Trámites), con íconos.
- Adaptación a pantalla chica: letra legible, botones más grandes, marcos de la página ajustados a su contenido y tablas anchas que se deslizan de lado.
- Mantiene los colores con significado (por ejemplo, tope e inscrita en el horario).
- "Correo y Credencial USM" abre directo la tienda de apps (Play Store o App Store) sin pasar por la página intermedia.

## Privacidad

- No lee, guarda ni envía tus datos ni tu clave. No hace conexiones a otros sitios.
- No pide permisos especiales (`@grant none`).
- El código es un solo archivo legible: puedes revisarlo antes de instalarlo.

## Instalación

1. Instala un gestor de scripts:
   - **Android:** Firefox + [Violentmonkey](https://addons.mozilla.org/firefox/addon/violentmonkey/). Chrome para Android no acepta extensiones.
   - **PC:** Violentmonkey o Tampermonkey en Firefox, Chrome o Edge.
   - **iPhone:** la app gratuita *Userscripts* (Safari). Sin probar.
2. Abre el enlace de instalación y acepta:

   **https://raw.githubusercontent.com/TopitoTobal/siga-enhanced/main/siga-enhanced.user.js**

3. Entra a siga.usm.cl.

Se actualiza solo cuando se publica una versión nueva.

## Opciones

Al inicio del script hay unas constantes que puedes cambiar:

| Constante | Valores | Para qué |
|---|---|---|
| `ACCENT` | `"azul"`, `"dorado"` | Color de acento |
| `THEME` | `"auto"`, `"claro"`, `"oscuro"` | Tema |
| `RESPONSIVE` | `true`, `false` | Adaptación a celular |
| `SALTAR_TIENDA` | `true`, `false` | Salto directo a la tienda en "Correo y Credencial" |
| `MARCOS`, `MENU_TARJETAS`, `COLORES` | `true`, `false` | Apagar partes del script para descartar fallos |

## Estado: beta

Probado en Firefox (Android y escritorio) con Violentmonkey. SIGA tiene muchas pantallas y puede que alguna se vea mal. Si te pasa, abre un [issue](https://github.com/TopitoTobal/siga-enhanced/issues) con una captura de la pantalla (**tapa tus datos personales antes**) y con el navegador que usas. Si una pantalla se ve rota, puedes apagar partes del script con las constantes de arriba.

## Créditos y licencia

- Licencia [MIT](LICENSE).
- Íconos del menú: [Material Icons](https://github.com/marella/material-design-icons) (Google), licencia Apache 2.0.
