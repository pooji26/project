function Api()
{
    var requestBody = "{\"short_description\":\"email issue\"}";

    var client = new XMLHttpRequest();
    client.open("post", "https://dev29731.service-now.com/api/now/table/incident");

    client.setRequestHeader('Accept', 'application/json');
    client.setRequestHeader('Content-Type', 'application/json');

    //Eg. UserName="admin", Password="admin" for this code sample.
    Client.setRequestHeader('Authorization', 'Basic ' + btoa('admin' + ':' + 'RP56OzkOftgL'));

    client.onreadystatechange = function () {
        if (this.readyState == this.DONE) {
            document.getElementById("response").innerHTML = this.status + this.response;
        }
    };
    client.send(requestBody);
}
