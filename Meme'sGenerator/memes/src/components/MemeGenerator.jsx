import React, { Component } from 'react'


class MemeGenerator extends Component {
    constructor() {
        super();
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        };
        this.handleChane = this.handleChane.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)


    }
    handleChane(e) {
        const { name, value } = e.target
        this.setState({ [name]: value })

    }

    handleSubmit(e) {
        e.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMemeImg = this.state.allMemeImgs[randNum].url
        this.setState({
            randomImg: randMemeImg
        })

    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const { memes } = response.data
                this.setState({
                    allMemeImgs: memes
                })
            })
    }
    render() {
        return (
            <div className="meme-section">
                <form className="form-inline" onSubmit={this.handleSubmit}>
                    <div className="form-group mb-2">
                        <input
                            type="text"

                            name="topText"
                            placeholder="Top Text"
                            value={this.state.topText}
                            onChange={this.handleChane}
                        />
                    </div>
                    <div className="form-group mx-sm-3 mb-2">
                        <input
                            type="text"
                            name="bottomText"
                            placeholder="Bottom Text"
                            value={this.state.bottomText}
                            onChange={this.handleChane}
                        />
                    </div>







                    <button className="btn btn-info mb-2">Generate</button>

                </form>

                <div className="meme-box">
                    <img className="meme-img" src={this.state.randomImg} alt="" />
                    <h2 className="top-text">{this.state.topText}</h2>
                    <h2 className="bottom-text">{this.state.bottomText}</h2>
                </div>




            </div>
        );
    }
}

export default MemeGenerator;