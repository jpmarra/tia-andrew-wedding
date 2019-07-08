import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'

const questionComponent = ({ question, answer }) => {
    const [open, setOpen] = useState(false)
    const props = useSpring({
        from: { top: '0%' },
        to: { top: '50%' },
    })

    const StyledQuestion = styled.div`
        display: flex;
        flex-flow: column;
        padding: 1rem 0;
        border-bottom: 1px solid;
        color: ${props => props.theme.maroon};

        .question {
            display: flex;
            justify-content: space-between;
        }

        .expand {
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
                        {open ? 'X' : '+'}
                    </button>
                </span>
            </div>
            {open && (
                <animated.div
                    style={props}
                    dangerouslySetInnerHTML={{
                        __html: answer.childMarkdownRemark.html,
                    }}
                />
            )}
        </StyledQuestion>
    )
}

export default questionComponent
