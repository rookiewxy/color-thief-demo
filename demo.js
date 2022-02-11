/*
 * @Description: 
 * @Autor: wxy
 * @Date: 2022-02-11 19:11:53
 * @LastEditors: wxy
 * @LastEditTime: 2022-02-11 19:12:00
 */
const ColorThief = require('colorthief');
const path = require('path');

const img = path.resolve(process.cwd(), 'rainbow.png');

ColorThief.getColor(img)
    .then(color => { console.log(color) })
    .catch(err => { console.log(err) })

ColorThief.getPalette(img, 5)
    .then(palette => { console.log(palette) })
    .catch(err => { console.log(err) })