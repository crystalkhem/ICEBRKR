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
        } else {
            let elementToRemove = event.target.value
            updateCats(prev => prev.filter(cats => cats !== elementToRemove ))
        }
    }


    return (
        <div className="categories">
            <h2>categories</h2>
            <div className="checkbox">music<input type="checkbox" onChange={(event) => onClick(event)} name="layerone" value="music" /><br /></div>
            
            <div className="checkbox">sports<input type="checkbox" onChange={onClick} name="layerone" value="sports" /><br /></div>
            
            <div className="checkbox">movies<input type="checkbox" onChange={onClick} name="layerone" value="movies" /><br /></div>
            
            <br />
            <br />
            <p><b>categories selected:</b> { cats.join(', ') } </p>


</div>

    )
    }


export default Home