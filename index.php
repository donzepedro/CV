<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/main.css">
    <script src="js/bootstrap.js"></script>
    <script src="js/main.js"></script>

    <title>CV</title>
</head>
<body  style="background-color:rgba(0, 0, 0);" >
    <div class="matrix_text" id="destroy" style="margin-top: 20%; margin-left: 30%;"><h1 id="matrix" style="background: black;"></h1></div>
    <div class="container mt-5" id="maincontetn" style="background-color:rgba(0, 0, 0, 0.5);">
       

        <div class="d-flex flex-row justify-content-center" style="min-height: 280px;">

            <div class="text-center m-3" >
                <h4 class="matrix_text" id="profile_image" ></h4>
                <img  src="face.png" width="150"height="150" class="img-fluid m-auto" alt="Responsive image"; style="background: url(background.gif);">
            </div>
            <div class="personal_data align-self-start m-3">
                <div><h1 class="matrix_text text-center" id="personal_data"></h1></div>
                <div class="d-flex flex-col">
                <div class="text_green" style="min-width: 200px;">
                    <ul>
                        <li id="FullName"></li>
                        <li id="Birthdate"></li>
                        <li id="Nationality"></li>
                        <li id="Sex"></li>
                        <li id="Phone"></li>
                        <li id="Email"></li>
                        <li id="Marital"></li>
                        <li id="Reloc"></li>
                      
                    </ul>
                </div>
                <div class="text_green">
                    <ul>
                        <li id="FIO"></li>
                        <li id="bdval"></li>
                        <li id="Nationality_val"></li>
                        <li id="Sex_val"></li>
                        <li id="Phone_val"></li>
                        <li id="Email_val"></li>
                        <li id="Marital_val"></li>
                        <li id="Reloc_val"></li>
                    
                    </ul>
                </div>
            </div>
            </div>
        </div>  
        <div class="d-flex flex-row">
            <div class="d-flex flex-col block_name">
                <div class="matrix_text" id="Block_name1"></div>
            </div>
            <div class="d-flex flex-col" >
                <div class="text_green" ><ul id="Block_text1" ></ul></div>
            </div>
        </div>   
        <div class="d-flex flex-row">
            <div class="d-flex flex-col block_name">
                <div class="matrix_text" id="Block_name2"></div>
            </div>
            <div class="d-flex flex-col">
                <div class="text_green" ><ul id="Block_text2" ></ul></div>
            </div>
        </div>   
        <div class="d-flex flex-row">
            <div class="d-flex flex-col block_name">
                <div class="matrix_text" id="Block_name3"></div>
            </div>
            <div class="d-flex flex-col">
                <div class="text_green" ><ul id="Block_text3" ></ul></div>
            </div>
        </div>   
        <div class="d-flex flex-row">
            <div class="d-flex flex-col block_name">
                <div class="matrix_text" id="Block_name4"></div>
            </div>
            <div class="d-flex flex-col">
                <div class="text_green" ><ul id="Block_text4" ></ul></div>
            </div>
        </div>   
        <div class="d-flex flex-row">
            <div class="d-flex flex-col block_name">
                <div class="matrix_text" id="Block_name5"></div>
            </div>
            <div class="d-flex flex-col">
                <div class="text_green" ><ul id="Block_text5" ></ul></div>
            </div>
        </div>   
    </div>
</body>
</html>