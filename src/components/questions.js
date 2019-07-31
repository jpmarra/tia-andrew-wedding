import React, { useContext } from 'react'
import styled from 'styled-components'

import DictionaryContext from '../dictionarycontext'
import QuestionComponent from './question'

const questions = () => {
    const dictionary = useContext(DictionaryContext)

    const StyledQuestions = styled.div`
        display: flex;
        flex-flow: column;
        width: 75%;
        border-top: 1px solid;
        border-color: ${props => props.theme.maroon};

        @media (max-width: 920px) {
            width: 100%;
        }
    `

    return (
        <StyledQuestions>
            {dictionary.questions.map((edge, idx) => {
                const isOpen = idx === 0
                return (
                    <QuestionComponent
                        isOpen={isOpen}
                        question={edge.node.question}
                        answer={edge.node.answer}
                    />
                )
            })}
        </StyledQuestions>
    )
}

export default questions
