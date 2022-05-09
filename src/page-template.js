// create the intern section
const generateIntern = intern => {
    if (!intern) {
      return '';
    }
  
    return `
    <div class="col s12 m6">
    <div class="card blue-grey darken-1">
      <div class="card-content white-text">
        <span class="card-title">Intern Team Member: ${intern.name}</span>
        <p>Employee ID: ${intern.id}</p>
      </div>
      <div class="card-action">
      <a href = "mailto: ${intern.email}">Send Email</a>
      <p>School: ${intern.school}</p>
      </div>
    </div>
  </div>
    `;
  };

  const generateEngineer = engineer => {
    if (!engineer) {
      return '';
    }
  
    return `
    <div class="col s12 m6">
    <div class="card blue-grey darken-1">
      <div class="card-content white-text">
        <span class="card-title">Engineer Team Member: ${engineer.name}</span>
        <p>Employee ID: ${engineer.id}</p>
      </div>
      <div class="card-action">
      <a href = "mailto: ${engineer.email}">Send Email</a>
      <a href="https://github.com/${engineer.github}" target="_blank">Github</a>
      </div>
    </div>
  </div>
    `;
  };



// epxort function to generate entire page

module.exports = team => {
    // destructure page data by section
    // const manager = team[0];
    // const intern = team[1];
    // const engineer = team[2];

    const [manager, engineer, intern] = team;

    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Profile Generator</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.8/css/materialize.min.css" integrity="sha512-17AHGe9uFHHt+QaRYieK7bTdMMHBMi8PeWG99Mf/xEcfBLDCn0Gze8Xcx1KoSZxDnv+KnCC+os/vuQ7jrF/nkw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
      <h1>Team Profile Generator</h1>

      <!-- Manager Section -->

      <div class="row">
        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">Team Manager: ${manager.name}</span>
              <p>Employee ID: ${manager.id}</p>
            </div>
            <div class="card-action">
            <a href = "mailto: ${manager.email}">Send Email</a>
            <p>Office Number: ${manager.officeNumber}</p>
            </div>
          </div>
        </div>
      </div>


      <!-- Engineer Section -->
      <div class="row">
      ${generateEngineer(engineer)}
      </div>

      <!-- Intern Section -->
      <div class="row">
      ${generateIntern(intern)}
      </div>




    `;
  };
  