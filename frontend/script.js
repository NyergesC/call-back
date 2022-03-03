
function loadEvent () {

    const rootElement= document.getElementById("root")

    rootElement.insertAdjacentHTML("beforeend", `
    <section>
        <form class="container">
            <div class="label">
                <label for="name">Name:</label>
                <input type="text" name="name" id="input1" placeholder="Character's name"> 
                <p id="values-1"></p>
            </div>
            <div class="label">
                <label for="email">E-mail:</label>
                <input type="email" name="email" id="input2" placeholder="E-mail address"> 
                <p id="values-2"></p>
            </div>
            <div class="label">
                <label for="password">Jelszó:</label>
                <input type="password" name="password" id="input3" placeholder="password">                         
                <select id="animals" name="animals">
                    <option value="js">JavaScript</option>
                    <option value="php">PHP</option>
                    <option value="c#">Csharp</option>
                </select>
                <p id="values-3"></p>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    </section>
       `);

   /*  const inputList = document.querySelectorAll('input'); */

    /* for (const input of inputList) {
        input.addEventListener("input", function(event){
            console.log(event.target.value);            
        })
    }  */

    //UGYANEZ MAP-EL:

    const inputList = document.querySelectorAll("input");

    Array.from(inputList).map(function(input){
        input.addEventListener("input", function(event){
            console.log(event.target.value);   
        })      

    })
    //map tombot ad vissza es az az elonye h nem kell utana meg 1 tombot kesziteni amibe belepakolja
    //querySelectorAllnal kell az Array.from-ot hasznalni mert a querySelectorAll igazabol nem array

    const form = rootElement.querySelector("form")

    form.addEventListener("submit", function(e){
        e.preventDefault();
        console.log(e.target);
    })

//CSAK A FORMOK ESETEBEN A GOMBOKNAL NEM CLICK ESEMENY KELL HANEM SUBMIT ESEMENY!!!!!!

//select!!! 

    form.querySelector("select").addEventListener("input", function(e){
        console.log(e.target.value)
    })


}       

     
  window.addEventListener("load", loadEvent)