//Acces the submit button
const butt = document.getElementById("submit");

//Access the edit button
var ed = document.getElementById("edit");

//Access the Done button
var done = document.getElementById("done");
// done.addEventListener("click", finish);

function submitter () {
    //Declare variables for all the inputs in the form 
    const fname = document.getElementById("fname").value;
    const mname = document.getElementById("mname").value;
    const lname = document.getElementById("lname").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("number").value;
    const nation = document.getElementById("nation").value;
    const email = document.getElementById("email").value;
    const gender = document.getElementById("gender").value;

    let letters = /^[A-Za-z]+$/;

    let e_mail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    let num=/^[0-9]{10}$/;

    if (!letters.test(fname) || fname.length == 0 || !letters.test(mname) || mname.length == 0 || 
    !letters.test(lname) || lname.length == 0 || !e_mail.test(email) || email.length == 0 ||
    !num.test(phone) || phone.length == 0 || nation.length == 0 || address.length == 0){
        return window.alert("One or more fields are incomplete or invalid");
    }

    //Store the information
    localStorage.setItem("fname", fname);
    localStorage.setItem("mname", mname);
    localStorage.setItem("lname", lname);
    localStorage.setItem("address", address);
    localStorage.setItem("number", phone);
    localStorage.setItem("nation", nation);
    localStorage.setItem("email", email);
    localStorage.setItem("gender", gender);

    document.getElementById("identify").style.marginLeft = '45%';

    //Update elements
        //Replace Name inputs with Paragraph tags
        let a = document.getElementById("fname");
        let newName = document.createElement("p");
        newName.id = "fname";
        newName.className = "par";
        newName.style.fontFamily = "Verdana";
        newName.style.fontSize = "x-large";
        document.getElementById("mname").remove();
        document.getElementById("lname").remove();
        newName.innerHTML = fname.trim() + " " + '<span>' + mname.trim() + "</span>" + " " + "<span>" + lname.trim() + "</span>";
        a.parentElement.replaceChild(newName, a);

        //Add Gender
        let gen = document.getElementById("gender");
        let newG = document.createElement("p");
        newG.id = "gender";
        newG.innerHTML  = localStorage.getItem("gender");
        gen.parentElement.replaceChild(newG, gen);
        
        //Replace Name inputs with Paragraph tags
        let b = document.getElementById("address");
        let newAddress = document.createElement("p");
        newAddress.id = "address";
        newAddress.innerHTML = address;
        newAddress.setAttribute("class", "par text");
        b.parentElement.replaceChild(newAddress, b);
    
        //Replace Number inputs with Paragraph tags
        var c = document.getElementById("number");
        var newPhone = document.createElement("p");
        newPhone.id = "number"
        var p = document.getElementById("nation");
        newPhone.innerHTML = phone + ' <span>/ ' + nation + '</span>';
        newPhone.setAttribute("class", "par text");
        c.parentElement.replaceChild(newPhone, c);
        p.remove();
    
        //Replace Email inputs with Paragraph tags
        var d = document.getElementById("email");
        var newEmail = document.createElement("p");
        newEmail.id = "email"
        newEmail.innerHTML = email;
        newEmail.setAttribute("class", "par text");
        d.parentElement.replaceChild(newEmail, d);
    

    //Space out paragraph tages and remove line break tags and labels
    var x = document.getElementById("identify");
    var y = x.getElementsByTagName("p");

    let z = document.getElementsByClassName("break");
    

    for (var i = 0; i < z.length; i++){
        
        z[i].style.display = "none";
    }

    for (var i = 0; i < y.length; i++){
        y[i].style.marginTop = "0.5em";
        y[i].style.marginBottom = "0.5em";
    }

}

//Define a function for the purpose of the button
function finish(e){

    submitter();

    //Replace submit button with edit button
    butt.style.display = "none";
    ed.style.display = "block";
    done.style.display = "block";
    ed.setAttribute("class", "sub");
    done.setAttribute("class", "sub");

}

//Edit button function
function edit() {
    var x = document.getElementById("identify");
    var y = document.getElementsByClassName("par");
    // var z = x.getElementsByTagName("br");

    
    for (var i = 0; i < 4; i++){
        y[i].style.display = "none";
    }

    var labels = ["First Name: ", "Middle Name: ", "Last Name: ", "Address: ", "Phone Number: ", "Nationality: ", "Email: "];
    var names = ["fname", "mname", "lname", "address", "number", "nation", "email"];


    document.getElementById("fname").remove();
    document.getElementById("address").remove();
    document.getElementById("number").remove();
    document.getElementById("email").remove();
    
    for (var i = 0; i < names.length; i++){
        let newInput = document.createElement("input");
        newInput.id = names[i];
        newInput.type = "text";
        newInput.name = names[i];
        newInput.value = localStorage.getItem(names[i]);

        let newLabel = document.createElement("label");
        newLabel.innerHTML = labels[i];
        newLabel.id = "break";
        newLabel.setAttribute("class", "break");

        let newBr = document.createElement("br");
        newBr.setAttribute("class", "break");


        
        x.appendChild(newLabel);
        x.appendChild(newInput);
        x.appendChild(newBr);
        
    }

    //Set gender selection
    // document.getElementById("gender").remove();
    let g = document.getElementById("gender");
    let newG = document.createElement("select");
    newG.id = "gender";

    let opt1 = document.createElement("option");
    opt1.value = "Male";
    opt1.innerHTML = "Male";

    let opt2 = document.createElement("option");
    opt2.value = "Female";
    opt2.innerHTML = "Female";

    newG.appendChild(opt1);
    newG.appendChild(opt2);

    g.parentElement.replaceChild(newG, g);

    document.getElementById("identify").style.marginLeft = '41%';
}

function doneclick () {
    let ind = document.getElementsByTagName("input");
    console.log(ind);
    if (ind.length != 0){
        submitter();
        ed.style.display = "none";
        done.style.display = "none";
    }
    else{
        ed.style.display = "none";
        done.style.display = "none";
    }
    
    
}
