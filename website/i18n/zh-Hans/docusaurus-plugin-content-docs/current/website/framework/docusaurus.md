---
sidebar_position: 1
_i18n_hash: 3e7ad33b9d88240c2ee01504fb17ed2d
---
# 在 Docusaurus 中使用

在 `docusaurus.config.js` 中：

```js
/** @type {import('@docusaurus/types').Config} */
const config = {
  // ...

  scripts: [
    {
      src: 'https://<你的域名>/tracker.js',
      async: true,
      defer: true,
      'data-website-id': '<你的网站 ID>',
    },
  ],
};

module.exports = config;
```
