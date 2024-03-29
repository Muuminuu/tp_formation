# APP : LES STORES

** Réorganiser l'application **
- Ajout de Pinia pour la gestion des Store
- Ajouter un composant ProductDetail

** Ajout d'un Store pour la Gestion des Produits **
- Ajouter
- Update
- Delete
- FindById
- FindByName

** Ajout d'un Store Pour Catégorie **
- Ajouter
- Update
- Delete
- FindById
- FindByName


## APP : LE ROUTEUR

** Réorganiser l'application **
- Ajout de Vue Router pour la gestion des Routes
- Import dynamique des Routes depuis un fichier JSON du dossier data/
- Ajout des Pages 
    - AdminProduct
    - HomePage
    - ProductDetails
    - ProductList
- Mise à jour du composant MainNav pour utiliser ```<routeur-link>``` au lieu  de ```<a href>```


## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```


### Raccourcis Utiles

@/ est un raccourcis vers le dossier ./src

#/ est un raccourcis vers le dossier ./src/components

Grâce au fichier d'indexation index.js à la racine du dossier src/components/ il est désormais possible d'importer un composant directement comme l'exemple suivant :
```sh
- import {MyComponent} from '@/components'
```
```sh
- import {MyComponent} from '#'
```

Grâce au fichier d'indexation index.js à la racine du dossier src/stores/ il est désormais possible d'importer un composant directement comme l'exemple suivant :
```sh
- import {useMyStoreStore} from '@/stores'
```
