# Qwik Microfrontends

![homepage](docs/homepage.png)

node >= v18.10.0 required

## The project contains 3 apps ( Host, Home, Checkout )

### Host

port: 5173

![host](docs/host.png)

### Home ( horizontal split )

port: 5174

![home](docs/home.png)

### Checkout ( vertical split with multiple routes )

port: 5175

#### route: /checkout/summary/

![summary](docs/summary.png)

#### route: /checkout/payment/

![payment](docs/payment.png)

## Startup project

From the root install all the dependencies `pnpm i`

## Preview server

- `npm run preview`

## Development server

Run `npm run dev` to run a dev server for each application.

At http://localhost:5173 you can open the host and see the working application.
