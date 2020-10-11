const generateSite = employees => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
    <link rel="stylesheet" href="./dist/style.css" />
    <title>My Team</title>
</head>

<body>
    <main>
    <div class="container-fluid">
        <div class="row">
        <div class="col-12 jumbotron mb-3 team-heading bg-secondary text-white">
            <h1 class="text-center">My Team</h1>
        </div>
        </div>
    </div>
    
    <div class="container">
    <div class="row">
    <div class="row col-12 d-flex justify-content-center">

        <div class="card m-3 col-3 p-0" style="width: 18rem;">
        <div class="card-body m-0 p-0">
        <div class="bg-light m-0 p-2 text-dark">
            <h5 class="card-title">${employees[0].name}</h5>
            <h5 class="card-subtitle mb-2"><i class="fas fa-mug-hot"></i> Manager</h5>
        </div>
        
        <div class="p-3 bg-light">
            <ul class="list-group">
                <li class="list-group-item">
                    ID: ${employees[0].id}
                </li>
                <li class="list-group-item">
                    Email: <a href="mailto:${employees[0].email}">${employees[0].email}</a>
                </li>
                <li class="list-group-item">
                    Office Number: ${employees[0].officeNumber}
                </li>
            </ul>
        </div>
        </div>
        </div>
    </div>

    <div class="card m-3 col-3 p-0" style="width: 18rem;">
        <div class="card-body m-0 p-0">
        <div class="bg-light m-0 p-2 text-dark">
            <h5 class="card-title">${employees[1].name}</h5>
            <h5 class="card-subtitle mb-2"><i class="fas fa-glasses"></i> Engineer</h5>
        </div>

            <div class="p-3 bg-light">
                <ul class="list-group">
                    <li class="list-group-item">
                        ID: ${employees[1].id}
                    </li>
                    <li class="list-group-item">
                        Email: <a href="mailto:${employees[1].email}">${employees[1].email}</a>
                    </li>
                    <li class="list-group-item">
                        GitHub: <a href="https://www.github.com/${employees[1].github}">${employees[1].github}</a>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    
    <div class="card m-3 col-3 p-0" style="width: 18rem;">
        <div class="card-body m-0 p-0">
        <div class="bg-light m-0 p-2 text-dark">
            <h5 class="card-title">${employees[2].name}</h5>
            <h5 class="card-subtitle mb-2"><i class="fas fa-user-graduate"></i> Intern</h5>
        </div>
            
            <div class="p-3 bg-light">
                <ul class="list-group">
                    <li class="list-group-item">
                        ID: ${employees[2].id}
                    </li>
                    <li class="list-group-item">
                        Email: <a href="mailto:${employees[2].email}">${employees[2].email}</a>
                    </li>
                    <li class="list-group-item">
                        School: ${employees[2].school}
                    </li>
                </ul>
            </div>
            </div>
        </div>
    </div>
    </div>  
</main>
    
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</body>
</html>
    `;
};
module.exports = generateSite;

  
    

