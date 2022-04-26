const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
      .then(response => response.json())
      .then(data => data.urls)
}

const postUrls = ({long_url, title}) => {
  return fetch('http://localhost:3001/api/v1/urls', {
    method: "POST",
    body: JSON.stringify({
      long_url: long_url,
      title: title
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then(response => response.json())
}

export {getUrls, postUrls }