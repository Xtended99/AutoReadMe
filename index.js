fs = require( "fs" )
const { promisify } = require("util");
const promisedWriteFile = promisify(fs.writeFile);

inquirer = require( "inquirer" )

let license = "";

process.stdout.write('\033c');

console.log ( "\x1b[36m\x1b[1m" );
console.log ( "\n********************************************************\n" );
console.log ( "    Important Notice:\n\n");
console.log ( "\x1b[0m", "\
     There is a total of 11 questions regarding the contents and build of your readme.\n\n\
      Each answer must neatly fit on to its own line. Cariage returns or line feeds\n\
        are not permitted\n\n\
      Once you press the return key the entered text will be used as the answer\n\
        to the question you just responded to.\n\n\
      You will then be prompted with the next question.\n\n\
      The 12th and final question will ask you to confirm to save your answers to disk\n\
        or to re-run this utility again\n\n\
    ");
    console.log("\x1b[37m\x1b[1m", "Thanks and Enjoy\n\n\
        Angel Sosa\n\n\
    ");
console.log ( "\x1b[36m\x1b[1m" );
console.log ( "\n********************************************************\n" );
console.log ( "\x1b[0m" );

inquirer
  .prompt(
     [
      {
       name: "proceed",
       type: "confirm",
       message: "Would you like to proceed",
      },
      {
       name: "t_itle",
       type: "input",
       message: "The title for your project",
      },
      {
       name: "d_escription",
       type: "input",
       message: "Describe your project",
      },
      {
       name: "i_nstallation",
       type: "input",
       message: "How to install your project",
      },
      {
       name: "u_suage",
       type: "input",
       message: "How to use your app",
      },
      {
       name: "l_icense",
       type: "list",
       message: "Select licensing agreement for your project",
       choices: [ 'BSD', 'GPL', 'LGPL', 'MIT', 'MPL' ],

       filter(val) 
          {
           return val.toLowerCase();
          },
      },
      {
       name: "c_ontribution",
       type: "input",
       message: "Who has contributed to your project",
      },
      {
       name: "t_ests",
       type: "input",
       message: "How are tests initiated on your project",
      },
      {
       name: "q_uestion",
       type: "input",
       message: "Do you have any questions",
      },
      {
       name: "u_ser",
       type: "input",
       message: "What is your GIT hub name",
      },
      {
       name: "e_mail",
       type: "input",
       message: "What is your email address",
      },
      {
       name: "q_uestion2",
       type: "input",
       message: "Do you have any questions",
      },
      {
       name: "r_run",
       type: "input",
       message: "Would like to re-run this tool",
      },
    ]
  )
  .then( ( answer ) => {
    console.log( "\n" 
        + "Title             = " + answer.t_itle + "\n"
        + "Description       = " + answer.d_escription + "\n"
        + "Installation      = " + answer.i_nstallation +"\n"
        + "Usuage            = " + answer.u_suage + "\n"
        + "License agreement = " + answer.l_icense + "\n"
        + "Contributors      = " + answer.c_ontribution + "\n"
        + "Tests             = " + answer.t_ests + "\n"
        + "Questions         = " + answer.q_uestion + "\n"
        + "GIT User Name     = " + answer.u_ser + "\n"
        + "E-Mail address    = " + answer.e_mail + "\n"
        + "Questions2        = " + answer.q_uestion2 + "\n"
        + "R_Run             = " + answer.r_run + "\n"
      );

    console.log( "Answer = " + answer.t_itle )

    try
       {
        let document = "# " + answer.t_itle + "   \n"

       switch( answer.l_icense )
          {
           case "bsd":
             answer.l_icense = "BSD [![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)   \n"
             license = "BSD = Berkeley Source Distribution"
            break;
           case "gpl":
             answer.l_icense = "GPL [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)   \n"
             license = "GPL = General Public License"
            break;
           case "lgpl":
             answer.l_icense = "LGPL [![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)   \n"
             license = "LGPL = GNU Lesser General Public License"
            break;
           case "mit":
             answer.l_icense = "MIT [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)   \n"
             license = "MIT = Massachusetts Institute of Technology"
            break;
           case "mpl":
             answer.l_icense = "Mozilla [![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)   \n"
             license = "MPL = Mozila"
            break;
           default:
          }

        document = document + "#### License Type " +  answer.l_icense + "   \n"
        document = document + "#### Link access to the project page for \"Auto Readme\" [Repository Link](https://github.com/Xtended99/CoffeeOverFlow).   \n"
        document = document + "## Table of Contents                 \n#### [Description](#description-1)  \n"
        document = document + "#### [Installation](#installation-2)   \n#### [Usuage](#usuage-3)  \n"
        document = document + "#### [License](#license-4)   \n#### [Contributions](#contributions-5)  \n"
        document = document + "#### [Tests](#tests-6)   \n#### [Contact Info](#contact-info-7)  \n"
        document = document + "#### [User](#user-8)   \n#### [Email](#email-9)  \n"
        document = document + "#### [GIT Hub Link](#git-hub-link-10)"

        document = document + "\n#### Description 1   \n```   \n\n" + "" + answer.d_escription + "   \n```    "
        document = document + "\n#### Installation 2   \n```   \n\n" + "" + answer.i_nstallation + "   \n```    "
        document = document + "\n#### Usuage 3   \n```   \n\n" + "" + answer.u_suage + "   \n```    "

        document = document + "\n#### License 4   \n```   \n\n" + "" + license + "   \n```    "
        document = document + "\n#### Contribution 5   \n```   \n\n" + "" + answer.c_ontribution + "   \n```    "
        document = document + "\n#### Tests 6   \n```   \n\n" + "" + answer.t_ests + "   \n```    "
        document = document + "\n#### Contact Info 7   \n```   \n\n" + "" + answer.q_uestion2 + "   \n```    "
        document = document + "\n#### User 8   \n```   \n\n" + "" + answer.u_ser + "   \n```    "
        document = document + "\n#### Email 9   \n```   \n\n" + "" + answer.e_mail + "   \n```    "
        document = document + "\n#### GIT Hub Link 10   \n```   \n\n" + "" + answer.q_uestion2 + "   \n```    "

        promisedWriteFile("Readme.md", document );
       }
      catch (error)
         {
          console.error("Any error::", error);
         }
    }
  )




