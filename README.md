<h1 align="center"> Screening Test </h1>
<h3 align="center"> A basic test of how to write code </h3>  

</br>

<!-- TABLE OF CONTENTS -->
<h2 id="table-of-contents">Table of Contents</h2>

<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#prerequisites"> ➤ Prerequisites</a></li>
    <li><a href="#folder-structure"> ➤ Folder Structure</a></li>
  </ol>
</details>

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)


<!-- PREREQUISITES -->
<h2 id="prerequisites"> Prerequisites</h2>

[![made-with-VueJS](https://img.shields.io/badge/VueJS-%5E3.x-orange)](https://vuejs.org/) <br>
[![NodeJS](https://img.shields.io/badge/Node-%3E%3D14.x-green)](https://vuejs.org/) <br>


<!--This project is written in Python programming language. <br>-->
The following open source libraries are used in this project:
* Axios
* xml2js
* Pinia
* TailwindCSS
* DaisyUI

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<!-- :paw_prints:-->
<!-- FOLDER STRUCTURE -->
<h2 id="folder-structure"> Folder Structure</h2>

    code
    .
    │
    ├── src
    │   ├── assets
    │   │
    │   ├── components
    │   │   ├── __tests__
    │   │   ├── common
    │   │      
    │   ├── composables
    │   │ 
    │   ├── router
    │   │
    │   ├── stores (pinia)
    │   │
    │   ├── types
    │   │
    │   ├── views
    │   │
    │   ├── App.vue
    │   ├── Main.ts
    │       
    ├── index.html
    ├── package.json
    ├── tailwind.config.json
    ├── tsconfig.app.js
    ├── tsconfig.config.json
    ├── tsconfig.json
    ├── tsconfig.vitest.json
    ├── vite.config.ts

!e.config.ts[-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)



## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test
```

### Run Coverage Tests with [Vitest](https://vitest.dev/)

```sh
npm run coverage
```
