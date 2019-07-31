import React, { useState } from 'react'
import styled from 'styled-components'

const questionComponent = ({ question, answer, isOpen = false }) => {
    const [open, setOpen] = useState(isOpen)

    const StyledQuestion = styled.div`
        display: flex;
        flex-flow: column;
        padding: 20px 0;
        border-bottom: 1px solid;
        color: ${props => props.theme.maroon};

        .question {
            ${props => props.theme.h3Heading}
            color: ${props => props.theme.maroon};
            display: flex;
            justify-content: space-between;
        }

        .answer {
            padding-top: 10px;
            width: 70%;

            @media (max-width: 920px) {
                width: 100%;
            }
        }

        .expand {
            cursor: pointer;
            border: none;
            background: none;
            color: ${props => props.theme.maroon};
        }
    `

    return (
        <StyledQuestion>
            <div className="question">
                <span>{question}</span>
                <span>
                    <button className="expand" onClick={() => setOpen(!open)}>
                        {open ? '━' : '╋'}
                    </button>
                </span>
            </div>
            {open && (
                <div
                    className="answer"
                    dangerouslySetInnerHTML={{
                        __html: answer.childMarkdownRemark.html,
                    }}
                />
            )}
        </StyledQuestion>
    )
}

export default questionComponent
