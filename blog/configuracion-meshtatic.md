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

:::warning Atención 
Este artículo fue creado en Febrero del 2026. En este mensaje podrá ver cuando fue actualizado por última vez este artículo. Esto es debido a que la tecnología se actualiza constantemente y esta guía puede quedar desactualizada con el progreso de las herramientas o el surgimiento de nuevas.
:::

Ya hemos explorado qué es Meshtastic, cómo se desempeña y en qué dispositivos lo hace, pero ahora bien necesitamos saber cómo configurarlo para poder aprovechar el poder de esta tecnología. Por lo que veremos cómo activar tu primer nodo y ponerlo a laburar.

A través de un proceso sencillo y directo, abordaremos tres aspectos fundamentales:

- **Configuración:** Cómo conectar la antena, encender correctamente el dispositivo y vincularlo a tu teléfono mediante la aplicación Meshtastic (usando la conexión Bluetooth).  

- **Uso básico:** Entenderás cómo establecer parámetros vitales como la frecuencia y el nombre de tu nodo.  

- **Funcionamiento:** Te mostraremos cómo enviar tus primeros mensajes y cómo confirmar que tu dispositivo está efectivamente "saltando" la señal a otros nodos, extendiendo el alcance de la red.

Nuestro objetivo es que, en pocos minutos, tu dispositivo se convierta en un miembro activo y operativo de la comunicación descentralizada, garantizando que puedas empezar a explorar todo su potencial.

## Preparación del dispositivo

:::info información Tenga en cuenta que estas configuraciones están pensadas para Argentina, por lo que si usted pertenece a otro país, puede que tenga que elegir otras opciones, pero la forma de acceder a dichas configuraciones es la misma para todos los países. :::

1. **Obtención de un dispositivo:** Existe un gran variedad de dispositivos, el que hayas de elegir dependerá de su [*función*](http:///blog/tipos-de-dispositivos), también hay una gran variedad de [*marcas*](http:///blog/fabricantes-ensambladores) que se dedican al universo Meshtastic. Nosotros no usaremos uno en particular para esta guía porque el proceso es similar para todos.

### Región

Este paso es esencial para poder comunicarte con otros dispositivos. Esto se puede hacer mediante tres medios: desde el dispositivo, la app del celular o desde Meshtastic CLI (comand line interface), en este artículo NO se ahondará sobre esta última herramienta y su funcionamiento.

+ Si el dispositivo tiene pantalla, se puede hacer en dos momentos:
  - Al iniciar, sin haberlo conectado con un teléfono previamente con un firmware igual o superior al 2.7.15. Te dará la posibilidad de configurar la región, debiendo elegir la opción **ANZ** (Australia/Nueva Zelanda).  
  - Desplazándose al menú de LoRa info, aquí se debe acceder al menú de *LoRa actions* y seleccionar la opción *LoRa Región*. Allí debo elegir la opción **ANZ**.
+ Desde la app, luego de la vinculación, en la misma ventana, verás una opción que te pide que indiques la región del dispositivo, aquí seleccionas la región de **Australia/Brasil/Nueva Zelanda.** Esto es porque en estos países, al igual que Argentina, se usan las frecuencias 902 a 928MHz, comúnmente conocidas como 915MHz. Estas bandas son libres de uso y NO requieren una licencia especial para poder operarlas.

### Firmware

Es el sistema operativo del dispositivo y como cualquier sistema, requiere de actualizaciones, pero no lo hace de manera autónoma. Por ello, debemos hacerlo nosotros.
Existen dos métodos: vía BLE (bluetooth low energy) o vía USB. Desde este espacio, no recomendamos el primer método, al menos no a la fecha 02/26 porque intentando actualizarlo vía este método, el dispositivo se trabó, tuvimos que desarmarlo, desconectar la batería, actualizar el firmware vía USB una vez que se actualizó, se reconectó la batería y rearmó el dispositivo. Lo que nos llevó al segundo método, pero... ¿Cómo se hace? Bueno, dependiendo del núcleo de tu nodo deberás seguir unos sencillos pasos, que aunque son similares, tienen sus diferencias como podrás ver a continuación:

<Tabs>
  <TabItem
    value="nrf52"
    label={
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span>nRF52</span>
      </div>
    }
    default
  >

1. Ingresar a la página donde puedes flashear el firmware. [Aquí puedes acceder a la página](https://flasher.meshtastic.org/)
2. Seleccione el dispositivo que vayas a flashear. Para que puedas encontrar más rápido el dispositivo, puedes seleccionar la marca y te muestra todos los dispositivos disponibles de una marca. Si se lo compras a un ensamblador, deberás buscar al fabricante de la placa. Por ejemplo, nosotros tenemos un Meshnology N37 que es prácticamente un Wio Tracker L1, entonces nosotros seleccionamos como nuestro dispositivo al Wio Tracker L1.
3. Versión del firmware. Existen alfas (inestables) y betas (estables), recomendamos que utilices la última beta disponible.
4. Antes de oprimir flashear, deberá conectar el dispositivo vía USB. ¿Debe esperar hasta este punto para poder conectarlo? No, puede hacerlo incluso antes del primer paso.
5. Hacerlo entrar en modo DFU (device firmware update). ¿Cómo se hace? Estando conectado al PC/Notebook, oprimiendo dos veces el botón de reset (también se lo puede hacer entrar en este modo desde Meshtastic CLI, pero no ahondaremos en ese proceso en este artículo). Cómo sabrá que logró hacerlo entrar en DFU, se le abrirá automáticamente la carpeta del dispositivo en la pantalla, o podrá acceder a la carpeta del dispositivo desde el gestor de archivos, independientemente del sistema operativo que poseas.
6. Elegiremos dependiendo de cuál es nuestro nodo, cómo instalaremos el firmware.

<Tabs>
  <TabItem 
    value="led" 
    label={
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span>LCD, LED o sin pantalla</span>
      </div>
    }
    default
  >
Para todos estos tipos de nodos, sugiero un borrado e instalado, no hay nada más para hacer.
  </TabItem>

  <TabItem 
    value="inkpaper" 
    label={
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span>E-Paper</span>
      </div>
    }
  >
Para estos nodos sugiero que hagas un borrado e instalado. Sin embargo también te sugiero que no uses la opción de instalar la pantalla InkHUD, porque al menos a nosotros nos ha dado problemas. Problemas como no poder usar el dispositivo.
  </TabItem>
</Tabs>

7. Ahora si oprimimos flashear, allí nos mostrará en pantalla, dónde quieres descargar la versión del firmware, seleccionamos la carpeta del dispositivo y le das a aceptar. Puede ocurrir que el archivo que estés descargando tenga el mismo nombre que el del firmware actual de tu dispositivo, en ese caso te preguntará si quieres reescribir el nombre y le dirás que sí.

¿Cómo saber que el proceso terminó? El dispositivo se desconectará solo del PC, esto es debido a que se reinició para aplicar los cambios. Podrá ver que el proceso fue exitoso ya que le dará la versión que usted ha descargado.

  </TabItem>

  <TabItem 
    value="esp32" 
    label={
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span>ESP32</span>
      </div>
    }
  >

1. Ingresar a la página donde puedes flashear el firmware. [Aquí puedes acceder a la página.](https://flasher.meshtastic.org/)
2. Seleccione el dispositivo que vayas a flashear. Para que puedas encontrar más rápido el dispositivo, puedes seleccionar la marca y te muestra todos los dispositivos disponibles de una marca. Si se lo compras a un ensamblador, deberás buscar al fabricante de la placa. ¿Cómo saber cual es? Eso deberás buscarlo en la página del producto donde lo hayas adquirido, ya que suele incluir esa información.
3. Versión del firmware. Existen alfas (inestables) y betas (estables), recomendamos que utilices la última beta disponible.
4. Antes de oprimir flashear, deberá conectar el dispositivo vía USB. ¿Debe esperar hasta este punto para poder conectarlo? No, puede hacerlo incluso antes del primer paso.
5. Elegiremos dependiendo de cuál es nuestro nodo, cómo instalaremos el firmware.

<Tabs>
  <TabItem 
    value="lcd" 
    label={
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span>LCD, LED o sin pantalla</span>
      </div>
    }
    default
  >
Para todos estos tipos de nodos, sugiero un borrado e instalado, no hay nada más para hacer.
  </TabItem>

  <TabItem 
    value="epaper" 
    label={
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span>E-Paper</span>
      </div>
    }
  >
Para estos nodos sugiero que hagas un borrado e instalado. Sin embargo también te sugiero que no uses la opción de instalar la pantalla InkHUD, porque al menos a nosotros nos ha dado problemas. Problemas como no poder usar el dispositivo.
  </TabItem>

  <TabItem 
    value="deck" 
    label={
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span>Tipo blackberry</span>
      </div>
    }
  >
Para estos nodos sugiero que hagas un borrado e instalado. Sin embargo, puedes elegir si instalar el Meshtastic UI o no, sugiero que prubes ambas y elijas a tu gusto.
  </TabItem>

</Tabs>

6. Ahora si oprimimos flashear y dejamos que se instale. Una vez finalizado, podremos hacer las configuraciones pertinentes al nodo. 

Puede que cuando termine el proceso el nodo se desconecte, ya que se reinicia, como puede que no. Pero si no se desconecta, verá en la consola de instalación, verá reflejado el accionar del dispositivo en dicha terminal.
  </TabItem>
</Tabs>

¿Cada cuánto es recomendable actualizar el firmware? Aún no definimos una métrica recomendable que permita asegurar cada cuánto debe usted actualizar el firmware. Si recomendamos que haga este procedimiento apenas haya adquirido el producto, aunque no es necesario que lo haga antes de conectarlo al celular por primera vez.

### Configuraciones adicionales

Aquí se mostrarán las modificaciones que quizá, no son tan esenciales, pero que nosotros hemos llevado a cabo.

#### Zona horaria 

Al momento de configurarla, es probable que se actualice sola al momento de vincular el dispositivo con el celular, pero puede que haya una diferencia de zona horaria, para ello la cambiaremos, desde la app o desde el nodo, pero puede que no aparezca Argentina, por lo que elegiremos una que coincida con la nuestra, en este caso utilizaremos Brasilia.
Este proceso se puede llevar a cabo desde el teléfono, como desde el nodo, si posee pantalla.
- <u> Celular</u>: Ir a Ajustes/Dispositivo/Zona horaria, es una de las últimas opciones del menú 'Dispositivo', elegiremos usar la del teléfono, o especificaremos la que deseemos.
- <u>Nodo</u>: Ir a Reloj/Clock Action/Timezone y allí elegiremos BR/Brasilia. Eso si queremos configurar la zona horaria de Argentina, pero si no podemos usar la que deseemos.

#### Canales

Desde la app entras al apartado de Ajustes/Canales, sólo verás uno por defecto y se llama 'long fast' que es en realidad el canal público y toma el nombre del preset de radio que estés usando, pero como de manera predeterminada viene configurado como Long Range - Fast, toma de allí su nombre. Si cambias el preset de radio, podrás notar que el nombre de este canal también cambia.

Dentro de 'Canales' verás un signo '+' el cual debes oprimir, una vez acá eliges el nombre del canal y lo importante es la clave del canal, el cual deberás compartir a quien/es que formará/n parte del canal. Una vez terminado, sales de esta ventana y aprietas en enviar. Importante es que envíes los datos, porque de lo contrario es como si no hubieses hecho nada.

Pero si lo que quieres es unirte a un canal, también deberás oprimir el botón '+' y en la clave, pegas la clave del canal al que quieras unirte. Deberás poner el nombre, aunque puedes poner el que quieras, ya que es una configuración que no influye en el funcionamiento del canal.

#### Ubicación precisa

En el mismo lugar donde creaste el canal, uno de los apartados es que puedas enviar la posición, debes de activar esa opción, una vez hecho esto, lo que debes es habilitar la ubicación precisa. Sales de est ventana y le das a enviar.

#### Preset de radio

Al igual que la zona horaria se puede modificar desde el celular o del nodo mismos (obviamente si tiene pantalla)

- <u>Celular</u>: Ir a Ajustes/LoRa/Opciones/Predefinidos ahí abrirá un menú desplegable que te permitirá elegir uno de los 8 presets de radio disponibles.
- <u>Nodo</u>: Ir a LoRa Info/LoRa Actions/Radio Preset y ahí podrás elegir el preset que necesites o quieras probar.

---

Con estas configuraciones en mente podrías tranquilamente empezar a sacarle provecho a esta tecnología. Desde ya aclaramos que no son las únicas ya que es una herramienta potente que se encuentra en constante evolución, pero si es tu primer contacto con esta tecnología, será más que suficiente. En un futuro, quizás, haya otra guía de configuraciones más avanzada.
