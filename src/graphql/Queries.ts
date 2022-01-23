import { gql } from "@apollo/client";

export const JOBS = gql`
  query GetJobs {
    jobs {
      slug
      title
      id
      company {
        name
        slug
        logoUrl
      }
      cities {
        name
        id
      }
      countries {
        name
      }
      remotes {
        type
      }
    }
  }
`
export const GETAJOB=gql`
query getJob($input : JobInput!) {
  job(input:$input){
   id
    title
    description
    applyUrl
    company{
      logoUrl
      name
    }
  }
}
`