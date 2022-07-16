
//both query selector and get element by id will bring in the action to JS
//const getResBtn = document.querySelector("#get-res-btn");
const getResBtn = document.getElementById("get-res-btn");



const heading2 = document.querySelector("#heading-2")

const planetURL = `https://swapi.dev/api/planets?search=Alderaan`
console.log(planetURL)
const getResidents = () =>{
    console.log('button clicked')
    axios.get(planetURL).then(res => {
        const { residents } = res.data.results[0]
        console.log(residents)
        for(let i = 0; i < residents.length; i++) {
            console.log(residents[i])
            axios.get(`${residents[i]}`)
            .then((response) => {
                console.log(response.data.name);
                const residentTitle = document.createElement("section");
                residentTitle.innerHTML =`<h2>${response.data.name}</h2>`
                document.body.appendChild(residentTitle)
            }
            )
        }
    }).catch(err => console.log)
}





getResBtn.addEventListener("click", getResidents);