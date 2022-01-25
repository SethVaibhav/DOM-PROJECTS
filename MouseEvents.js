//Q- The box from where mouse leaves change its boundary to dotted while all should be solid 

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      * {
        box-sizing: border-box;
      }
      body {
        display: flex;
        flex-wrap: wrap;
        padding-top: 5rem;
      }

      .card {
        border: 1px dashed;
        margin: 2rem;
        height: 10rem;
        width: 10rem;
      }

      .solid {
        border: 2px solid !important;
      }
    </style>
  </head>
  <body>
    <div class="card solid"></div>
    <div class="card solid"></div>
    <div class="card solid"></div>
    <div class="card solid"></div>
    <div class="card solid"></div>
    <div class="card solid"></div>
    <div class="card solid"></div>
    <div class="card solid"></div>
    <div class="card solid"></div>
    <div class="card"></div>
    <script>
      let cards = document.querySelectorAll(".card");
        let lastCard;

        for (let i = 0; i < cards.length; i++) {
          cards[i].addEventListener("mouseleave", function (e) {
            lastCard = e.currentTarget;
          });
          cards[i].addEventListener("mouseenter", function (e) {
            if(!lastCard) return;  
            lastCard.classList.remove("solid");

              let cardsCopy = document.querySelectorAll(".card");
              for (let i = 0; i < cardsCopy.length; i++) {
                if (lastCard != cardsCopy[i]) {
                  cardsCopy[i].classList.add("solid");
                }
              }
          });
        }
    </script>
 </body> 
 </html>  
