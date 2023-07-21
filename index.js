
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';


inquirer
    .prompt([
        {
            message:"Type your url:",
            name:"URL",
        },
        
    ])
    .then((answer)=>{
        const url = answer.URL;  

        var qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream("qr.png"));
        // console.log(answer.URL);
    })
    .catch((error) => {
            if (error.isTtyError) {
              // Prompt couldn't be rendered in the current environment
            } else {
              // Something else went wrong
            }
    });