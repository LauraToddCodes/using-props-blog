import React from "react";
import Selection from "./Selection";

function App() {
    const [ value, setValue ] = React.useState();

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    return (
        <React.Fragment>
            <form onChange={handleChange}>
                <h2>What's the best name for a dog?</h2>
                <div>
                    <input type="radio" id="graham" value="Graham" name="name"/>
                    <label for="Graham">Graham</label>
                </div>
                <div>
                    <input type="radio" id="kenneth" value="Kenneth" name="name"/>
                    <label for="Kenneth">Kenneth</label>
                </div>
                <div>
                    <input type="radio" id="steve" value="Alan" name="name"/>
                    <label for="Alan">Alan</label>
                </div>
            </form>
            <Selection selection={value}/>
        </React.Fragment>
    )
}

export default App;