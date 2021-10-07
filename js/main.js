const mytext = [
    'MATRIX HAS YOU . . .',
    // 'MATRIX HAS YOU . . .\n '
  ];
const captures =[
  // 'MATRIX HAS YOU . . .',
    'PROFILE IMAGE:',
    'PERSONAL DATA:',
    'Full name:',
    'Cherednichenko Fedor Vladimirovich',
    'Birth date:',
    '10.08.1994',
    'Nationality:',
    'Russian',
    'Sex:',
    'Male',
    'Phone:',
    '+7 (929) *** ** **',
    'e-mail:',
    'fyodor***@gmail.com',
    'Marital status:',
    'Engaged',
    'Willing to relocate:',
    'Yes',

    'SPECIALITY:',
    '<li>Automated information processing and control system engineer,</li> <li>Software engineer</li>',
    
    'EDUCATION:',
    '<li>Petrozavodsk State University, Physical and Technology faculty.</li>'+
    '<li>Speciality: Informatics and computer engineering.</li>'+
    '<li>Master degree.</li>'+
    '<li>2017 - 2019.</li>'+
    '<li>-</li>'+
    '<li>Petrozavodsk State University, Physical and Technology faculty.</li>'+
    '<li>Speciality: Informatics and computer engineering.</li>'+
    '<li>Bachelor\'s degree.</li>'+
    '<li>2012 - 2016.</li>',
    
    'EXPIRIENCE:',
    '<li>Atrium Media</li>'+
    '<li>2021-present</li>'+
    '<li>Position: Contractor BackEnd Web Developer.</li>'+
    '<li>-</li>'+
    '<li>Valmet Automation</li>'+
    '<li>2019-2021</li>'+
    '<li>Position: Contractor SoftWare engineer.</li>'+
    '<li>-</li>'+
    '<li>Petrozavodsk State University</li>'+
    '<li>Regional center of new onformation technologies</li>'+
    '<li>2018-2019</li>'+
    '<li>Position: Programmer.</li>'+
    '<li>-</li>'+
    '<li>"Metsa Svir" Fixed-term contract, LLC 2018</li>'+
    '<li>Position: Temporary worker.</li>'+
    '<li>-</li>'+
    '<li>Petrozavodsk State University, Fixed-term contract, LLC 2018</li>'+
    '<li>Position: Engineer.</li>'+
    '<li>-</li>'+
    '<li>"Metsa Svir" Fixed-term contract, LLC 2017</li>'+
    '<li>Position: Temporary worker.</li>'+
    '<li>-</li>'+
    '<li>Compulsory military service</li>'+
    '<li>2016-2017</li>'+
    '<li>Position: Electric-operator, Part-commander</li>'+
    '<li>Rank: Lance sergeant.</li>',

    'SKILLS:',
    '<li>Programming if C/C++, LOGO! Soft Comfort, Pascal, html, css, Javascript, Java, PHP, Bash</li>'+
    '<li>Borland Delphi, MathLab, SciLab, Yii2, Laravel, Zend, OOP</li>'+
    '<li>Development if various IDEs, AuthoCad, PhotoShop, 3D Compas</li>'+
    '<li>DCS Valmet DNA</li>'+
    '<li>Linux, Ubuntu, Ansimble.</li>',

    '<li>ADDITIONAL</li>'+
    '<li>INFORMATION:</li>',
    '<li>Fluent English, Sociable, Punctual, Responsible</li>'+
    '<li>Playing:</li>'+
    '<li>Bascketball, Chess, Table tennis, Board games.</li>'+
    '<li>Reading Fantastic and Fantasy books.</li>'+
    '<li>Riding bicycle, Mauntain climbing</li>',
]
const id = [
  // '#matrix',
  '#profile_image',
  '#personal_data',
  '#FullName',
  '#FIO',
  '#Birthdate',
  '#bdval',
  '#Nationality',
  '#Nationality_val',
  '#Sex',
  '#Sex_val',
  '#Phone',
  '#Phone_val',
  '#Email',
  '#Email_val',
  '#Marital',
  '#Marital_val',
  '#Reloc',
  '#Reloc_val',
  '#Block_name1',
  '#Block_text1',
  '#Block_name2',
  '#Block_text2',
  '#Block_name3',
  '#Block_text3',
  '#Block_name4',
  '#Block_text4',
  '#Block_name5',
  '#Block_text5',
]

    let line = 0;
    let count = 0;
    let captureIdCounter = 0 ;

    let result = '';
    let interval = '';
    flag = false;
    title = false;

    // typeLine(mytext,'#matrix');
    
   
    // typeLine(captures[captureIdCounter],id[captureIdCounter]);
    typeLine(mytext[0],'#matrix',200);
    titleShow('#destroy','#maincontetn')
    // printText();
   

    function printText(){
    let finterval = setTimeout(
      ()=>{
          if(flag){
            captureIdCounter++;
            console.log(flag)
            flag=false;
            console.log(flag)
            typeLine(captures[captureIdCounter],id[captureIdCounter],2);
            if(captureIdCounter == captures.length-1){
              console.log('here')
              clearTimeout(finterval); 
            } else{
              printText()
            }
          }else{
            if(captureIdCounter == 0) typeLine(captures[captureIdCounter],id[captureIdCounter],2);
            printText()
          }
          
      },1000
    )
    }

function titleShow(destroy = null,show=null){
    let check = setTimeout(
        ()=>{
            if(title){
                // console.log(flag)
                if(destroy) document.querySelector(destroy).remove()
                if(show) document.querySelector(show).style.visibility='visible';
                clearTimeout(check);
                printText();
            }else{
                titleShow(destroy,show);
            }
        },1000
    )
}

function typeLine(text,selector,time) {
  interval = setTimeout(
    () => {
      result += text[count]
      document.querySelector(selector).innerHTML =result +'|';
    count++;
    if (count >= text.length) {
      count = 0;
        clearTimeout(interval);
         document.querySelector(selector).innerHTML =result;
         result = '';
         flag = true;
         title = true;
        return true;
    }
    window.scrollBy (0,1000);
    typeLine(text,selector,time);
  }, time)//getRandomInt(getRandomInt(250*2.5)))

}


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
} 

// function typeLine(text,selector) {
//     interval = setTimeout(
        
//       () => {
//         result += text[line][count]
//         document.querySelector(selector).innerHTML =result +'|';


//       count++;
//       if (count >= text[line].length) {
//         count = 0;
//         line++;
//         if (line == text.length) {
//           clearTimeout(interval);
//            document.querySelector(selector).innerHTML =result;
//            line = 0;
//            flag = true;
//           return true;
//         }
//       }
//       typeLine(text,selector);
//     }, getRandomInt(getRandomInt(250*2.5)))
  
//   }


// function getRandomInt(max) {
//     return Math.floor(Math.random() * Math.floor(max));
// } 