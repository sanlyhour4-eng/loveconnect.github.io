// Load profiles when website opens
displayProfiles();

// Save profile
function saveProfile(){

  // Get values
  let name = document.getElementById("name").value;

  let age = document.getElementById("age").value;

  let hobby = document.getElementById("hobby").value;

  let about = document.getElementById("about").value;

  // Create profile object
  let profile = {

    name: name,
    age: age,
    hobby: hobby,
    about: about

  };

  // Get old profiles
  let profiles =
    JSON.parse(localStorage.getItem("profiles"))
    || [];

  // Add new profile
  profiles.push(profile);

  // Save to Chrome
  localStorage.setItem(
    "profiles",
    JSON.stringify(profiles)
  );

  // Show profiles
  displayProfiles();

  // Clear form
  document.getElementById("name").value = "";

  document.getElementById("age").value = "";

  document.getElementById("hobby").value = "";

  document.getElementById("about").value = "";

}

// Display profiles
function displayProfiles(){

  // Get profiles
  let profiles =
    JSON.parse(localStorage.getItem("profiles"))
    || [];

  // Empty output
  let output = "";

  // Loop profiles
  for(let i = 0; i < profiles.length; i++){

    output += `

      <div class="card">

        <h3>${profiles[i].name}</h3>

        <p><strong>Age:</strong> ${profiles[i].age}</p>

        <p><strong>Hobby:</strong> ${profiles[i].hobby}</p>

        <p><strong>About:</strong> ${profiles[i].about}</p>

      </div>

    `;

  }

  // Show on website
  document.getElementById("profiles").innerHTML =
    output;

}