const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const birthDate = document.getElementById("birth");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form_registration");
const errorElement = document.getElementById("error");

var newUserData;

form.addEventListener("submit", (e) => 
{
    validateInput(e);
})

function validateInput(currentEvent)
{
    let warning;
    let inputs = [
        password,
        email,
        birthDate,
        username,
        lastName,
        firstName
    ];
    for(var i = 0; i < inputs.length; i++)
    {
        if(inputs[i].value == "" || inputs[i].value == null)
        {
            console.log(inputs[i].value);
            warning = inputs[i].getAttribute("name") + " " + "can't be empty";
        }
    }

    if(warning != null)
    {
        currentEvent.preventDefault();
        errorElement.innerText = warning;
    }
    else
    {
        currentEvent.preventDefault();
        newUserData = new formInput(firstName.value, lastName.value,
             birthDate.value, username.value, email.value, password.value);

        //TODO: Simpan ke database
        window.location.href = "landing.html"; //nanti diganti ke layar registrasi berhasil
    }
}
class formInput
{
    constructor(fname, lname, birth, username, email, password) 
    {
        this.fname = fname;
        this.lname = lname;
        this.birth = birth;
        this.username = username;
        this.email = email;
        this.password = password;
    }
}


