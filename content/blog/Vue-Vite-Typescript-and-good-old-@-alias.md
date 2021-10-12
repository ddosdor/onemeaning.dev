---
isDraft: true
title: Vite, Vue 3, Typescript and good old '@' alias
date: 2021-10-12T11:13:18
thumbnail: images/blog/thumbnails/vue-vite-typescript-and-good-old-alias.png
author:
  avatar: images/blog/avatars/me_avatar.png
  name: Sebastian
---

I once heard that if you want to test how productive a programmer is, take away all the shortcuts and tools in the IDE. Of course this is a joke, but in some cases it can be true.
<!--more-->
Since Vite is gaining a lot of popularity lately, I decided to use this tool in one of my personal projects. Of course, due to the fact that Vue 3 has very good Typescript support (with Volar it's already pure magic) and I like it when Eslint shouts at me ;), the final technology stack was as follows:
- Vite
- Vue 3
- Typescript
- Eslint
- TailwindCSS

As you may already know - when you create a new project with Vite, it comes with zero configuration. This means that everything has to be done by the developers (maybe not everything, but many things). When I started programming my new app, I noticed how much I missed the good old '@' alias. You can do without it, but every time I imported a module I caught myself typing it in automatically, and removing it (and building the path as './../../', for example) is not very productive. So I decided to make Vite work with the '@' alias, and share that, by the way, as part of a blog post.

## Let Vite know that we want to use the '@' alias

The first change I needed to make is to add in the `vite.config.ts` file how it should resolve paths for the '@' alias.

```js
  resolve: {
    alias: [
      { find: '@', replacement: resolvePath('src') },
    ],
  },
```

And, of course, the `resolvePath()` function as a wrapper for `path.resolve()`.

```js
function resolvePath(dir: string) {
  return path.resolve(__dirname, dir);
}
```

So the entire configuration file looks like this:

```js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

function resolvePath(dir: string) {
  return path.resolve(__dirname, dir);
}

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      { find: '@', replacement: resolvePath('src') },
    ],
  },
});
```

## Let's teach Typescript to use the '@' alias

The next step was to add the path information for the '@' alias in the `tsconfig.json' file

```json
    "paths": {
      "@/*": [
        "./src/*"
      ]
    },  
```

My entire `tsconfig.json` file thus looks as follows:

```json
{
  "compilerOptions": {
    "target": "esnext",
    "useDefineForClassFields": true,
    "module": "esnext",
    "moduleResolution": "node",
    "strict": true,
    "jsx": "preserve",
    "sourceMap": true,
    "resolveJsonModule": true,
    "esModuleInterop": true,
    "lib": ["esnext", "dom"],
    "paths": {
      "@/*": [
        "./src/*"
      ]
    },  
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"],
  "exclude": [
    "node_modules"
  ]
}
```

## Don't yell at me Eslint - I want to use the alias '@'

The final step was to notify Eslint that there was a specific path under the '@' alias:

```js
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
        ],
        extensions: ['.ts', '.vue'],
      },
    },
  },
```

Of course, this required installing two packages for Eslint:

```sh
yarn add -D eslint-import-resolver-alias eslint-plugin-import
```

## Summary

That's all I needed to do to work efficiently using Vue's popular '@' alias.

The last thing I needed to do, since I was typing `yarn serve` every time I started the project out of habit, was to change the scripts in the `package.json` file.

From the default scripts:

```json
  "scripts": {
    "dev": "vite",
    "build": "vue-tsc --noEmit && vite build",
    "serve": "vite preview"
  },
```

changed to:

```json
  "scripts": {
    "serve": "vite",
    "build": "vue-tsc --noEmit && vite build",
    "preview": "vite preview"
  },
```

That's it, now I can work with Vite ;)
