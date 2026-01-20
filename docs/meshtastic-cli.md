# Meshtastic CLI 

Es una herramienta más que útil para poder comunicarme mediante el puerto serial, a un nodo meshtastic.

## Instalación

Ésta, no viene instalada en ningún sistema operativo por defecto, por lo que deberemos instalarla. Cabe aclarar que dicho procedimiento fue llevado a cabo en un Linux Mint, cuya gestión de paquetes es llevada a cabo por apt.

### Instalar pip

Verificar si está instalado Python, ya que es requisito indispensable para llevar a cabo esta operación.
```bash 
python3 --version
```
En caso de no tenerlo instalado, haremos lo siguiente:
```bash 
sudo apt instal python3
```
Luego, en caso de no tenerlo en nuetro esquipo, como fue mi caso, instalaremos pip de la siguiente manera:
```bash
sudo apt install python3-pip
```
Verificar que se haya instalado con éxito:
```bash
pip3 --version
```

### Instalar pipx

¿Por qué instalar esto? Se debe a una medida de seguridad llamada PEP 668, que evita que instales paquetes de Python con pip que puedan entrar en conflicto con los paquetes del sistema gestionados por apt. Esto yo lo debo hacer porque estoy por usar Meshtastic CLI desde una notebook con Linux Mint. Por ello la solución más limpia y recomendada es usar pipx. Este programa instala la herramienta en un entorno aislado pero te permite usar el comando meshtastic globalmente en tu terminal.
```bash
sudo apt install pipx
```
Para que Linux sepa dónde encontar los programas instalados con pipx, hacer lo siguiente:
```bash 
pipx ensurepath
```

### Meshtastic CLI

Ahora si, instalaremos nuestra herramienta de la siguiente manera: 
```bash 
pipx install meshtastic
```
¿Esto es todo? Por lo meno para mi no, porque cuando quise ejecutar meshtastic --get power, me dió error. ¿Qué pasó? Pues el SO proteje los puerto seriales y como yo no tengo acceso a ellos, primero debo obtener dicho permiso de la siguiente manera:
```bash
sudo usermod -a -G dialout $USER
```
¿Cómo funciona este código? Lo que hace es permitir **mod**ificar los **user** (usuarios) añadiéndo (-a) a un nuevo grupo (-G), particularmente al que maneja los puerto seriales (dialout), a éste usuario ($USER), sin quitarme de los otros grupos donde yo tengo permisos.

## Funcionamiento

Bien, has logrado poner en marcha esta herramienta, ahora vamos a ver qué podemos hacer con ella.

### Comando útiles

#### Información

```bash
meshtastic --info
```
```bash
meshtastic --nodes
```
```bash
meshtastic --serialog
```
