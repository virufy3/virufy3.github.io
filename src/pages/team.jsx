import React from "react";
import {graphql} from "gatsby";
import GatsbyImage from "gatsby-background-image";
import {useIntl} from "gatsby-plugin-intl";

// component for displaying team-member info
const TeamMember = (member) => {
    const {id, image} = member;
    const intl = useIntl();
    const name = intl.formatMessage({id: `team.${id}.name`});

    return (
        <div class="flex flex-col items-center mx-10 mb-10 md:w-1/3 lg:w-1/4">
            <a target="_blank" rel="noreferrer" href={intl.formatMessage({id: `team.${id}.mediaLink`})}>
                <GatsbyImage className="w-64 h-64 mx-auto my-2 rounded-full overflow-hidden team-icons" fluid={image} alt={name} />
            </a>
            <h5 class="mt-4 text-xl font-semibold text-gray-200">
                {name}
            </h5>
            <h6 class="text-lg text-center">{intl.formatMessage({id: `team.${id}.title`})}</h6>
            <div class="my-2"></div>
            <p class="w-5/6 text-center">
                {intl.formatMessage({id: `team.${id}.description`}).split(",,").map(str => <p>{str}</p>)}
            </p>
        </div>
    );
}

const leadership = [
  { id: 'amil', imageName: 'amil.jpg' },
  { id: 'daria', imageName: 'daria.jpg' },
  { id: 'ravel', imageName: 'ravel.jpg' },
  { id: 'bruna', imageName: 'bruna.jpg' },
  { id: 'jonatan', imageName: 'jonatan.jpg' },
  { id: 'xhoana', imageName: 'xhoana.jpg' },
  { id: 'matheus', imageName: 'matheus.jpg' },
  { id: 'sabrina', imageName: 'sabrina.jpg' },
  { id: 'sebastian', imageName: 'sebastian.jpg' },
  { id: 'jason', imageName: 'jason.jpg' }
];

const advisors = [
  { id: 'kara', imageName: 'kara-meister.jpg' },
  { id: 'jure', imageName: 'jure.jpg' },
  { id: 'rafi', imageName: 'rafi.jpg' },
  { id: 'malvika', imageName: 'malvika.jpg' },
  { id: 'nathan', imageName: 'nathan.jpg' },
  { id: 'madhav', imageName: 'madhav.jpg' },
  { id: 'pedro', imageName: 'pedro.jpg' },
  { id: 'tsutomu', imageName: 'ito.jpg' },
  { id: 'taisuke', imageName: 'taisuke.jpg' },
  { id: 'richard', imageName: 'richard.jpg' }
];

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
    }
`;

export default ({data}) => {
    const images = data.allFile.edges;

    return (
        <>
            <div className="wrapper">
                <div class="mb-6 md:mb-20">
                    <h2 class="mb-4 text-4xl font-bold text-center">
                        Leadership
                    </h2>
                </div>
                <section class="flex flex-col flex-wrap mb-10 xl:justify-center md:justify-around md:flex-row">
                    {
                        leadership.map(({id, imageName}) => {
                            const teamMemberPic = images.find(({node: {relativePath}}) => {
                                return relativePath === imageName;
                            }).node.childImageSharp.fluid;

                            return <TeamMember image={teamMemberPic} id={id}/>
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
                        advisors.map(({id, imageName}) => {
                            const teamMemberPic = images.find(({node: {relativePath}}) => {
                                return relativePath === imageName;
                            }).node.childImageSharp.fluid;

                            return <TeamMember image={teamMemberPic} id={id}/>
                        })
                    }
                </section>
            </div>
        </>
    );
}