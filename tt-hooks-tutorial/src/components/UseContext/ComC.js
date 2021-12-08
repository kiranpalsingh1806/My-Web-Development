import React, {useContext} from 'react';
import { BioData } from './ComA';

const ComC = ({name}) => {
    const myName = useContext(BioData);
    return <h1> Hello {myName} in CompC</h1>
}

export default ComC;

