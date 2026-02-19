---
slug: analisis-dispositivos
title: Análisis de nuestros dispositivos dispositivos
authors: [MrNetsky]
tags: [dispositivos]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Análisis de nuestro ecosistema Meshtastic

:::warning Advertencia
Este artículo se encuentra en proceso.
:::

En el siguiente artículo, podrás ver cuales, bajo nuestro criterio, son las características positivas, negativas y un balance de los dispositivos que nosotros utilizamos así como las apps que utilizamos para conectar dichos dispositivos. Es importante recalcar que estas observaciones no son absolutas e imparciales, ya que, nosotros los evaluamos desde un contexto en específico, el de los combatientes del fuego, por lo que puede que sin no formas parte de este entorno, pero lees este artículo para informarte sobre esta tecnología, lo que para nosotros es una característica negativa, puede que para vos no lo sea o tengas un punto de vista diferente.

## Dispositivos

:::danger No actualizar el firmware vía BLE
En caso de haberlo hecho tocará desconectar la batería, conectarlo vía USB C al PC, presionar el botón de reinicio dos veces, eso lo hará entrar en modo DFU y aquí tocará actualizar el firmware. Cuando se desconecte solo del PC, reconectar la batería y rearmar el dispositivo.
:::

### Meshnology N37 - Wio Tracker L1

<u>**Aspectos positivos:**</u>

+ Batería. Los 3000mAh han hecho que dure apróx 5 días.

<u>**Aspectos negativos:**</u>

+ No viene armado.
+ Buzzer. Debería tener más potencia de sonido.
+ GPS Lock. Incapacidad de ubicarse dentro de un espacio cerrado.
+ Case. Es el apartado principal que lo distingue de Wio Tracker L1 y pierde por goleada en este aspecto.
    + El material en el que fue impreso no debe estar expuesto al sol y al calor en tiempos prolongados, lo cual es exactamente el caso al que deben enfrentarse.
    + Intersticios donde entra polvo. Si bien era sabido que no posee una certificación IP, no se esperaba que en el borde de la antena GPS hubiera tantísimo espacio sin cerrar.
    + Movilidad limitada del joystick. Pese a que posee una interfaz dinámica y accesible, la experiencia del joystick lo convierte en una absoluta pesadilla, convirtiendo la experiencia de uso de pobre a muy mala.
    + La base no le da estabilidad al dispositivo, es recomendable dejarlo recostado con la pantalla hacia arriba.
    + Fragilidad. Una caída accidental de unos 75cm de altura, rompió el área de la carcasa que contiene el GPS, esto puede deberse al peso del mismo que es significativamente major al de los demás, pero particularmente al mal diseño de esta sección de la carcasa.
    + Pantalla. Tiene una abertura de 1mm menos que el L1 Pro 
+ Conexión con la pc. Técnicamente no son desconecciones esporádicas, porque figura que está conectado, pero no funciona bien como si estuviera conectado.

<u>**Balance:**</u>

Las diferencias con el L1 Pro son el precio, la batería y el case. En el primer apartado no hay diferencias significativas, en el segundo apartado hay una diferencia notable, pero la pregunta acá sería ¿Es necesario? Y desde este espacio, creemos que no. 
Por último, el case. En este apartado pierde y por goleada porque no hay nada bien hecho, esto no significa que sea todo malo en cuanto al diseño de la carcasa pero pierde en muchísimos aspectos y en otros no mejora en comparativa con la carcasa del L1 Pro.
Para redondear, aplaudimos la iniciativa del ensamblador, pero hoy no existen motivos por el cual elegir al N37 por encima del L1 Pro. Es un producto que necesita mejoras de mínimo o un rediseño, pero estaremos atentos a las novedades de este ensamblador.

### SenseCAP Solar Node P1

<u>**Aspectos positivos:**</u>

+ Buen sistema de agarre.
+ Alcance. Hasta el momento se realizaron comunicaciones de 2.5Km

<u>**Aspectos negativos:**</u>

+ Baterías. Si bien se explica cuál debe llevar, no se aclara que deben poseer un teton, ya que de otra manera, no harán contacto

<u>**Balance:**</u>


### ThinkNode M1

<u>**Aspectos positivos:**</u>

+ Accesibilidad, manejo entre menúes óptimo y sencillo de entender y aprender.
+ Hermeticidad. Posee una junta en la conexión de la antena LoRa.
+ Rango. Conexión desde todos los presets de la radio a 4.5Km.

<u>**Aspectos negativos:**</u>

+ Buzzer. Tiene un volúmen muy bajo, sería casi como no tenerlo equipado.
+ GPS Lock. 
  + Exagerado el tiempo de conexión.
  + Ubicación poco precisa.
+ Batería. No dura las 48hs prometidas por el fabricante.
+ Pantalla. 
  + Gran delay en el inicio del dispositivo y en el scroll entre menúes.
  + Mientras tenga conectado el USB C, no reconoce que está desconectado del suministro energético. Le llevó aproximadamente 5' actualizar el estado, mientras se scroleaba entre menúes y se usa con total normalidad.
+ Bluetooth. Problemas para detectar este dispositivo desde Meshtastic CLI.

<u>**Balance:**</u>

Posee un buen packaging, está buenísimo que incluya una correa y el cable de carga. Es muy cómodo de usar, de agarrar, habrá que encontrar cómo configurarlo para el uso, ya que la batería es un apartado donde pierde mucho, porque dura mucho menos que el L1 Pro, N37 y WishMesh Tag, poseyendo este último una batería más pequeña.

Teníamos la *Hipótesis* de que el problema de la demora en el inicio y el scroll entre menús, es la interfaz con el parlante, ya que el T-Echo tiene el mismo firmware, con la misma pantalla, pero inicia más rápido y es mejor el scroll entre menúes, eso si, no posee buzzer. Luego de desactivar el buzzer para la interacción con el sistema, nos dimos cuenta que mejora el scroll entre menúes, pero sigue siendo más lento que el T-Echo y el inicio se mantuvo sin cambios, siendo hasta 6s más lento.



### ThinkNode M5 Pro

<u>**Aspectos positivos:**</u>

+ Accesibilidad, manejo entre menúes óptimo y sencillo de entender y aprender.
+ Hermeticidad. Posee una junta en la conexión de la antena LoRa.
+ Rango. Conexión desde todos los presets de la radio a 4.5Km.

<u>**Aspectos negativos:**</u>

+ Batería. Muestra que se encuentra cargando cuando no los está. Desde la app no se registra que tenga batería el nodo
+ Firmware. Puede ser una casualidad, pero el 22/1/26 quisimos flashearlo y se brickeo. El día siguiente funcionó sin problemas, creemos que puede deberse a un cambio en la interfaz de Meshtsatic.flasher que justo cambió en ese lapso de tiempo.
+ Pantalla. No muetra diferencias en la velocidad de movimiento entre menúes. Es igual que el M1, pero este tiene un procesador más potente.

<u>**Balance:**</u>



### ThinkNode M6  

<u>**Aspectos positivos:**</u>



<u>**Aspectos negativos:**</u>

+ Firmware. 
  - No existente (01/26)
  - Alfa 2.7.19 compilada sin soporte.
+ Soporte.
  - Material. Plástico, se ve endeble.
  - Limitado. No se puede poner en cualquier lado.
+ Antenas. 
  - GPS y LoRa. Ambas diferenciadas una de otra. Sin embargo no indican dónde conectarlas.

<u>**Balance:**</u>



### T-Echo

<u>**Aspectos positivos:**</u>

+ Pantalla. Inicio rápido, óptimo scroll entre menúes.

<u>**Aspectos negativos:**</u>

+ GPS Lock. Ubicación poco precisa.
+ Batería. No reporta el nivel de batería
+ Botones. 
  + Tener muy expuesto el botón de reset puede ser problemático.
  + Usar solo un botón para el uso de todo el dispositivo es impráctico.

<u>**Balance:**</u>

Creemos que el dispositivo con el que habrá que compararlo es el M1. Poseen la misma pantalla, pero es más lenta que la del M1, tiene una batería más pequeña y uno de los dispositivos se le rompió un botón pese a tener un bajo uso, puede ser un hecho aislado, como puede hablar de la calidad de este producto, pero desde este espacio no podemos aseverar una u otra opción, pero es nuestra obligación mostrar los hechos. Si está bueno el plástico de la carcasa, posiblemente sea el mejor comparado con los otros nodos portátiles. La antena es la misma y en cuanto al precio no hay diferencias significativas. Por lo que creemos que es un producto que de mínimo, no supera al M1, e incluso puede que esté un poco por debajo. 

### T-Deck

<u>**Aspectos positivos:**</u>

<Tabs>
  <TabItem 
    value="meshtastic+" 
    label={
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span>Meshtastic</span>
      </div>
    } 
  >

  + Visibilidad. Debido a su gran pantalla. También se ve de buena manera en pleno sol.
  </TabItem>

  <TabItem 
    value="meshtasticiu-" 
    label={
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span>Meshtastic UI</span>
      </div>
    }
    default
  >
  
  + Visibilidad. Debido a su gran pantalla. También se ve de buena manera en pleno sol.
  + Pantalla táctil. Salva la usabilidad del producto, ya que soluciona todos los problemas del trackball.
  + Lenguaje. Disponible en español, su configuración es muy sencila.
  + Interfaz. 
    - Mensajería. Clara visibilidad de los mensajes, historial, sus destinatarios y canales.
    - Mapas.

  </TabItem>
</Tabs>

<u>**Aspectos negativos:**</u>

<Tabs>
  <TabItem 
    value="meshtastic" 
    label={
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span>Meshtastic</span>
      </div>
    } 
  >
  
  + Interfaz.
    - Trackball. Deben decidir si funciona o no como 'enter' en todos los menúes.
    - Mensajería. Para enviar un mensaje, debes seleccionar la opción 'New freetext msj', misma que solo está disponible en el menú de la pantalla principal. 
    - Pantalla táctil. Unicamente sirve para encender la pantalla. Totalmente desaprovechada.
    - Teclado, salvo que sepas que puedes escribir un mensaje y dónde hacerlo, no sirve para nada. A excepción del enter.
  + Funicionalidad 
    - Enviar info del nodo
    - Mensaje libre usando teclado.
  Esas son las dos diferencias en funcionalidad con L1 Pro o un ThinkNode M1. 

  </TabItem>

  <TabItem 
    value="meshtasticiu" 
    label={
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span>Meshtastic UI</span>
      </div>
    }
    default
  >
  
  + Conectividad.
    - BLE. Inutiliza el dispositivo, únicamente operable desde el celular.
    - Ubicación del Bluetooth, es improbable que encuentres dónde hacer la conectividad mediante esta vía. Me pasó de reiniciar dos veces el dispositivo antes de entender cómo funcionaba.
  + Reset. Su botón está muy expuesto.
  + Interfaz. Esta bien, pero aún necesita mejoras significativas.
    - No se puede copiar y pegar mensajes.
    - Las opciones seleccionadas casi no se distinguen, dificultando saber dónde estás.
  + Buzzer.
    - Volumen bajo.
    - Bajísima duración.
  
  </TabItem>
</Tabs>

----

+ Falta.
  - Manual
  - Cable USB
  - Memoria MicroSD 
+ Trackbal. Inutil e inneficiente
+ Case.
  - Endeble
  - Baja calidad
+ Teclado. 
  - Funcionamiento inadecuado
  - Baja calidad

<u>**Balance:**</u>

Potencialmente puede llegar a ser una herramienta útil. Hoy NO lo es y está lejos de serlo, creo que tocará esperar mejoras significativas o manipular el firmware para lograr que sea de utilidad, ya que en este estado, pierde contra cualquier nodo de esta lista. Párrafo aparte para la mala calidad de productos y el dinero que se pagó por este nodo.
Más allá de las mejoras potenciles que se le pueda hacer al los firmwares disponibles para este nodo, necesita un rediseño solucionando todos los problemas evitables que han generado y mejorando la calidad de los materiales.

### Voyager

<u>**Aspectos positivos:**</u>

- Hermeticidad
- Funicionalidad
- Agarre

<u>**Aspectos negativos:**</u>

- Diseño. No hay botones de encendido, reset o puerto USB C. Hay que desarmarlo para:
  + Encenderlo. Es necesario que sepas cómo conectar la batería.
  + Actualización de Firmware. 
    - Deberás conectarlo al USB C que contiene dentro.
    - El firmware que deberás usar es el del WisBlock
  + Tornillos. Torx ¿En serio? ¿Con qué necesidad?

<u>**Balance:**</u>

Es útil, aunque deja sensaciones de poco trabajo por parte de Spec5, posibliemente haya dentro de la comunidad soluciones similares, de bajo costo y calidad similar o superior.

### WishMesh Tag

<u>**Aspectos positivos:**</u>

+ Tamaño. Totalmente fácil de llevar.
+ GPS. 
  + Sorprende que incluso en espacios cerrados, se ubique.
  + Oprimiendo dos veces el botón central se envía la posición actual.
+ Buzzer. Potencia, realmente es claro y alto el sonido.
+ Adopción. Pese a tener dos botones, el acompañamiento de luces y el sonido hacen casi innecesaria la interacción con una pantalla.
+ Batería. Duración superior a las 48hs
+ Botón trasero.
  + Pasa inadvertido
  + Difícil de apretar

<u>**Aspectos negativos:**</u>



<u>**Balance:**</u>

Productazo, literalmente había pocas expectativas con respecto a este producto, pero está bueno el case, la duración de la batería es óptima, su uso con un solo botón es fácil de entender, muy portátil, que traiga la correa es un plus que esta muy bueno y además incluye el USB de carga que quizás pueda que les parezca la norma, pero hay dispositivos que no lo incluyen, no es el caso de este producto. El packaging es ultra seguro. Es un muy buen producto.

### Wio Tracker L1 Pro

<u>**Aspectos positivos:**</u>

- Joystick. Buen funcionamiento, es poco probable un movimiento accidental. 

<u>**Aspectos negativos:**</u>

- Joystick. No se puede usar con guantes.
- Buzzer. Desde la web te anuncian que no lo incluye, pero si lo trae.
- Manual. No incluido 
- Case.
  + Hermeticidad. Tipo rejilla trasera donde puede entrar muchísima suciedad.
  + Inestabilidad, al tener un centro de masa movido hacia atrás, hace que se caiga con poco esfuerzo.
- Carga. No hay una notificación en pantalla que se encuentre cargando, pero si se enciende una luz al costado en este estado.

<u>**Balance:**</u>

Creo que hay detalles, que si bien no podría catalogarlos como negativos, estaría bueno que los tengan en cuenta. Como por ejemplo el no traer un manual o guía de inicio rápido. Está bueno que tenga dentro del diseño la posibilidad de ponerle una correa al dispositivo, pero incluila en el paquete, Elecrow o RAK lo han hecho con el M1 y el WishMesh Tag. Repito, no son aspectos negativos, pero sí serían le sumarían un valor agregado al producto, que de por sí es bueno, tiene un packaging minimalista que me gusta.

---

## Clientes 

### Meshtastic Android app

<u>**Aspectos positivos:**</u>



<u>**Aspectos negativos:**</u>



<u>**Balance:**</u>


### MeshSense 

<u>**Aspectos positivos:**</u>



<u>**Aspectos negativos:**</u>



<u>**Balance:**</u>

### client.meshtastic.org

<u>**Aspectos positivos:**</u>



<u>**Aspectos negativos:**</u>



<u>**Balance:**</u>

### Meshtastic Network Manager

<u>**Aspectos positivos:**</u>



<u>**Aspectos negativos:**</u>



<u>**Balance:**</u>

