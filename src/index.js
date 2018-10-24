import _ from "lodash";
import Data from "./data.xml";
import csv from "./data.csv";
import * as d3 from "d3";

function component() {
  var element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  console.log(Data);
  console.log(csv);
  d3.select('body')
  return element;
}

document.body.appendChild(component());