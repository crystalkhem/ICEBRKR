import { useState } from 'react'
// import { BrowserRouter as Router, Link } from 'react-router-dom'
const Home = () => {

    // const checkboxes = document.querySelectorAll('.checkbox')

    // const handleCheckbox = event => {
    //     console.log(event.target.value)
    //      console.log('this is all of them:' + checkboxes)
        
    // }

    const [cats, updateCats] = useState([])

    const  onClick = (event) => {
        if (event.target.checked) {
        updateCats([...cats, event.target.value])
        } else if (!event.target.checked && cats.length === 1) {
            updateCats([])
        } else if (!event.target.checked) {
            updateCats([cats.splice(cats.indexOf(event.target.value))])
        }
    }


    return (
        <div className="categories">
            <h2>categories</h2>
            <div className="checkbox">music<input type="checkbox" onChange={onClick} name="layerone" value="music" /><br /></div>
            
            <div className="checkbox">sports<input type="checkbox" onChange={onClick} name="layerone" value="sports" /><br /></div>
            
            <div className="checkbox">movies<input type="checkbox" onChange={onClick} name="layerone" value="movies" /><br /></div>
            
            <br />
            <br />
            <p><b>categories selected:</b> { cats.join(' ') } </p>


</div>

    )
    }


export default Home