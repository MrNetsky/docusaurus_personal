---
slug: configuracion-meshtastic
title: Guía de configuración inicial paso a paso para tu dispositivo Meshtastic
sidebar_label: Configuración inicial Meshtastic
authors:
  - key: MrNetsky
    title: Autor
  - key: nicopace
    title: Colaborador
  - key: aguslasp
    title: Colaborador
tags: [dispositivos]
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

:::warning Atención 
Este artículo fue creado en Febrero del 2026. En este mensaje podrá ver cuando fue actualizado por última vez este artículo. Esto es debido a que la tecnología se actualiza constantemente y esta guía puede quedar desactualizada con el progreso de las herramientas o el surgimiento de nuevas.
:::

Ya hemos explorado qué es Meshtastic, por qué se ha convertido en la solución líder para la comunicación resiliente y cómo su ecosistema de Fabricantes y Ensambladores ha dado forma al hardware disponible. Ahora, es momento de dejar atrás la teoría y concentrarnos en el paso más crucial: activar tu primer nodo y ponerlo a trabajar.

A través de un proceso sencillo y directo, abordaremos tres aspectos fundamentales:

- Configuración: Aprenderás a encender correctamente el dispositivo, conectar la antena y, lo más importante, a vincularlo a tu smartphone mediante la aplicación Meshtastic (usando la conexión Bluetooth).

- Uso Básico: Entenderás cómo establecer parámetros vitales como la frecuencia regional (garantizando su legalidad y alcance) y el nombre de tu nodo.

- Funcionamiento: Te mostraremos cómo enviar tus primeros mensajes y cómo confirmar que tu dispositivo está efectivamente "saltando" la señal a otros nodos, extendiendo el alcance de la red.

Nuestro objetivo es que, en pocos minutos, tu dispositivo se convierta en un miembro activo y operativo de la comunicación descentralizada, garantizando que puedas empezar a explorar todo su potencial en tus aventuras o planes de emergencia.

## Preparación del dispositivo

:::info información
Tenga en cuenta que estas configuraciones están pensadas para Argentina, por lo que si usted pertenece a otro país, puede que tenga que elegir otras opciones, pero la forma de acceder a dichas configuraciones es la misma para todos los países.
:::

1. **Obtención de un dispositivo:** 
Existe un gran variedad de dispositivos, el que hayas de elegir dependerá de su [*función*](/blog/tipos-de-dispositivos), también hay una gran variedad de [*marcas*](/blog/fabricantes-ensambladores) que se dedican al universo meshtastic. Nosotros a fines prácticos, usaremos un ~~rellene este espacio~~,pero el proceso es el mismo para todos.

### Región
Es importante este apartado, ya que no podrás utilizar el dispositivo, esto se puede hacer mediante tres medios, desde el dispositivo, la app del celular o desde Meshtastic CLI (comand line interface), pero en este artículo NO se ahondará sobre esta herramienta y su funcionamiento.

+ Desde el dispositivo se puede hacer en dos momentos:
  + Al iniciar un dispositivo con pantalla sin haberlo conectado con un teléfono previamente con un firmware igual o superior al 2.7.15. Te dará la posibilidad de configurar la región, debiéndose elegir la opción **ANZ**.
  + Desplazándose al menú de LoRa info, aquí lo que se debe acceder al menú de *LoRa actions* y seleccionar la opción *LoRa Region*. Allí debo elegir la opción **ANZ**.

~~RECORDAR SACAR FOTOS~~

+ Desde app, luego de la vinculación, en la misma ventana, verás una opción que te pide que indiques la región del dispositivo, aquí seleccionas la región de **Australia/Brasil/Nueva Zelanda/**

~~RECORDAR SACAR FOTOS~~

### Firmware

Existen dos métodos: vía BLE (bluetooth low energy) o vía USB. Pero desde este espacio, no recomendamos el primer método, al menos no al 01/26, porque intentando actualizarlo vía este método, el dispositivo se trabó, tuvimos que desarmarlo, desconectar la batería, actualizar el firmware via USB una vez que se actualizó, reconectamos la batería y rearmamos el dispositivo. Lo que, como podrás haber notado, nos llevó al segundo método, pero... Cómo se hace? Bueno, es sencillo siguiendo estos pasos:

<Tabs>
  <TabItem 
    value="linux" 
    label={
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span>nRF52</span>
      </div>
    } 
    default
  >
1. Ingresar a la página donde podes flasear el firmware. [Aquí puedes acceder a la página](https://flasher.meshtastic.org/)
2. Selecionas el dispositivo que vayas a flashear. Para que puedas encontrar más rápido el dispositivo, podes seleccionar la marca y te muestra todos los dispositivos disponibles de una marca. Si se lo compras a un ensamblador, lo que deberás buscar al fabricante de la placa. Por ejemlo, nosotros tenemos un Meshnology N37 que es prácticamente un Wio Tracker L1, entonces nosotros seleccionamos como nuestro dispositivo al Wio Tracker L1.
3. Versión del firmware. Existen alfas (inestables) y betas (estables), recomendamos que utilices la última beta disponible.
4. Antes de orpimir flashear, deberá conectar el dispositivo vía USB. ¿Debe esperar a hasta este punto para poder conectarlo? No, puede hacerlo incluso antes del primer paso.
5. Hacerlo entrar en modo DFU (device firmware update). ¿Cómo se hace? Estando conectado al PC/Notebook, oprimiendo dos veces el botón de reset (también se lo puede hacer entrar en este modo desde Meshtastic CLI, pero no ahondaremos en ese proceso en este artículo). Como sabrá que logró hacerlo entrar en DFU, se le abrirá automáticamente la carpeta del dispositivo en la pantalla, o podrá acceder a la carpeta del dispositivo desde el gestor de archivos, independientemente del sistema operativo que poseas.
6. Ahora si oprimimos flashear, allí nos mostrará en pantalla, dónde quieres descargar la versión del firmware, seleccionaras la darpeta del dispositivo y le das a aceptar. Puede ocurrir que el archivo que estes descargando tenga el mismo nombre que el del firmware actual de tu dispositivo, en ese caso te preguntará si quieres reescribir el nombre y le dirás que sí.

¿Cómo saber que el proceso terminó? El dispositivo se desconectará solo del PC, esto es debido a que se reinició para aplicar los cambios. Podrá ver que el proceso fue exitoso ya que le dará la versión que usted ha descargado.

  </TabItem>

  <TabItem 
    value="windows" 
    label={
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span>ESP32</span>
      </div>
    }
  >
    Instrucciones ESP32
  </TabItem>
</Tabs>


¿Cada cuánto es recomendable actualizar el firmware? Aún no definimos una métrica recomendable que permita asegurar cada cuánto debe usted actualizar el firmware. Si recomendamos que haga este procedimiento apenas haya adquirido el producto, aunque no es necesario que lo haga antes de conectarlo al celular por primera vez.

### Configuraciones adicionales
Aquí se mostrarán las modificaciones que quizá, no son tan escenciales, pero que nosotros hemos llevado a cabo.
#### Hora 
Al momento de configurarla, es probable que se actualice sola al momento de vincular el dispositivo con el celular, pero puede que haya una diferencia de zona horaria, para ello la cambiaremos, desde la app o desde el nodo, pero puede que no aparezca Argentina, por lo que elegiremos una que coincida con la nuestra, en este caso utilizaremos Brasilia.

#### Canales
Desde la app entras al apartado de ajustes, en la sección de canales, ahí solo verás uno por defecto, se llama 'long fast'. Ahí verás un signo '+' el cual debes orpimir, una vez acá eliges el nombre de el canal y lo importante es la dirección del canal, el cual deberás compartir a quien/es que formará/n parte del canal. Una vez terminado, sales de esta ventana y aprietas en enviar. Importante es que envíes los datos, porque de lo contrario es como si no hubieses hecho nada.

#### Ubicación precisa
En el mismo lugar donde creaste el canal, uno de lo apartado es que puedas enviar la posición, debes de activar esa opción, una vez hecho esto, lo que debes es habilitar la ubicción prescisa. Sales de est ventana y le das a enviar.

