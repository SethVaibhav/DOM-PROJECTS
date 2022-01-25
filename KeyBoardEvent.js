////Q- Write a script which keeps checking the password being entered. 
            /*It should check if capslock is on or off if its on it should not allow to type and show "caps on" on screen, also it should only allow to type if the shift in 
            pressed down.*/

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <style>
            #pass {
                display: block;
                margin: auto;
                margin-top: 10rem;
                width: 25rem;
                height: 3rem;
            }

            p {
                text-align: center;
                font-size: 3rem;
                display: none;
            }
        </style>
    </head>
    <body>
        <input type="text" id="pass" />
        <p>Caps on!</p>
        <script>
            let inputElem=document.querySelector("input");
            let pElem=document.querySelector("p");
            let shift;

           inputElem.addEventListener("keydown",(e)=>{

           });

          document.documentElement.addEventListener("keydown",(e)=>{
              let key=e.key;
              if(key=="shift") shift=true;
          })

          document.documentElement.addEventListener("keyup",(e)=>{
              let key=e.key;
              if(key=="shift") shift=false;
          })


            
        </script>
    </body>

</html>
