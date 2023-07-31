'use strict';

import HTMLElementEx from './dist/html-element-ex.js'

const items = Array.from(document.getElementsByClassName('item'))

console.log(new HTMLElementEx(items[0]).HTMLElement())
new HTMLElementEx(items[0]).addClass('class1').removeClass('class1')
new HTMLElementEx(items[0]).stackClass('.stackClass1')
new HTMLElementEx(items[0]).stackClass('.stackClass1')
new HTMLElementEx(items[0]).queueClass('stackClass1')
new HTMLElementEx(items[0]).queueClass('stackClass1')
new HTMLElementEx(items[0]).insert('before', items[1])
new HTMLElementEx(items[0]).insert('after', items[3])
new HTMLElementEx(items[5]).insert('begin', items[2])
new HTMLElementEx(items[5]).insert('end', items[4])
console.log(new HTMLElementEx(items[5]).getRect())
