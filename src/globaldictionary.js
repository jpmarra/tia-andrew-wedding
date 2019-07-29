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

            parkingTitle {
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

            storySectionHeader {
                childMarkdownRemark {
                    html
                }
            }

            storySectionBlurb {
                childMarkdownRemark {
                    html
                }
            }

            photosBlurb {
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

            airbnbTitle {
                childMarkdownRemark {
                    html
                }
            }

            staySectionTitle {
                childMarkdownRemark {
                    html
                }
            }

            fishtownTitle {
                childMarkdownRemark {
                    html
                }
            }

            oldCityTitle {
                childMarkdownRemark {
                    html
                }
            }

            societyHillTitle {
                childMarkdownRemark {
                    html
                }
            }

            enjoyTitle {
                childMarkdownRemark {
                    html
                }
            }

            airportTitle {
                childMarkdownRemark {
                    html
                }
            }

            gettingAroundSectionTitle {
                childMarkdownRemark {
                    html
                }
            }

            accommodationsTitle {
                childMarkdownRemark {
                    html
                }
            }

            storyTitle {
                childMarkdownRemark {
                    html
                }
            }

            photosSectionTitle {
                childMarkdownRemark {
                    html
                }
            }

            scheduleTitle {
                childMarkdownRemark {
                    html
                }
            }

            ceremonySectionTitle {
                childMarkdownRemark {
                    html
                }
            }

            venueAddressLine1 {
                childMarkdownRemark {
                    html
                }
            }

            venueAddressLine2 {
                childMarkdownRemark {
                    html
                }
            }

            afterPartyLocation {
                childMarkdownRemark {
                    html
                }
            }

            afterPartyAddress {
                childMarkdownRemark {
                    html
                }
            }

            afterPartyAddressLine2 {
                childMarkdownRemark {
                    html
                }
            }

            scheduleDate {
                childMarkdownRemark {
                    html
                }
            }

            ceremonyInfoLine1 {
                childMarkdownRemark {
                    html
                }
            }

            ceremonyInfoLine2 {
                childMarkdownRemark {
                    html
                }
            }

            afterpartySectionTitle {
                childMarkdownRemark {
                    html
                }
            }

            afterpartyInfoLine1 {
                childMarkdownRemark {
                    html
                }
            }

            faqTitle {
                childMarkdownRemark {
                    html
                }
            }

            thingsToDoTitle {
                childMarkdownRemark {
                    html
                }
            }

            thingsToDoHeader {
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

        allContentfulLinkButton {
            nodes {
                contentful_id
                link
                buttonText
                buttonNumber
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
                parkingTitleHTML: get(
                    data,
                    'contentfulDictionary.parkingTitle.childMarkdownRemark.html'
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
                storySectionHeaderHTML: get(
                    data,
                    'contentfulDictionary.storySectionHeader.childMarkdownRemark.html'
                ),
                storySectionBlurbHTML: get(
                    data,
                    'contentfulDictionary.storySectionBlurb.childMarkdownRemark.html'
                ),
                photosBlurbHTML: get(
                    data,
                    'contentfulDictionary.photosBlurb.childMarkdownRemark.html'
                ),
                accommodationsTitleHTML: get(
                    data,
                    'contentfulDictionary.accommodationsTitle.childMarkdownRemark.html'
                ),
                gettingAroundSectionTitleHTML: get(
                    data,
                    'contentfulDictionary.gettingAroundSectionTitle.childMarkdownRemark.html'
                ),
                airportTitleHTML: get(
                    data,
                    'contentfulDictionary.airportTitle.childMarkdownRemark.html'
                ),
                enjoyTitleHTML: get(
                    data,
                    'contentfulDictionary.enjoyTitle.childMarkdownRemark.html'
                ),
                societyHillTitleHTML: get(
                    data,
                    'contentfulDictionary.societyHillTitle.childMarkdownRemark.html'
                ),
                oldCityTitleHTML: get(
                    data,
                    'contentfulDictionary.oldCityTitle.childMarkdownRemark.html'
                ),
                fishtownTitleHTML: get(
                    data,
                    'contentfulDictionary.fishtownTitle.childMarkdownRemark.html'
                ),
                staySectionTitleHTML: get(
                    data,
                    'contentfulDictionary.staySectionTitle.childMarkdownRemark.html'
                ),
                airbnbTitleHTML: get(
                    data,
                    'contentfulDictionary.airbnbTitle.childMarkdownRemark.html'
                ),
                storyTitleHTML: get(
                    data,
                    'contentfulDictionary.storyTitle.childMarkdownRemark.html'
                ),
                photosSectionTitleHTML: get(
                    data,
                    'contentfulDictionary.photosSectionTitle.childMarkdownRemark.html'
                ),
                scheduleTitleHTML: get(
                    data,
                    'contentfulDictionary.scheduleTitle.childMarkdownRemark.html'
                ),
                ceremonySectionTitleHTML: get(
                    data,
                    'contentfulDictionary.ceremonySectionTitle.childMarkdownRemark.html'
                ),
                venueAddressLine1HTML: get(
                    data,
                    'contentfulDictionary.venueAddressLine1.childMarkdownRemark.html'
                ),
                venueAddressLine2HTML: get(
                    data,
                    'contentfulDictionary.venueAddressLine2.childMarkdownRemark.html'
                ),
                afterPartyAddressLine1HTML: get(
                    data,
                    'contentfulDictionary.afterPartyAddress.childMarkdownRemark.html'
                ),
                afterPartyAddressLine2HTML: get(
                    data,
                    'contentfulDictionary.afterPartyAddressLine2.childMarkdownRemark.html'
                ),
                afterPartyLocationHTML: get(
                    data,
                    'contentfulDictionary.afterPartyLocation.childMarkdownRemark.html'
                ),
                scheduleDateHTML: get(
                    data,
                    'contentfulDictionary.scheduleDate.childMarkdownRemark.html'
                ),
                ceremonyInfoLine1HTML: get(
                    data,
                    'contentfulDictionary.ceremonyInfoLine1.childMarkdownRemark.html'
                ),
                ceremonyInfoLine2HTML: get(
                    data,
                    'contentfulDictionary.ceremonyInfoLine2.childMarkdownRemark.html'
                ),
                afterpartySectionTitleHTML: get(
                    data,
                    'contentfulDictionary.afterpartySectionTitle.childMarkdownRemark.html'
                ),
                afterpartyInfoLine1HTML: get(
                    data,
                    'contentfulDictionary.afterpartyInfoLine1.childMarkdownRemark.html'
                ),
                faqTitleHTML: get(
                    data,
                    'contentfulDictionary.faqTitle.childMarkdownRemark.html'
                ),
                thingsToDoTitleHTML: get(
                    data,
                    'contentfulDictionary.thingsToDoTitle.childMarkdownRemark.html'
                ),
                thingsToDoHeaderHTML: get(
                    data,
                    'contentfulDictionary.thingsToDoHeader.childMarkdownRemark.html'
                ),
                hotels: get(data, 'allContentfulHotel.edges'),
                questions: get(data, 'allContentfulQuestion.edges'),
                buttons: get(data, 'allContentfulLinkButton.nodes'),
                rsvpButton: data.allContentfulLinkButton.nodes.find(
                    button => button.buttonNumber === 1
                ),
                registryButton: data.allContentfulLinkButton.nodes.find(
                    button => button.buttonNumber === 2
                ),
                getDirectionsButton: data.allContentfulLinkButton.nodes.find(
                    button => button.buttonNumber === 3
                ),
                viewMapButton: data.allContentfulLinkButton.nodes.find(
                    button => button.buttonNumber === 4
                ),
                fishtownLink: data.allContentfulLinkButton.nodes.find(
                    button => button.buttonNumber === 5
                ),
                societyHillLink: data.allContentfulLinkButton.nodes.find(
                    button => button.buttonNumber === 6
                ),
                queenVillageLink: data.allContentfulLinkButton.nodes.find(
                    button => button.buttonNumber === 7
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
