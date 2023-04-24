# gym

## Getting Started

### Prerequisites

* yarn
```sh
npm install -g yarn
```
* Docker Compose

### Installation
1. Clone the repo
```sh
git clone https://github.com/nikzanda/gym
```

### Setup

1. Install dependencies
```sh
yarn
```

2. Rename `.env.example` in `.env.development` and insert your data
```sh
mv .env.example .env.development
```

3. Run migrations
```sh
yarn migrate-up
```

### Development
Run `sudo docker-compose up` to use MySQL with Docker.

Run `yarn serve` to start server.