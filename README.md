# My Wallet

An easy to use financial manager. Track your revenues and expenses to learn how you spend your money and know all the time how much you have.
<br/>

<p align="center">
  <img align = "center" src="./assets/mywallet.gif" />
</p>

<br/>
Try it out now at https://my-wallet-frontend-three.vercel.app

## About

This is an web application with which lots of people can manage their own expenses and revenues. It was designed to smaller screens (such as cellphones) but it works fine on bigger screens as well. Below are the implemented features:

- Sign Up
- Login
- List all financial events for a user
- Add expense
- Add revenue

By using this app any user can learn how they've been using their money and always keep track of your balance.
In the future, I would like to add multi-language settings, as well as another currencies (the one implemented is BRL).

## Technologies
The following tools and frameworks were used in the construction of the project:<br>
- ### Front-end
<p>
  <img style='margin: 5px;' src='https://img.shields.io/badge/styled-components%20-%2320232a.svg?&style=for-the-badge&color=b8679e&logo=styled-components&logoColor=%3a3a3a'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/axios%20-%2320232a.svg?&style=for-the-badge&color=informational'>
  <img style='margin: 5px;' src="https://img.shields.io/badge/react-app%20-%2320232a.svg?&style=for-the-badge&color=60ddf9&logo=react&logoColor=%2361DAFB"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/react_route%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
  <img style='margin: 5px;' src='https://img.shields.io/badge/react-icons%20-%2320232a.svg?&style=for-the-badge&color=f28dc7&logo=react-icons&logoColor=%2361DAFB'>
</p>

- ### Back-end
<p>
  <img style='margin: 5px;' src='https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white'>
  <img style='margin: 5px;' src='	https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white'>
  <img style='margin: 5px;' src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"/>
</p>

## How to run

1. Clone this repository
```bash
git clone https://github.com/Celusgo/my-wallet-frontend
```
2. Clone the back-end repository at https://github.com/Celusgo/my-wallet-backend
3. Follow instructions to run back-end at https://github.com/Celusgo/my-wallet-backend
4. Install dependencies
```bash
npm i
```
5. In the root folder, create a file named ``.env`` in the same format as the ``.env.example`` file and fill with your information. e.g.: ``REACT_APP_API_BASE_URL=http://localhost:YOURPORT``, where ``YOURPORT`` must be the same ``PORT`` number specified in your ``back-end .env`` file.

6. Run the front-end with
```bash
npm start
```
7. You can optionally build the project running
```bash
npm run build
```
8. Finally access http://localhost:3000 on your favorite browser.
