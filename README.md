# laissez-list

<a href="https://nodei.co/npm/laissez-list/"><img src="https://nodei.co/npm/laissez-list.png"></a>

<img src="https://badgen.net/bundlephobia/minzip/laissez-list">

[![Actions Status](https://github.com/bahrus/laissez-list/workflows/CI/badge.svg)](https://github.com/bahrus/laissez-list/actions?query=workflow%3ACI)


laissez-list provides a declarative "lazy loading" list web component.

It serves a similar purpose to "virtual list" components, but strictly speaking it isn't a virtual list because of one key difference:  It never removes content after it's been created.

Some advantages of a lazy-loaded list vs a virtual list:

1.  If the user starts to edit a part of the list, and the scrolls away, and then back, focus might not be lost.  Other changes that might have been incurred by user interaction are also much less likely to be lost with this approach.
2.  As content lazy loads, it permanently becomes searchable via the browser's search tool.
3.  Because it leans more on native browser capabilities, it may work better as far as accessibility.
4.  The complexity and size of the code base is reduced.

Disadvantages:

1.  True "infinite scrolling" would require infinite memory.

To work well with laissez-list, components should use [be-oosoom](https://github.com/bahrus/be-oosoom) techniques to indicate how to "go to sleep" when scrolling out of view, which simply requires adding a "beOosoom" mapping property to the component.  [be-repeated](https://github.com/bahrus/be-repeated) is one such component that is be-oosoom friendly.

Another feature that makes laissez-list's performance come close to a virtual list is use of "time-stamping" of items in the list, so that the renderer knows how to rebinds items which have changed since the last render. [xtal-tree](https://github.com/bahrus/xtal-tree) is an example of a time-stamping virtual model, that takes an object structure, and turns it into a flat list, with time-stamping support.

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
<laissez-list style="height:600px;width:100%;" id="lzlist"
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
    lzlist.list = list;
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




