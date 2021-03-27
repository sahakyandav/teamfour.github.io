const firstConditional = document.getElementById("image14");
const secondConditional = document.getElementById("label13");
const thirdConditional = document.getElementById("label14")
const thirdCondImg = document.getElementById("image16");
const hasPosts = document.getElementById("hasPosts");
const validAccount = document.getElementById("validAccount");
const followed = document.getElementById("followed");
var respoJSON;

function timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var time = date + ' ' + month + ' ' + year;
    return time;
}

function instagramSearch(username) {
    username = username.replace("@", "")
    username = username.replace("?", "")
    var xhr = new XMLHttpRequest();
    xhr.open("GET", `https://cors-anywhere.herokuapp.com/www.instagram.com/${username}/?__a=1`);
    xhr.send();
    xhr.onload = function () {
        if (xhr.status != 200) {
            validAccount.innerHTML = "false";
            console.error(`Error ${xhr.status}`);
        } else {
            respoJSON = JSON.parse(xhr.response);
            validAccount.innerHTML = "true";
            console.log(respoJSON);
            try {
                firstConditional.src = respoJSON['graphql']['user']['profile_pic_url_hd'];
                secondConditional.innerHTML = `Which one of your ${respoJSON['graphql']['user']['edge_followed_by']['count']} followers reminds you most of Hermione?`;
                thirdCondImg.src = respoJSON['graphql']['user']['edge_owner_to_timeline_media']['edges'][0]['node']['thumbnail_src'];
                hasPosts.innerHTML = "true";
                thirdConditional.innerHTML = `What would your housemates comment under this post from ${timeConverter(respoJSON['graphql']['user']['edge_owner_to_timeline_media']['edges'][0]['node']['taken_at_timestamp'])}?`;
            } catch (TypeError) {
                hasPosts.innerHTML = "false"
                console.log(TypeError)
            }
        }
    };
    xhr.onerror = function () {
        console.log("Error");
    };
    return (respoJSON);
}
