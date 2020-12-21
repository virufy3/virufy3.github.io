import React from "react";
import {graphql} from "gatsby";
import Image from "gatsby-background-image";

export default ({data}) => {
    const images = data.allFile.edges;
    const team = data.site.siteMetadata.team;

    return (
        <section class="flex flex-col flex-wrap mb-10 xl:justify-center md:justify-around md:flex-row">
            {
                team.map(teamMember => {
                    const teamMemberPic = images.find(({node: {relativePath}}) => {
                        console.log(teamMember.image, relativePath);
                        return relativePath === teamMember.image;
                    }).node.childImageSharp.fluid;
        
                    return (
                        <div class="flex flex-col items-center mx-10 mb-10 md:w-1/3 lg:w-1/4">
                            <a target="_blank" rel="noreferrer" href={teamMember.linkedin}>
                                <Image className="w-64 h-64 mx-auto my-2 rounded-full overflow-hidden team-icons" fluid={teamMemberPic} alt={teamMember.name} />
                            </a>
                            <h5 class="mt-4 text-xl font-semibold text-gray-200">
                                {teamMember.name}
                            </h5>
                            <h6 class="text-lg text-center">UI Team Lead</h6>
                            <div class="my-2"></div>
                            <p class="w-5/6 text-center">
                                {teamMember.title}
                            </p>
                        </div>
                    );
                })
            }
        </section>
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
                name
                image
                title
              }
            }
        }
    }
`;