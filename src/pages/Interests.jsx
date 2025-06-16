import '../css/interests.css';
import { ImageDisplay } from "../components/ImageDisplay";
import designs from '../models/designs.json';
import { BookList } from '../components/BookList';
import books from '../models/books.json';

const Interests = () => {
    return (
        <main id="int-main">
            <h2 className="main-head">Interests</h2>
            <p>
                Outside of computer science, I also enjoy drawing, both traditional art and digital art. My introduction to art was taking painting lessons as a child, 
                and later on I became interested in animation in cartoons. While I grew out of wanting to become an animator, I still find digital art to be a fun and satisfying hobby.
            </p>
            <p>
                My interest in art extends to graphic design as well. I have designed things like flyers, booklet covers, and posters, as shown below. 
                I feel that web development is a combination of the technical side of computer science and programming, the practicality of user interface design, 
                and the aesthetic side of art, which is why I feel like it is a great fit for me.
            </p>
            <ImageDisplay imglist={designs} pagename="interests"/>

            <h2 className="in-page">Book List</h2>
            <p>Reading is another hobby of mine. Sci-fi and mystery are my favorite genres. Here is a list of books I have read recently, and what I thought about them.</p>
            <BookList data={books}/>
        </main>
    );
}

export default Interests;