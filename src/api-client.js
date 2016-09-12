import $ from 'jquery';

export default function makeRequest(method, url) {
  // TODO: Should use something that implements standard promises
  return $.ajax({
    method: method,
    url: url
  }).fail(function (err) {
    // TODO: Should report error to user in some way!
    console.log(err);
  });
}
