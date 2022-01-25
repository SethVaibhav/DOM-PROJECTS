//Q- to show count down in h1 after user mention time in the input type text.
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      h1 {
        font-size: 15rem;
        margin-top: 5rem;
      }

      div,
      h1 {
        text-align: center;
      }
    </style>
  </head>
  <body>
    <h1>0</h1>
    <div>
      <input type="number" />
      <button>Begin Countdown</button>
    </div>      
    <script>
        // to show count down in h1
    let h1=document.querySelector("h1");
    let input=document.querySelector("input");
    let button=document.querySelector("button");
    button.addEventListener("click",(e)=>{
        let value=input.value;
        if(!value) return;
        h1.innerText=value;
        value--;
        let id=setInterval(()=>{
        if(value<0){
            clearInterval(id);
            return;
        }
        h1.innerText=value;
        value--;    
        },1000);
    })

        </script>
  </body>
</html>
