# Orca App 📱🐶🐱

Este aplicativo está desarrollado en `React Native`. Cuando clone el proyecto instale las dependencias con `npm install`, luego puede proceder a ejecutar el aplicativo en un emulador o en un dispositivo físico (Android o iOS).

## Convenciones para nombres de las ramas

* __feature/*:__ Ramas de nuevas funcionalidades, o de actualizaciones al aplicativo. _Ejemplo:_ `feature/home-screen`
* __bugfix/*:__ Ramas de corrección a bugs generados. _Ejemplo:_ `bugfix/login-texts-size`
* __release/*:__ Ramas que hacen referencia a preparación para despliegue en producción. _Ejemplo:_ `release/v1.23.5`

Se tendrán las ramas `master` y `develop`. En la rama `master` estará la última versión estable, y en `develop` las últimas funcionalidades desarrolladas.

## Despliegue en Debug

Para realizar un build debug para android ejecutar este comando:

```
npx react-native run-android
```

En el caso de iOS
```
npx react-native run-ios
```