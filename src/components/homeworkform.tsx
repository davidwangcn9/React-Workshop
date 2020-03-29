import React from 'react';
import '../assets/form.css'

type Input = {
    title: string
}
type FormData = {
    name: string;
    gender: string;
}

export class HomeworkForm extends React.Component {
    state: FormData = {name: '', gender: 'MALE'};

    constructor(props: Input) {
        super(props);
        // this.setState({title: props.title});
        // this.handleNameChange = this.handleNameChange(this);
        // this.handleGenderChange = this.handleGenderChange(this);
        // this.handleSubmit = this.handleSubmit(this);
    }

    handleNameChange = (event: React.FormEvent<HTMLInputElement>) => {
        this.setState({name: event.currentTarget.value})
    }

    handleGenderChange = (event: React.FormEvent<HTMLSelectElement>) => {
        this.setState({gender: event.currentTarget.value})
    }

    handleSubmit = () => {
        alert("Submitted content \n  Name : " + this.state.name + "\n  gender : " + this.state.gender);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className='form'>
                <div>
                    <h1>HOME WORK</h1>
                    <div>
                        <label>
                            Name:
                            <input type="text" value={this.state.name} onChange={this.handleNameChange}/>
                        </label>
                    </div>
                    <div>
                        <label>
                            Gender:
                            <select value={this.state.gender} onChange={this.handleGenderChange}>
                                <option value="MALE">MALE</option>
                                <option value="FEMALE">FEMALE</option>
                            </select>
                        </label>
                    </div>
                    <div className="submit-button">
                        <input type="submit" value="submit"/>
                    </div>

                </div>
            </form>
        );
    }
}

