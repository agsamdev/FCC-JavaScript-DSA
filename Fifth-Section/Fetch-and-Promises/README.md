## Fetch and Promises

![](author-page.gif)

### fetch()

make simple API calls, a simple GET request with fetch, and a POST request where we need to pass along certain other parameters, including a configuration object effortlessly

```js
fetch('https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json')
  .then((res) => res.json())
  .then((data) => {
    authorDataArr = data;
    displayAuthors(authorDataArr.slice(startingIndex, endingIndex));  
  })
  .catch((err) => {
   authorContainer.innerHTML = '<p class="error-msg">There was an error loading the authors</p>';
  });
```
