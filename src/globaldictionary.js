import React, { useState, useEffect } from 'react'
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

            ceremonyBlurb {
                childMarkdownRemark {
                    html
                }
            }

            afterpartyBlurb {
                childMarkdownRemark {
                    html
                }
            }

            accommodationsHeader {
                childMarkdownRemark {
                    html
                }
            }

            storyHeader {
                childMarkdownRemark {
                    html
                }
            }

            scheduleHeader {
                childMarkdownRemark {
                    html
                }
            }

            faqHeader {
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
            const [isMobile, setIsMobile] = useState(
                typeof window !== 'undefined' ? window.innerWidth < 920 : true
            )

            useEffect(() => {
                typeof window !== 'undefined' &&
                    window.addEventListener('resize', updateDimensions)
                return () =>
                    typeof window !== 'undefined' &&
                    window.removeEventListener('resize', updateDimensions)
            })
            const updateDimensions = () => {
                if (typeof window !== 'undefined' && window.innerWidth < 920) {
                    setIsMobile(true)
                } else {
                    setIsMobile(false)
                }
            }
            const dictionary = {
                isMobile,
                setIsMobile,
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
                storyHeaderHTML: get(
                    data,
                    'contentfulDictionary.storyHeader.childMarkdownRemark.html'
                ),
                accommodationsHeaderHTML: get(
                    data,
                    'contentfulDictionary.accommodationsHeader.childMarkdownRemark.html'
                ),
                scheduleHeaderHTML: get(
                    data,
                    'contentfulDictionary.scheduleHeader.childMarkdownRemark.html'
                ),
                faqHeaderHTML: get(
                    data,
                    'contentfulDictionary.faqHeader.childMarkdownRemark.html'
                ),
                ceremonyBlurbHTML: get(
                    data,
                    'contentfulDictionary.ceremonyBlurb.childMarkdownRemark.html'
                ),
                afterpartyBlurbHTML: get(
                    data,
                    'contentfulDictionary.afterpartyBlurb.childMarkdownRemark.html'
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
