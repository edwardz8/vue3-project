# vue3-project

Vue 3 in Vite.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

npm init vue@3

npm i -D unplugin-vue-components

add: "jsx": "preserve" to compilerOptions 

npm i -D unplugin-auto-import

add following to defineConfig:  

plugins: [vue(), Components(),
  AutoImport({
    imports: [
      'vue'
    ]
  })
  ],

## Install Tailwind and Preline css 

start by following the docs: https://v2.tailwindcss.com/docs/guides/vue-3-vite 

you may get warnings. if so, follow this: https://tailwindcss.com/docs/upgrade-guide#configure-content-sources 

https://preline.co

npm i preline

## Install Prisma 

Inside the root of the project: 

npm install prisma --save-dev
npx prisma init

with TypeScript and seeding data, may have to include:

npm i -D ts-node

// package.json 
"prisma": {
  "seed": "node --loader ts-node/esm prisma/seed.ts"
}


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
