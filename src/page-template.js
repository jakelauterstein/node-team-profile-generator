// create the intern section
const generateIntern = intern => {
    if (!intern) {
      return '';
    }
  
    return `
      <div>
        <h2>Intern Team Members:</h2>
        <p>Name:${intern.name}</p>
        <p>Employee ID: ${intern.id}</p>
        <p>Email: ${intern.email}</p>
        <p>School: ${intern.school}</p>
      </div>
    `;
  };

  const generateEngineer = engineer => {
    if (!engineer) {
      return '';
    }
  
    return `
      <div>
        <h2>Engineer Team Members:</h2>
        <p>Name:${engineer.name}</p>
        <p>Employee ID: ${engineer.id}</p>
        <p>Email: ${engineer.email}</p>
        <p>School: ${engineer.github}</p>
      </div>
    `;
  };



// epxort function to generate entire page

module.exports = team => {
    // destructure page data by section
    // const manager = team[0];
    // const intern = team[1];
    // const engineer = team[2];

    const [manager, intern, engineer] = team;

    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Profile Generator</title>
    </head>
    
    <body>
      <h1>Team Profile Generator</h1>
      <section>
      <h2>Team Manager: ${manager.name}</h2>
      <p>Employee ID: ${manager.id}</p>
      <p>Email: ${manager.email}</p>
      <p>Office Number: ${manager.officeNumber}</p>
      </section>
      <section>
      ${generateIntern(intern)}
      ${generateEngineer(engineer)}
      </section>
    </body>
    </html>
    `;
  };
  