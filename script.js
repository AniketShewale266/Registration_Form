let submit_form = document.getElementById("my_form");

const submitForm = () => {
    let fname = document.getElementById("fname");
    let email = document.getElementById("email");
    let website = document.getElementById("website");
    let image = document.getElementById("image");
    let gender = document.getElementsByName("gender");
    let skills = document.getElementsByName('skills');
    let users_table =  document.getElementById('users_table');
    let myImg = document.getElementById('myImg');


    let selectedGender;

    for (var i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            selectedGender = gender[i].value;
            break;
        }
    }
    // alert("Selected gender "+ selectedGender)

    var selectedSkills = [];
    var isChecked = false; // set initial value of isChecked to false
    for (var i = 0; i < skills.length; i++) {
        if (skills[i].checked) {
            selectedSkills.push(skills[i].value);
            isChecked = true;
        }
    }
    if (!isChecked) { // if no checkboxes have been checked
        alert("Please select at least one checkbox."); // display an alert message
        return false; // prevent the form from submitting
    }

    // alert("Selected Skills "+ selectedSkills.join(', '));

    // const showData = document.createElement('div');
    let tableRow = document.createElement('tr');
    
    tableRow.innerHTML = `
    <tr>
    <td>
       <div class="data">
          <p>${fname.value}</p>
          <p>${email.value}</p>
          <p>${website.value}</p>
          <p>${selectedGender}</p>
          <p>${selectedSkills}</p>
      </div> 
  </td>
    <td>
      <img id="myImg" src="${image.value}">
    </td>
  </tr> 
  `;
//   myImg.src = image.value;
  users_table.appendChild(tableRow);

    // fname.value = '';
    // email.value = '';
    // website.value = '';
    // image.value = '';

    // for (let i = 0; i < selectedGender.length; i++) {
    //     selectedGender[i].checked = false;
    // }

    // for (let i = 0; i < selectedSkills.length; i++) {
    //     selectedSkills[i].checked = false;
    // }
    submit_form.reset(); // resets the form
}


submit_form.addEventListener("submit", function (event) {
    event.preventDefault();
    submitForm();
});