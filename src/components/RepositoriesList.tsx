import React from 'react'
import {useState} from 'react';
import {useActions} from '../hooks/useActions';
import {useTypedSelector} from '../hooks/useTypedSelector';


const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState('');
    const {searchRepositories} = useActions();
    const state = useTypedSelector((state) => state.repositories);
    console.log(state)

    const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        searchRepositories(term);
    }

    return (
        <div>
            <form onSubmit = {onFormSubmit}>
                <input value = {term} onChange = {event => setTerm(event.target.value)} />
                <button>Search</button>
            </form>
        </div>
    )
}

export default RepositoriesList;