import '../css/interests.css';
import { ImageDisplay } from "../components/ImageDisplay";
import designs from '../models/designs.json';

const Interests = () => {
    return (
        <main id="int-main">
            <h2 className="main-head">Interests</h2>
            <p>
                Outside of computer science, I also enjoy drawing, both traditional art and digital art.
                Because graphic design is a hobby of mine, I have designed flyers and booklet covers for a church, as shown below. 
                Web development is a combination of things that I have an interest in, which is why I feel like it is a great fit for me.
            </p>
            <ImageDisplay imglist={designs} pagename="interests"/>

            <h2 className="in-page">Book List</h2>
            <p>Reading is another hobby of mine. Sci-fi and mystery are my favorite genres. Here is a list of books I have read recently, and what I thought about them.</p>
            <div id="book-grid">
                <div className="book">
                    <img src="https://www.marthawells.com/Murderbot1.jpg" alt="The book cover of All Systems Red" className="book-cover"></img>
                    <h3><i>The Murderbot Diaries</i> series</h3>
                    <p>by Martha Wells</p>
                    <p>Currently my favorite book series. Murderbot is such a great character, and the way the story is told through its perspective is so unique.</p>
                    <p><b>Rating:</b> ⭐⭐⭐⭐⭐</p>
                </div>

                <div className="book">
                    <img src="https://m.media-amazon.com/images/I/81BAA6IwKEL._SL1500_.jpg" alt="The book cover of What Moves the Dead" className="book-cover"></img>
                    <h3><i>The Sworn Soldier</i> series</h3>
                    <p>by T. Kingfisher</p>
                    <p>I never understood what "cozy horror" was until I read this series. Haunting but oddly comforting at the same time.</p>
                    <p><b>Rating:</b> ⭐⭐⭐</p>
                </div>

                <div className="book">
                    <img src="https://elitistbookreviews.com/wp-content/uploads/2020/03/Gideon-the-Ninth.jpg" alt="The book cover of Gideon the Ninth" className="book-cover"></img>
                    <h3><i>The Locked Tomb</i> series</h3>
                    <p>by Tamsyn Muir</p>
                    <p>Manages to combine sci-fi and fantasy with amazing world-building. Excited for the next book!</p>
                    <p><b>Rating:</b> ⭐⭐⭐⭐</p>
                </div>

                <div className="book">
                    <img src="https://utopia-state-of-mind.com/wp-content/uploads/2020/07/The-Space-Between-Worlds-by-Micaiah-Johnson.jpg" alt="The book cover of The Space Between Worlds" className="book-cover"></img>
                    <h3><i>The Space Between Worlds</i></h3>
                    <p>by Micaiah Johnson</p>
                    <p>Such an original take on the idea of parallel universes and alternate selves.</p>
                    <p><b>Rating:</b> ⭐⭐⭐⭐⭐</p>
                </div>

                <div className="book">
                    <img src="https://media.npr.org/assets/img/2020/07/09/91kikzx6cdl_custom-f0b2be087ea32e8694f07a7984831181275356f9-s1100-c50.jpg" alt="The book cover of Mexican Gothic" className="book-cover"></img>
                    <h3><i>Mexican Gothic</i></h3>
                    <p>by Silvia Moreno-Garcia</p>
                    <p>The creepy atmosphere of this book is unmatched. Had me on the edge of my seat the entire time.</p>
                    <p><b>Rating:</b> ⭐⭐⭐⭐⭐</p>
                </div>

                <div className="book">
                    <img src="https://i1.wp.com/geekylibrary.com/files/2014/03/ancillaryjusticecover2.jpg?fit=948%2C1422" alt="The book cover of Ancillary Justice" className="book-cover"></img>
                    <h3><i>Ancillary Justice</i></h3>
                    <p>by Ann Leckie</p>
                    <p>The book uses its sci-fi setting to the fullest. Definitely want to read the whole series some time.</p>
                    <p><b>Rating:</b> ⭐⭐⭐⭐</p>
                </div>
            </div>
        </main>
    );
}

export default Interests;