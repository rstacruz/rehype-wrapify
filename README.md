<p align='center'>
<br><img src='https://user-images.githubusercontent.com/74385/47948807-e0779800-df72-11e8-81e8-68ec5c61de46.png' width='160'><br>
</p>

<h1 align='center'>
rehype-wrapify
</h1>

<p align='center'>
Wrap individual heading sections in Rehype
</p>

<p align='center'>
<img src='https://img.shields.io/badge/build-pending-lightgrey.svg'>
</p>

<br>

Used in [devhints-engine], but still to be cleaned up for general use, stay tuned :)

[devhints-engine]: https://github.com/rstacruz/devhints-engine

## Examples

Use `{ tagName: 'h2' }` to wrap each H2 section into its own `<div class='h2-section'>` element.

```js
wrap(root, {
  tagName: 'h2',
  sectionClass: ['h2-section'],
  bodyClass: ['body']
})
```

<table>
<tr><th>Input</th><th>Output</th></tr>
<tr><td>

```html
<div>
  <h2>Introduction</h2>
  <p>Hello there</p>
  <h2>Thanks</h2>
  <p>That's all folks!</p>
</div>
```

</td><td>

```html
<div>
  <div className='h2-section'>
    <h2>Introduction</h2>

    <div className='body'>
      <p>Hello there</p>
    </div>
  </div>

  <div className='h2-section'>
    <h2>Thanks</h2>

    <div className='body'>
      <p>That's all folks!</p>
    </div>
  </div>
</div>
```

</td></tr></table>
