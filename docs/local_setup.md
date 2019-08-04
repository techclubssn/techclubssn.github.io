# Local Setup

Follow these instructions to get the website running on your local system. Instructions are given assuming a linux (ubuntu 16.04 specifically) work environment. If you are using any other OS, please refer to the equivalent of these commands.

1. Install Git, Node (>=10.2.1) and Npm (>=5.6.0).
> **Note**: The versions mentioned in the instructions were the ones used during initial development. A lower version *maybe* compatible, so if you have them already installed you can give it a shot.

2. Clone the `master-readable` branch using the following command.
```
git clone -b master-readable https://github.com/techclubssn/techclubssn.github.io.git
cd techclubssn.github.io
```
3. Install node modules using the following command
```
npm install
```
4. Start the development serving using the following command. You can access the website at http://localhost:3000/
```
npm start
```