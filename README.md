# dayjs-jp-era

## 目的

dayjsのformatにて日本の元号を表示するプラグインです。
https://github.com/hyakt/dayjs-jp-format さんをフォークしてます。
理由：平成30年のときに「平成30」、令和4年のとき「令和4年」と表記されてしまっていたため。

Usage
---
1. Install the repository
    ```bash
    $ npm install --save dayjs-jp-format
    $ npm install --save dayjs # peer dependency
    ```
    or
    ```bash
    $ yarn add dayjs-jp-format
    $ yarn add dayjs # peer dependency
    ```

2. Import the jp format
   ```javascript

    import { jpFormat } from 'dayjs-jp-format' // load on demand
    dayjs.extend(jpFormat) // use plugin
    const date = '2020-06-24'
    dayjs(date).format('rrrr') // --> 令和02
    ```

Format
---
| Format | Output           | Description                           |
| ------ | ---------------- | ------------------------------------- |
| `rrrr` | 令和2            | 日付に応じた和暦(年は除く)                 |
| `rrr`  | 令和2年          | 年あり
| `rr`   | 令和              | 日付に応じた元号                         |
