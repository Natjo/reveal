
# Reveal

![version](https://img.shields.io/github/manifest-json/v/Natjo/reveal)  

Trig once when element is in viewport. It's possible to add offset

## Parameters
| Parameter | Type | Default | Description |
| ------ | ------ | ------ | ------ |
| elements | htmlCollection/Nodelist | - | element or elements |
| onreveal | function | - | - |
| offset | number | - | offset between 1 - 0  of the element height|


## Usage
```javascript
const sections = document.querySelectorAll('section');

reveal(sections, el => {
	el.classList.add('reveal');
}, .25);
```

## Demo

[See codepen demo](https://codepen.io/natjo/pen/oNXpJLG?editors=0111)
