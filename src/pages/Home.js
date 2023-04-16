//creating a function to return the view that we need
const Home = () => {
    //base template
    const view = `
    <div class='Characters'>
        <article class='Character-item'>
            <a href="#/1/">
                <img src= "image" alt="name">
                <h2>Name</h2>
            </a>
        </article>
    </div>
    `;
    return view;
}

export default Home;