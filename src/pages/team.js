import React from "react";
import {graphql} from "gatsby";
import GatsbyImage from "gatsby-background-image";

// component for displaying team-member info

const TeamMember = ({data, image}) => {
    return (
        <div class="flex flex-col items-center mx-10 mb-10 md:w-1/3 lg:w-1/4">
            <a target="_blank" rel="noreferrer" href={data.linkedin}>
                <GatsbyImage className="w-64 h-64 mx-auto my-2 rounded-full overflow-hidden team-icons" fluid={image} alt={data.name} />
            </a>
            <h5 class="mt-4 text-xl font-semibold text-gray-200">
                {data.name}
            </h5>
            <h6 class="text-lg text-center">{data.title}</h6>
            <div class="my-2"></div>
            <p class="w-5/6 text-center">
                {data.description.map(str => <p>{str}</p>)}
            </p>
        </div>
    );
}

export default ({data}) => {
    const images = data.allFile.edges;
    const leadership = data.site.siteMetadata.team.leadership;
    const advisors = data.site.siteMetadata.team.advisors;

    return (
        <>
            <div class="wrapper">
                <div class="mb-6 md:mb-20">
                    <h2 class="mb-4 text-4xl font-bold text-center">
                        Leadership
                    </h2>
                </div>
                <section class="flex flex-col flex-wrap mb-10 xl:justify-center md:justify-around md:flex-row">
                    {
                        leadership.map(teamMember => {
                            const teamMemberPic = images.find(({node: {relativePath}}) => {
                                console.log(teamMember.image, relativePath);
                                return relativePath === teamMember.image;
                            }).node.childImageSharp.fluid;
                
                            return (
                                <TeamMember image={teamMemberPic} data={teamMember}/>
                            );
                        })
                    }
                </section>
            </div>
            <div class="wrapper md:mt-12">
                <div class="mb-6 md:mb-16">
                    <h2 class="mb-4 text-4xl font-bold text-center">
                    Advisors
                    </h2>
                </div>
                <section class="flex flex-col flex-wrap mb-10 xl:justify-center md:justify-around md:flex-row">
                {
                    advisors.map(teamMember => {
                        if(images.find(({node: {relativePath}}) => {
                            return relativePath === teamMember.image;
                        }) === undefined) console.log(teamMember);

                        const teamMemberPic = images.find(({node: {relativePath}}) => {
                            return relativePath === teamMember.image;
                        }).node.childImageSharp.fluid;
            
                        return (
                            <TeamMember image={teamMemberPic} data={teamMember}/>
                        );
                    })
                }
                </section>
            </div>
        </>
    );
}

export const query = graphql`
    {
        allFile(filter: { sourceInstanceName: { eq: "team-images" } }) {
            edges {
                node {
                    relativePath
                    childImageSharp {
                        fluid(maxWidth: 1000, maxHeight: 1000) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
        site {
            siteMetadata {
                team {
                    leadership {
                        name
                        image
                        title
                        description
                    }
                    advisors {
                        name
                        image
                        title
                        description
                    }
                }
            }
        }
    }
`;