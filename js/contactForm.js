function sendEmail(){
    Email.send({
        Host : "s1.maildns.net",
            Username : "username",
            Password : "password",
        To : 'szamar860@hengersor.hu',
        From : document.getElementById("email"),
        Subject : document.getElementById("sub"),
        Body : document.getElementById("message")
    }).then(
      message => alert(message)
    );
}