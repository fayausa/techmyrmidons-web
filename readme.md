# Techmyrmidons

![Licence](https://img.shields.io/dub/l/vibe-d.svg)
[ ![Codeship Status for fayausa/techmyrmidons-web](https://app.codeship.com/projects/d3a1cc60-1e0f-0136-3165-4ab32878fbe3/status?branch=master)](https://app.codeship.com/projects/284812)

## Installation

To use this template, your computer needs:

- [NodeJS](https://nodejs.org/en/) (0.12 or greater)
- [Git](https://git-scm.com/)

This template can be installed with the Foundation CLI, or downloaded and set up manually.

### Using the CLI

Install the Foundation CLI with this command:

```bash
npm install foundation-cli --global
```

### Setup

To manually set up the template, first download it with Git:

```bash
git clone git@github.com:fayausa/techmyrmidons-web.git
```

Then open the folder in your command line, and install the needed dependencies:

```bash
cd techmyrmidons-web
npm install
bower install
```

Finally, run `npm start` to run Gulp. Your finished site will be created in a folder called `dist`, viewable at this URL:

```
http://localhost:8000
```

To create compressed, production-ready assets, run `npm run build`.

## License : MIT