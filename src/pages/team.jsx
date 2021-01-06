import React from "react";
import {graphql} from "gatsby";
import GatsbyImage from "gatsby-background-image";
import {useIntl} from "gatsby-plugin-intl";
import SEO from "../components/SEO";
import Layout from "../components/Layout";

// component for displaying team-member info
const TeamMember = (member) => {
    const {id, image} = member;
    const intl = useIntl();
    const name = intl.formatMessage({id: `team.${id}.name`});

    return (
        <div className="flex flex-col items-center mx-10 mb-10 md:w-1/3 lg:w-1/4">
            <a target="_blank" rel="noreferrer" href={intl.formatMessage({id: `team.${id}.mediaLink`})}>
                <GatsbyImage className="w-64 h-64 mx-auto my-2 rounded-full overflow-hidden team-icons" fluid={image} alt={name} />
            </a>
            <h5 className="mt-4 text-xl font-semibold text-gray-200">
                {name}
            </h5>
            <h6 className="text-lg text-center">{intl.formatMessage({id: `team.${id}.title`})}</h6>
            <div className="my-2"></div>
            {intl.formatMessage({id: `team.${id}.description`}).split("\n").map((str,i) => <p key={i} className="w-5/6 text-center">{str}</p>)}
        </div>
    );
}

const leadership = [
  { id: 'amil', imageName: 'amil.jpg' },
  { id: 'gunvant', imageName: 'gunvant.jpg' },
  { id: 'daria', imageName: 'daria.jpg' },
  { id: 'ravel', imageName: 'ravel.jpg' },
  { id: 'bruna', imageName: 'bruna.jpg' },
  { id: 'jonatan', imageName: 'jonatan.jpg' },
  { id: 'xhoana', imageName: 'xhoana.jpg' },
  { id: 'matheus', imageName: 'matheus.jpg' },
  { id: 'sabrina', imageName: 'sabrina.jpg' },
  { id: 'sebastian', imageName: 'sebastian.jpg' },
  { id: 'jason', imageName: 'jason.jpg' },
  
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
    const intl = useIntl();

    return (
        <Layout>
            <SEO title="Team | Virufy"/>
            <div className="wrapper">
                <div className="mb-6 md:mb-20">
                    <h2 className="mb-4 text-4xl font-bold text-center">
                        {intl.formatMessage({id: "team.headers.leadership"})}
                    </h2>
                </div>
                <section className="flex flex-col flex-wrap mb-10 xl:justify-center md:justify-around md:flex-row">
                    {
                        leadership.map(({id, imageName}) => {
                            const teamMemberPic = images.find(({node: {relativePath}}) => {
                                return relativePath === imageName;
                            }).node.childImageSharp.fluid;

                            return <TeamMember key={`${leadership}${id}`} image={teamMemberPic} id={`leadership.${id}`}/>
                        })
                    }
                </section>
            </div>
            <div className="wrapper md:mt-12">
                <div className="mb-6 md:mb-16">
                    <h2 className="mb-4 text-4xl font-bold text-center">
                        {intl.formatMessage({id: "team.headers.advisors"})}
                    </h2>
                </div>
                <section className="flex flex-col flex-wrap mb-10 xl:justify-center md:justify-around md:flex-row">
                {
                        advisors.map(({id, imageName}) => {
                            const teamMemberPic = images.find(({node: {relativePath}}) => {
                                return relativePath === imageName;
                            }).node.childImageSharp.fluid;

                            return <TeamMember key={`${advisors}${id}`} image={teamMemberPic} id={`advisors.${id}`}/>
                        })
                    }
                </section>
            </div>
        </Layout>
    );
}