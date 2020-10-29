# herowiki

A web application used to search marvel heroes.

---

- [**Installing**](#installing)
- [**Getting Started**](#getting-started)

---

## Installing

Install it by cloning this repository.

```
git clone git@github.com:adasantos/herowiki.git
```

## Getting Started

Run yarn install command to install the project dependencies.

```js
yarn install
```
Access Marvel Api and follow the instructions : https://developer.marvel.com/documentation/getting_started

With the keys access open this file:
```js
src/settings/key.ts
```
And replace
```
export const publicKey = '[PUBLIC_KEY]';

export const privateKey = '[PRIVATE_KEY]';
```

Start the application using the yarn start command.

```js
yarn start
```
