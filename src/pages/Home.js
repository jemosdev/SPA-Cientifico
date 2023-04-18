import getData from "../utils/getData";

//creating a function to return the view that we need
const Home = async () => {
    const Characters = await getData();
    //base template
    const view = `
    <div class='Characters'>
        ${Characters.results.map(character => `
            <article class='Character-item'>
                <a href="#/${character.id}/">
                    <img src= "${character.image}" alt="${character.name}">
                    <h2>${character.name}</h2>
                </a>
            </article>
        `).join('')}
    </div>
    `;
    return view;
};

export default Home;