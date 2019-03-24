import React from 'react'
import get from 'lodash/get'
import { StaticQuery, graphql } from 'gatsby'

import DictionaryContext from './dictionarycontext'

const query = graphql`
    query dictionaryQuery {
        contentfulDictionary {
            heroText {
                childMarkdownRemark {
                    html
                }
            }

            footerText {
                childMarkdownRemark {
                    html
                }
            }
        }
    }
`

export default ({ children }) => (
    <StaticQuery
        query={query}
        render={data => {
            const dictionary = {
                heroTextHTML: get(
                    data,
                    'contentfulDictionary.heroText.childMarkdownRemark.html'
                ),
                footerTextHTML: get(
                    data,
                    'contentfulDictionary.footerText.childMarkdownRemark.html'
                ),
            }
            return (
                <DictionaryContext.Provider value={dictionary}>
                    {children}
                </DictionaryContext.Provider>
            )
        }}
    />
)
