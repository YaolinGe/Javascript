# Notes for introduction for front-end development

- Web hosting: `VPS (virtual private server), shared server, cloud hosting`
- IP packet: header and payload (TCP/UDP)
- IPV4, IPV6
- HTTP (Hyper Text Transfer Protocol)
- HTTP request,
  - Method: GET, POST, PUT, DELETE
  - Path: /somepath
  - Version: 1.1
  - Headers: some header
- HTTP response
- Group code:
  - Informational: 100-199
  - Successful: 200-299
  - Redirection: 300-399
  - Client error: 400-499
  - Server error: 500-599
- Browser API, Rest API, sensor-based API are the common APIs.
- Search food website to get inspirations.
- WAI: web accessiblity initialitive

## HTML basics
- form
  - <input />
  - type = "radio", "password", "text", "checkbox", "submit", "email",
  - some other types such as textareal, select

## CSS basics
- `#id h1` is descendent selector to choose the specific h1 inside the id element.
- `#id > h1` is child selector to only select the immediate element of that selector, if there exists more h1, the first level of h1 will be chosen. If there exists more levels of h1, which are wrapped inside another div, then it will not be selected.
- `block` and `inline` are two most common ways of presenting the document flow.
- `block` such as `div`, `form`, `h1` -> `h5`
- `inline` such as `a`, `img`, `input`, `label`, `b`, `i`, `em`, `span`
- `margin=auto` only works for block elements, for inline elements, they need to be converted to block first.

## Libraries and framework
- `Gulp` and `webpack` are bundling tools to gather all the essential dependencies to a single file.
- responsive designs
  - flexible grids: columns, gutters, margin
  - fluid images: maximum-width: 100%
  - media queries
- breakpoint
  - extra small               <576px
  - small               sm    >=576px
  - medium              md    >=768px
  - large               lg    >=992px
  - extra large         xl    >=1200px
  - extra extra large   xxl   >=1400px
- modifiers:
  - primary     blue
  - secondary
  - success
  - info
  - warning
  - danger      red
  - light
  - dark
- SPA, only renders the essential updates and rewrites the current html page.
- `bundling` and `lazy loading`
- `React` will build a virtual DOM and then update based on the discrepency between the virtual DOM and the browser DOM.
