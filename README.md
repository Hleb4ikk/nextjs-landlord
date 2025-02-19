<p align="center"><img src="./public/logo/LandLordLogoDarkTheme.svg" alt="Logo" width="300" height="300"></p>
<h1 align="center">Landlord</h1>
<h4 align="center">A service where you can buy, sell or rent your house.</h4>

# Features

- [x] User authentication signup, login, logout.
- [x] Get user's profile.
- [x] Get others users profile general information like time of registration, their ads.
- [x] Create a new advertisements.
- [x] Search for advertisements.
- [x] Adaptive design.

# Demo

TBA

# Setup

1. Clone the repository

```bash
$ git clone https://github.com/Hleb4ikk/nextjs-landlord
cd reactjs-landlord
$ npm install
```

2. Create a `.env` file in the root directory and add the following variables:

```
DATABASE_URL="postgresql://postgres:password@adress:port/name_of_db"
SECRET="Your secret phrase"
```

# Build

```bash
$ npm run build
```

Internally that command calls for next to build the project.

# Run

```bash
$ npm run dev
```

Internally that calls for next to run the project.

# Others

- `npm run lint` - Runs eslint on the project.
- `npm run prettier:check` - Runs prettier on the project.
- `npm run prettier:fix` - Runs prettier on the project and fixes the errors.
