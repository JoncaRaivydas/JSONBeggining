

//@POST /plants
const form=document.getElementById("tree-form");

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    const plantData={
        name:document.getElementById("create-name").value,
        height:document.getElementById("create-height").value,
        type:document.getElementById("create-type").value,
    };

    fetch("http://localhost:3000/plants", {
        method:"POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(plantData),

    })
    .then((res)=>res.json())
    .then(()=>form.reset());
})


//GET /plants

function fetchTress(){
    fetch("http://localhost:3000/plants").then((res)=>res.json()).then((data)=>{
        console.log(data);
    })
}
fetchTress();