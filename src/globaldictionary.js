import React from 'react'
import get from 'lodash/get'
import { StaticQuery, graphql } from 'gatsby'

import DictionaryContext from './dictionarycontext'

const query = graphql`
    query contextQuery {
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

            stayBlurb {
                childMarkdownRemark {
                    html
                }
            }

            airbnbBlurb {
                childMarkdownRemark {
                    html
                }
            }

            travelBlurb {
                childMarkdownRemark {
                    html
                }
            }

            airportBlurb {
                childMarkdownRemark {
                    html
                }
            }

            gettingAroundBlurb {
                childMarkdownRemark {
                    html
                }
            }

            enjoyBlurb {
                childMarkdownRemark {
                    html
                }
            }

            societyHillBlurb {
                childMarkdownRemark {
                    html
                }
            }

            oldCityBlurb {
                childMarkdownRemark {
                    html
                }
            }

            fishtownBlurb {
                childMarkdownRemark {
                    html
                }
            }
        }

        allContentfulHotel {
            edges {
                node {
                    name
                    address
                    description
                    url
                }
            }
        }

        allContentfulQuestion {
            edges {
                node {
                    question
                    answer {
                        childMarkdownRemark {
                            html
                        }
                    }
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
                stayBlurbHTML: get(
                    data,
                    'contentfulDictionary.stayBlurb.childMarkdownRemark.html'
                ),
                travelBlurbHTML: get(
                    data,
                    'contentfulDictionary.travelBlurb.childMarkdownRemark.html'
                ),
                enjoyBlurbHTML: get(
                    data,
                    'contentfulDictionary.enjoyBlurb.childMarkdownRemark.html'
                ),
                airbnbBlurbHTML: get(
                    data,
                    'contentfulDictionary.airbnbBlurb.childMarkdownRemark.html'
                ),
                gettingAroundBlurbHTML: get(
                    data,
                    'contentfulDictionary.gettingAroundBlurb.childMarkdownRemark.html'
                ),
                airportBlurbHTML: get(
                    data,
                    'contentfulDictionary.airportBlurb.childMarkdownRemark.html'
                ),
                societyHillBlurbHTML: get(
                    data,
                    'contentfulDictionary.societyHillBlurb.childMarkdownRemark.html'
                ),
                oldCityBlurbHTML: get(
                    data,
                    'contentfulDictionary.oldCityBlurb.childMarkdownRemark.html'
                ),
                fishtownBlurbHTML: get(
                    data,
                    'contentfulDictionary.fishtownBlurb.childMarkdownRemark.html'
                ),
                hotels: get(data, 'allContentfulHotel.edges'),
                questions: get(data, 'allContentfulQuestion.edges'),
            }
            return (
                <DictionaryContext.Provider value={dictionary}>
                    {children}
                </DictionaryContext.Provider>
            )
        }}
    />
)
