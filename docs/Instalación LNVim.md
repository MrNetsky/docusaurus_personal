Instalación de LazyVim
======================

:::danger ATENCIÓN
Este documento aún está en construcción, pero lo subí igual para probar el funcionamiento de GitHub Pages, cuando esté terminado esta etiquete se eliminará
:::

Mi motivación en aprender a usar esta herramienta surge desde la necesidad de utilizar una notebook vieja. Debido a sus limitaciones, pese a que puedo instalar y utilizar VSCode, no es práctico, por su extrema lentitud, obviamente por las limitaciones propias de este hardware.

Inicialmente este equipo tenía un HDD de 128Gb, con 2.5Gb de RAM y Windows 7. Actualmente tiene un SSD de 256Gb, con 4Gb de RAM y Linux Mint en su versión Mate. El procesador es un Intel Celeron M 520 @ 1.60GHz. Es el mismo, ya que por una limitacion de BIOS y de refrigeración, pero principalmente por mi completo desconocimiento no puedo cambiar de procesador (Por ahora. Igual tampoco hay muchas opciones que traigan una mejora significativa al funcionamiento de mi notebook)

Esta guía esta destinada a gente, que como yo, son nuevos en Linux y su funcionamiento por lo que se especificará cada aspecto que inicialmente no supe y tuve que averiguar. De más está decir que puede que cuando leass esto tenga un error o se haya desactualizado, o puede que haya algo que no entiendas por lo que te invito a que lo comentes.

:::danger IMPORTANTE
Esta una distro basada en Ubuntu que a su vez, está basado en Debian, por lo que si posees una distro diferente, puede que necesites utilizar tu propio sistema de gestión de paquetes. Para este sistema operativo se utilizará apt.
:::

## Elementos a instalar

:::tip NOTA
Si bien el orden NO es estrictamente necesario, yo lo hice así y recomiendo que también lo hagas así.
:::

1. NeoVim
2. git
3. NerdFont
4. tree-sitter-cli
    + gcc/clang
    + NodeJS/npm
5. curl
6. alacritty
7. fzf-lua
    + fzf
    + fdfind
    + ripgrep
8. lazygit

Antes de empezar con todo esto, utilizar:

```bash
sudo apt update
sudo apt upgrade
```
Esto es porque update actualiza la información sobre qué software existe y dónde encontrarlo. Mientras que upgrade previene conflictos de dependencias, mantiene la seguridad y garantiza la estabilidad.
### Instalación de NeoVim

:::tip NOTA 
Es importante tener una versión a 0.11.2 o posterior. 
:::

```bash
sudo apt install neovim
```

Es probable que instale un versión más antigua, pero estable. En mi caso fue la 0.9.5, por lo que ahí debo cambiar la versión que descarga. Yo tengo instalado la 0.12.0 que es la última, pero no necesariamente debes descargar ésta. Fue la que pude instalar y de momento me es útil. El procedimineto es el siguiente:



### Instalación git

```bash
sudo apt install git
git --version
```

La versión que instale va a ser superior a la necesaria, asi que no hay que hacer nada más.

### Instalación de una NerdFont

Lo primero es es ir al repositorio en [GitHub](https://github.com/ryanoasis/nerd-fonts 'NerdFont en GitHub') y descargar la NerdFont deseada.

:::danger IMPORTANTE 
Descargar las fuentes parcheadas.
:::

Una vez hecho eso, es necesario mover los archivos para poder utlizarlos, para ello primero debo ubicar dónde estan mis archivos, para luego reubicarlos.

```bash
mv  ~/Descargas/HackNerdFont-Bold.ttf ~/.local/share/fonts/ttf/
```
El proceso lo repetiremos tantas veces como NerdFont tengamos. Es importante resaltar que la carpeta fonts no existía en mi sistema por ende la tuve crear, mucho menos la carpeta ttf, la cual también cree. Use el procedimiento, pero las carpetas y sus ubicaciones pueden variar de sistema a sistema, por lo que debe tener cuidado.

### Instalación de tree-sitter-cli
Es requisito FUNDAMENTAL tener instalado un complilador de C para que nvim-treesitter pueda instalar cualquier parser de idioma. Esto es porque tree-sitter-cli es la herramienta gestora que coordina la creación de la biblioteca del parser, mientras que el complilador de C transforma el código fuente del parser, en la biblioteca binaria que NeoVim usar para entender el código.

Para ello, debemos verificar si tenemos uno instalado en el sistema. Toda distro de Linux viene con un compilador de C instalado como gcc:
```bash
gcc --version
```
Pero sino también podemos instalar clang:
```bash
sudo apt install clang
```
Y posteriormente verificamos la versión:
```bash
clang --version
```

Es necesario instalar NodeJS y npm previamenete. Esto es debido porque la herramienta está escrita en JS/TS y se ejecuta en dicho entorno y para poder instalarla necesitamos el gestor de paquetes de dicho entorno.
```bash
sudo apt install nodejs
sudo apt install npm
```
Verificar que todo se haya instalado bien.
```bash
nodejs --version
npm --version
```
Ahora que estamos listos podemos instalar tree-sitter-cli.
```bash
sudo npm install -g tree-sitter-cli
```
Para que el binario se ubique en el PATH (como usr/local/bin), es necesario utilizar -g. Finalmente corroboramos que todo funcione correctamente.
```bash
tree-sitter -version
```

### Instalación de curl

```bash
sudo apt install curl
curl --version 
```
Similar que en git, simplemente es ésto.

### Instalación de Alacritty

:::tip NOTA
Esta instalación es OPCIONAL
:::

:::danger IMPORTANTE
Si no descargas esta terminal, tienes que elegir otra, ya que soportan todos los colores e íconos de lazyvim y las nerdfonts. Además de ésta, se sugieren estas: kitty(Linux y MacOS), wezterm, iterm2(MacOS) y ghostty. Yo elegí esta ya que este proceso lo llevo a cabo en una notbook del 2008 y es la que menos recursos le significaban a mi equipo. 
:::

El proceso es el siguiente:
```bash
sudo apt install alacritty 
```
Posteriormente corroboro la versión.
```bash
alacritty --version
```

### Instalación de fzf-lua

:::tip NOTA
Esta instalación es OPCIONAL
:::

Es un plugin que integra la potencia del motor de busqueda fzf, con NeoVim, para que pueda integrarse con otros backends como lo son ripgrep y fdfind. fd se encarga de encontrar archivos, mientras que rg busca contenido (texto) dentro de los archivos.

```bash
sudo apt install fzf
sudo apt install fd-find
sudo apt install ripgrep
```

Consulte las versiones para verificar que todo ha sido instalado de manera correcta, de la siuiente manera:

```bash
fzf --version
fdfind --version
rg --version 
```

Cabe aclarar que aún queda algo más por hacer. El motor de búsqueda es fd, NO fd-find, por lo que debemos crear un 'atajo' para lograr que funcione. Para ello lo haremos de la siguiente manera:

1. Averiguar dónde se encuentra fd-find:

```bash
which fdfind
```

2. Descubrir dónde debo ubicar dicho link:

```bash
echo $PATH
```

  Allí encontraremos la carpeta usr/local/bin que es la carpeta para los programas (binarios, de ahí bin) instalados por el usuario que sn gestionados por el gestor de paquete apt.

3. Una vez que sé dónde esta el archivo y dónde lo ubicaré, el comando a usar es ln -s (Link simbólico) de la siguiente manera:

```bash
sudo ln -s /usr/bin/fdfind /usr/local/bin/fd 
```


### Instalación de lazygit


:::tip NOTA
Esta instalación es OPCIONAL
:::

:::danger IMPORTANTE
Si usted NO sabe usar git, lo más recomendable es que aprenda a utilizarlo y posteriormente se interiorice en el funcionamiento de esta herramienta.
:::
