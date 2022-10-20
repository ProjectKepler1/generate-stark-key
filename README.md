<div align="center">
  <a href="https://www.immutable.com">
    <img width="150" src="https://assets-global.website-files.com/5f7eec37ff782e797edabe11/5f8d36771ffcf8c91b03e7f4_dark.svg">
  </a>
  <br>
  <br>
</div>

---
# How to use this tool

This tool generates the deterministic stark key for a given private key.

```sh
git clone https://github.com/immutable/generate-stark-key.git

cd generate-stark-key

yarn install
```

Create a `.env` file similar to [.env.example](./.env.example) with the key generation method of your choice.
i.e use `PRIVATE_KEY` or `SIGNATURE` to generate your stark key.

```sh
cp .env.example .env
```

Once you have saved the necessary values in your `.env` file, run the code by running

```sh
yarn get-key
```

or

```sh
yarn get-key-from-sig
```

The stark key and eth wallet address are printed out on screen.

```sh
% yarn get-key
yarn run v1.22.19
$ node get-key
wallet address: 0x...
stark key: 123ABCDEF...
```
