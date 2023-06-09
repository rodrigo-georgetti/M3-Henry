const fs = require("fs");
const utils = require("../utils/request");
const process = require("process");

function pwd(print) {
  print(process.cwd());
}

function date(print) {
  print(Date());
}

function echo(print, args) {
  print(args);
}

function ls(print) {
  fs.readdir(".", (error, files) => {
    if (error) throw Error(error);
    print(files.join(" "));
  });
}

function cat(print, args) {
  fs.readFile(args, "utf-8", (error, data) => {
    if (error) throw Error(error);
    print(data);
  });
}

function head(print, args) {
  fs.readFile(args, "utf-8", (error, data) => {
    if (error) throw Error(error);
    print(data.split("\n").at(0).trim());
  });
}

function tail(print, args) {
  fs.readFile(args, "utf-8", (error, data) => {
    if (error) throw Error(error);
    print(data.split("\n").at(-1).trim());
  });
}

function curl(print, args) {
  utils.request(`https://${args}`, (error, response) => {
    if (error) throw Error(error);
    print(response);
  });
}

module.exports = { pwd, date, echo, ls, cat, head, tail, curl };
