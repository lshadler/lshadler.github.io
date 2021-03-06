// eslint-disable-next-line no-unused-vars
import { FluidObject, FixedObject } from 'gatsby-image';

export interface FluidImageQuery {
    data: {
        file: {
            childImageSharp: {
                fluid: FluidObject
            }
        }
    }
}

export interface FixedImageQuery {
    data: {
        file: {
            childImageSharp: {
                fixed: FixedObject
            }
        }
    }
}

export interface BlogPostData {
    fields: {
        slug: string
    },
    frontmatter: {
        title: string,
        date: string
    }
}

export interface GithubRepoInfo {
    description: string,
    homepageUrl: string,
    url: string,
    name: string,
    primaryLanguage: {
        color: string,
        name: string,
    }
}
