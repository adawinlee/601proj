import React from "react";

export class BookList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {list: props.data};
    }

    render() {
        const e = this.state.list;
        console.log(e);
        return(
            <div id="book-grid">
            {
                e.map( obj => (
                    <div key={obj.id} className="book">
                        <img 
                            src={obj.image} 
                            alt={"Book cover of " + obj.cover + "."} 
                            className="book-cover">
                        </img>
                        <h3><i>{obj.title}</i> {obj.series}</h3>
                        <p>by {obj.author}</p>
                        <p>{obj.review}</p>
                        <p><b>Rating:</b> {obj.rating}</p>
                    </div>
                ))
            }
            </div>
        );
    }
}