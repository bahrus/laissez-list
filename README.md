# laissez-list

<a href="https://nodei.co/npm/laissez-list/"><img src="https://nodei.co/npm/laissez-list.png"></a>

<img src="https://badgen.net/bundlephobia/minzip/laissez-list">

[![Actions Status](https://github.com/bahrus/laissez-list/workflows/CI/badge.svg)](https://github.com/bahrus/laissez-list/actions?query=workflow%3ACI)


laissez-list provides a declarative "infinite scrolling" virtual list web component.

[Demo 1 -- Simple](https://codepen.io/bahrus/pen/yLPjMER)

[Demo 2 -- Tree View](https://codepen.io/bahrus/pen/GROLwBV)

Note that for Demo 2, if you click expand all, and enable Chrome's Web Vitals dev tool (under rendering tab), there is no Cumulative Layout Shift.

This is done by utilizing the intersectional settings:

```html
<laissez-list ...
  row-intersectional-settings='{
    "rootClosest": ".scroller",
    "options": {
        "rootMargin": "300px",
        "threshold": 0
    }
}'>
 ...
</laissez-list>
```

## [API](https://cf-sw.bahrus.workers.dev/?href=https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2Flaissez-list%2Fcustom-elements.json&stylesheet=https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2Fwc-info%2Fsimple-ce-style.css&embedded=false&tags=&ts=2022-03-05T11%3A08%3A36.018Z&tocXSLT=https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2Fwc-info%2Ftoc.xsl)

## Example

```html
<laissez-list style="height:600px;width:100%;" id="vlist"
    row-transform='{
        "span": "."
    }'
>
    <template slot=row>
        <div>
            <span></span>
        </div>
    </template>
</laissez-list>
<script>
    const list = [];
    for (let i = 0; i < 100000; i++) {
        list.push(i);
    }
    vlist.list = list;
</script>
```

The row-transform syntax is based on css-like [Declarative Trans-Render syntax (DTR)](https://github.com/bahrus/trans-render#declarative-trans-render-syntax-via-plugins).

## Installation

1.  npm instal laissez-list
    1.  In JS, import 'laissez-list/laissez-list.js';

or

2.  jsDelivr

```html
<script type=module>
    import 'https://esm.run/laissez-list/laissez-list.js';
</script>
```


## Viewing Your Element Locally

```
$ npm install
$ npm run serve
```




