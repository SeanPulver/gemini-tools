# gemini-tools

Gemini tools to check balances, pending deposits, and dump your balance sheet for reduced fees on Gemini exchange via the API service

## install

```shell

git clone https://gitlab.kool.house/thepulvergroup/gemini-tools
npm install -g
```

## Usage

Create a file at ~/.geminitoolsrc with the content

```
API_KEY=<api key goes here>
```

- gemini-tools dump-ether [ --amount=<amount> ]
  - Sells all of the ETH holdings in the account for the maximum amount of USD possible
  - Can specify --amount=0.635 (or any quantity) 
  - Output:
  - `Sold <eth amount> ETH for <output amount> USD`

## Author

Sean Pulver
