// - - - - - - - - - - - - - - - - 
// Helpers
// - - - - - - - - - - - - - - - - 

// Returns the amount of items in an array
// - - - - - - - - - - - - - - - - 
export function arrayCount(array) {
  if(array) {
    return array.length;
  } else {
    return '0';
  }
}

// Formats string which contains a URL and returns just the domain name
// TODO: Cleanup /path/ slightly and check for ? and #
// - - - - - - - - - - - - - - - - 
export function formatURL(url) {
  if(url) {
    let removeHTTP = url.replace(/(^\w+:|^)\/\//, '');
    let removeWWW = removeHTTP.replace(/www./i, '');
    let formattedURL = removeWWW.replace(/\/([^\s?#]+)/i, '');

    return formattedURL;
  }
}

// Formats the time to a modern date and time
// - - - - - - - - - - - - - - - - 
export function formatDateTime(unixDate) {
  let date = new Date(unixDate*1000);
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getUTCFullYear();
  let hour = date.getUTCHours() + 1;
  let minutes = date.getUTCMinutes();

  const formattedTime = `${hour}:${minutes}`
  const formateDate = `${day}/${month}/${year}`;

  return `${formattedTime} ${formateDate}`;
}