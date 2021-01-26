fetch(
  // Explain each parameter in comments below.
  'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc'
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
// Parameter explanation.
// 10 issues per page
// filter so that only issues that are opened are shown
// sort by created first. 
// descending from oldest issue created. the newest issues will be on top
// https://docs.github.com/en/rest/reference/issues#list-issues-assigned-to-the-authenticated-user--parameters

// per_page = 10 results per page
// state = state of current issue
// sort = sorted by created, updated, or comments
// direction = how to return sorted results. ascending and descending are the only options