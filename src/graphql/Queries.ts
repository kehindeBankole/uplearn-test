import {
    gql
  } from "@apollo/client";

export const JOBS = gql`
query{
    jobs{
   title
      id
      company{
        name
      }
      cities{
        name
      }
      countries{
      name
      }
      remotes{
       type
      }
    }
  }
  
  
`;
