# Publishing a Project

The Projects section reads its content from `articles.js`.

The starter site includes `articles/example-project.html` as a visible layout
preview. Replace that example object and page when the first real project is
ready.

Add a project object inside `window.ARTICLES`, newest first:

```js
window.ARTICLES = [
  {
    title: "Your project title",
    category: "Data in practice",
    date: "July 2026",
    summary: "A short, plain-language description of the question and outcome.",
    href: "articles/your-project.html",
    published: true,
  },
];
```

Then create the linked HTML file inside an `articles` folder. Set
`published: false` while a project is still a draft. When at least one item is
published, the homepage automatically replaces the “first story” message with
the project list.
