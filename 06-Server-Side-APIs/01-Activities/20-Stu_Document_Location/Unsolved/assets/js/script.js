var badRequestUrl = 'https://api.github.com/unicorns';
var redirectUrl = './404.html';

fetch(badRequestUrl).then(function (response) {
  // Use a conditional to check the response status.
  // If that status equals the conditional, then redirect to the 404 page.
  // document.location and window.location are the same thing.
    
  console.log(response.status);

    // if (badRequestUrl = response)
    //   window.location.replace(redirectUrl);

      if(response.status === 404){
        window.location.replace(redirectURL);
      } else {
        return response.json();
      }
});
