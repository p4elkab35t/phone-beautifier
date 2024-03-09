# Phone Beautifier

### Usage
- Go to [this page](https://p4elkab35t.github.io/phone-beautifier/)
- Input your number in presented field withoud region code
- Get result with some word instead of some digits

---


### <font color="green">All contributions are welcome, because it's my first react app and I know there are tons of code to be optimized or be refactored with better practices</font>

---

## Thank you!

### Branches
- main
- main_sync (currently inoperative)
- gh_pages (for deploying purposes)

---
## Building & Deployment

### Build project:
- Clone repository using
```
git clone https://github.com/p4elkab35t/phone-beautifier.git
```
- Install dependencies via root folder of project using
```
npm install
```
- Change `package.json` file for your sole purposes
- Dev start locally using
```
npm run start
```

### Deploy project on github Pages (example)
- Install `gh-pages` using:
```
npm install gh-pages --save-dev
```
- Change `homepage` field in `package.json` file
- Commit changes and push to your own repository
- Run predeploy and deploy project (branch gh-pages in your repository is created automatically) using:
```
npm run predeploy
```
And after completion
```
npm run deploy
```
