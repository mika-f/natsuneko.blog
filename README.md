# natsuneko.blog

Blog site by natsuneko, powered by Next.js.

## Development

### Start Dev Server

```bash
$ yarn run dev
```

### Publish

```bash
$ git push origin main # automatically renderer by Vercel
```

## Markdown Extensions

### CodeBlock with Filename

````codeblock
```lang:filename
some code here
```
````

### Image Height & Width

Add `height=xxx` and/or `width=xxx` to image url.

```
![](https://assets.natsuneko.blog/images/20160224/20160224190500.png?height=xxx&width=xxx)
```

### Extract URL Titles

Add `:title` to url.

```
[](https://github.com/mika-f:title)
```


### Embedded URL

Add `:embed` to url

```
[](https://www.youtube.com/watch?v=7CQPvJqea-M:embed)
```


## License

- Blog contents are licensed under the CC-BY-SA 4.0
- Blog sources are licensed under the MIT
