#  🍄 Stereum - Web Documentation


![image](https://github.com/stereum-dev/ethereum-node-web-docs/assets/82385103/8274913a-0021-4f51-b3aa-1dbe6427b305)


STATUS: WORK IN PROGRESS!

Welcome to the Stereum documentation repository! 

[Stereum](https://github.com/stereum-dev/ethereum-node) is a tool for easily setting up and managing different kind of Ethereum (and Gnosis) nodes.
This repo contains guides, tutorials, and other resources for Stereum Node Setup & Manager hosted on [stereum.net](https://stereum.net/) to help you get started and effectively use Stereum.  

<br>

## Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ npm i
```

### Local Development

```
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true npm run deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.



## Contributing

We welcome contributions to our documentation! See our [Contributing Guide](link-to-contributing-guide) for details on how to propose changes.

## Support

- **Community Support**: [Here](https://discord.gg/hYRKAdBz8f)
- **Report an Issue**: [Here](https://github.com/stereum-dev/ethereum-node/issues/new/choose)

We are excited to see how you use Stereum and look forward to your contributions to our community!
