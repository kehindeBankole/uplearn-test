import TestRenderer from "react-test-renderer";
import { MockedProvider } from "@apollo/client/testing";
import { JOBS } from "../../graphql/Queries";
import Home from "./Home";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
const mocks = [];
const jobmocks = [
  {
    request: {
      query: JOBS,
    },
    result: {
      data: {
        jobs: [
          {
            slug: "senior-fullstack-engineer-platform",
            title: "Senior Fullstack Engineer - Platform",
            id: "cjz1ipl9x009a0758hg68h7vy",
            company: {
              name: "Segment",
              slug: "segment",
              logoUrl: null,
            },
            cities: [
              {
                name: "San Francisco",
                id: "cjtu8et7j001a0824jwrtf4d1",
              },
            ],
            countries: [],
            remotes: [],
          },
          {
            slug: "full-stack-javascript-developer",
            title: "Full Stack JavaScript Developer",
            id: "cjwt2a8j700by0793lnvon5c9",
            company: {
              name: "Unrealists",
              slug: "unrealists",
              logoUrl: null,
            },
            cities: [
              {
                name: "Berlin",
                id: "cjuv51m3s00fc0735xosrvscp",
              },
            ],
            countries: [],
            remotes: [
              {
                type: "remote",
              },
            ],
          },
          {
            slug: "ad01d326-5a60-48c8-8978-e14e67d361cd",
            title: "Senior Software Engineer, API Development",
            id: "cjw1yogu0007j079339al4zyu",
            company: {
              name: "DeepCrawl",
              slug: "deepcrawl",
              logoUrl: "",
            },
            cities: [
              {
                name: "London",
                id: "cjuvb18ta016k0735v17ip42k",
              },
            ],
            countries: [],
            remotes: [],
          },
          {
            slug: "experienced-backend-engineer-go",
            title: "Experienced Backend Engineer - Go",
            id: "cjwqsa7wj007d0778obv0dfs9",
            company: {
              name: "Theorem",
              slug: "theorem",
              logoUrl: null,
            },
            cities: [],
            countries: [],
            remotes: [
              {
                type: "remote",
              },
            ],
          },
          {
            slug: "senior-software-engineer-frontend",
            title: "Senior Software Engineer - Frontend",
            id: "cjwnlolmk03hm0756mmvkw5d2",
            company: {
              name: "Close",
              slug: "close",
              logoUrl: "",
            },
            cities: [],
            countries: [],
            remotes: [
              {
                type: "remote",
              },
            ],
          },
          {
            slug: "senior-software-engineer-backend",
            title: "Senior Software Engineer - Backend",
            id: "cjwnlegxb03dv0756ysmiqd0y",
            company: {
              name: "Close",
              slug: "close",
              logoUrl: "",
            },
            cities: [],
            countries: [],
            remotes: [
              {
                type: "remote",
              },
            ],
          },
          {
            slug: "full-stack-javascript-developer",
            title: "Full Stack Javascript Developer",
            id: "cjwnkzzh003bh0756hc34rui5",
            company: {
              name: "AddJust",
              slug: "addjust",
              logoUrl:
                "https://cdn.filestackcontent.com/ARVNFDkIFTCy2nOXvYSoLz/output=secure:true/security=policy:eyJleHBpcnkiOiAxNTYwMDA1ODc3LCAiY2FsbCI6IFsicmVhZCIsICJzdGF0IiwgImNvbnZlcnQiLCAicGljayIsICJzdG9yZSJdfQ==,signature:785f90b4223269777911185d2416e87cae7cf7364883b028d282f088046c1cf9/PJD7vCBRDO0sbiLs0vIQ",
            },
            cities: [],
            countries: [],
            remotes: [
              {
                type: "remote",
              },
            ],
          },
          {
            slug: "deep-learning-engineer",
            title: "Deep Learning Engineer",
            id: "cjvnpsy2900ed0704atnvb6r9",
            company: {
              name: "Stockwell",
              slug: "stockwell",
              logoUrl: null,
            },
            cities: [
              {
                name: "Oakland",
                id: "cjvnpmp5800bv0704i74n3rbo",
              },
            ],
            countries: [],
            remotes: [],
          },
          {
            slug: "full-stack-engineer",
            title: "Full Stack Engineer",
            id: "cjvnpnno700c90704rfmmyce4",
            company: {
              name: "Stockwell",
              slug: "stockwell",
              logoUrl: null,
            },
            cities: [
              {
                name: "Oakland",
                id: "cjvnpmp5800bv0704i74n3rbo",
              },
            ],
            countries: [],
            remotes: [],
          },
          {
            slug: "react-developer",
            title: "React Developer",
            id: "cjvnp9t44009y0704sqv10qg9",
            company: {
              name: "MojoTech",
              slug: "mojotech",
              logoUrl: null,
            },
            cities: [
              {
                name: "Boulder",
                id: "cjvnp5yo2008w0704wbma6zif",
              },
              {
                name: "Providence",
                id: "cjvnp7dn100970704lrhtlj1r",
              },
            ],
            countries: [],
            remotes: [],
          },
          {
            slug: "ios-engineer",
            title: "iOS Engineer",
            id: "cjvjww28x00e80715lcroye4a",
            company: {
              name: "Kittyhawk",
              slug: "kittyhawk",
              logoUrl: null,
            },
            cities: [
              {
                name: "San Francisco",
                id: "cjtu8et7j001a0824jwrtf4d1",
              },
            ],
            countries: [],
            remotes: [],
          },
          {
            slug: "android-engineer",
            title: "Android Engineer",
            id: "cjvjwr8tk00db071512tp2sms",
            company: {
              name: "Kittyhawk",
              slug: "kittyhawk",
              logoUrl: null,
            },
            cities: [
              {
                name: "San Francisco",
                id: "cjtu8et7j001a0824jwrtf4d1",
              },
            ],
            countries: [],
            remotes: [],
          },
          {
            slug: "senior-frontend-engineer",
            title: "Senior Frontend Engineer",
            id: "cjvjwo9a400ca07154gm6uv0t",
            company: {
              name: "Kittyhawk",
              slug: "kittyhawk",
              logoUrl: null,
            },
            cities: [
              {
                name: "San Francisco",
                id: "cjtu8et7j001a0824jwrtf4d1",
              },
            ],
            countries: [],
            remotes: [],
          },
          {
            slug: "react-focused-fullstack-developer",
            title: "React Focused Fullstack Developer",
            id: "cjvjw5ajp00ag0715p073feg9",
            company: {
              name: "Catapult",
              slug: "catapult",
              logoUrl: null,
            },
            cities: [
              {
                name: "London",
                id: "cjuvb18ta016k0735v17ip42k",
              },
            ],
            countries: [],
            remotes: [
              {
                type: "remote",
              },
            ],
          },
          {
            slug: "software-developer-intern",
            title: "Software Developer Intern",
            id: "cjvh36efu005z0779beju4usa",
            company: {
              name: "Blender Bottle",
              slug: "blender-bottle",
              logoUrl: null,
            },
            cities: [
              {
                name: "Lehi",
                id: "cjvh357b5005l0779uu9ng51c",
              },
            ],
            countries: [],
            remotes: [],
          },
          {
            slug: "react-frontend-developer",
            title: "React Frontend Developer",
            id: "cjvh20vy5002g07793ef6iakc",
            company: {
              name: "Taikai",
              slug: "taikai",
              logoUrl: null,
            },
            cities: [
              {
                name: "Porto",
                id: "cjvh1zp9j002207793gyrdfju",
              },
            ],
            countries: [],
            remotes: [
              {
                type: "remote",
              },
            ],
          },
          {
            slug: "senior-software-engineer-backend-development",
            title: "Senior Software Engineer, Backend Development",
            id: "cjvdrajj400eg0758lnb8o9m1",
            company: {
              name: "Appier",
              slug: "appier",
              logoUrl: null,
            },
            cities: [
              {
                name: "Taipei",
                id: "cjvdn6s7z008907588eggynk4",
              },
            ],
            countries: [],
            remotes: [],
          },
          {
            slug: "software-engineer-backend-developer",
            title: "Software Engineer, Backend Development",
            id: "cjvdnrig800am0758ntclpnyl",
            company: {
              name: "Appier",
              slug: "appier",
              logoUrl: null,
            },
            cities: [
              {
                name: "Taipei",
                id: "cjvdn6s7z008907588eggynk4",
              },
            ],
            countries: [],
            remotes: [],
          },
          {
            slug: "software-engineer-frontend-development",
            title: "Software Engineer, Frontend Development",
            id: "cjvdn99pb008q07581kq5ksfz",
            company: {
              name: "Appier",
              slug: "appier",
              logoUrl: null,
            },
            cities: [
              {
                name: "Taipei",
                id: "cjvdn6s7z008907588eggynk4",
              },
            ],
            countries: [],
            remotes: [],
          },
          {
            slug: "backend-typescript-javascript-developer",
            title: "Backend Typescript / Javascript Developer",
            id: "cjvdmahxd004w0758atpe4xr0",
            company: {
              name: "Inside Labs",
              slug: "inside-labs",
              logoUrl: "https://cdn.filestackcontent.com/rYt3IGn4RyWiXy2Mjf6I",
            },
            cities: [],
            countries: [],
            remotes: [
              {
                type: "remote",
              },
            ],
          },
          {
            slug: "intermediate-java-developer-with-graphql",
            title: "Intermediate Java Developer With GraphQL",
            id: "cjv804s6q011j0791px9b545d",
            company: {
              name: "4th Source",
              slug: "4th-source",
              logoUrl: null,
            },
            cities: [
              {
                name: "Mexico City",
                id: "cjv801ofa010607911951biy8",
              },
              {
                name: "Colima",
                id: "cjv8021pw010h0791mphcmf0m",
              },
              {
                name: "Merida",
                id: "cjv802h3c010r0791onqdglsz",
              },
            ],
            countries: [],
            remotes: [],
          },
          {
            slug: "regular-front-end-developer",
            title: "Regular Front-end Developer",
            id: "cjv7zjznd00x00791gn6tygze",
            company: {
              name: "Mirumee",
              slug: "mirumee",
              logoUrl: null,
            },
            cities: [
              {
                name: "Wrocław",
                id: "cjv7zdbdk00v30791e92j64yz",
              },
            ],
            countries: [],
            remotes: [],
          },
          {
            slug: "senior-front-end-developer",
            title: "Senior Front-end Developer",
            id: "cjv7zfpu500vt0791vxx1h4p9",
            company: {
              name: "Mirumee",
              slug: "mirumee",
              logoUrl: null,
            },
            cities: [
              {
                name: "Wrocław",
                id: "cjv7zdbdk00v30791e92j64yz",
              },
            ],
            countries: [],
            remotes: [],
          },
          {
            slug: "frontend-developer",
            title: "Frontend Developer",
            id: "cjv23vj27019o0733yppqvbh5",
            company: {
              name: "Crystallize",
              slug: "crystallize",
              logoUrl: null,
            },
            cities: [
              {
                name: "Skien",
                id: "cjv23q1qe017c07336cc8txg9",
              },
            ],
            countries: [],
            remotes: [],
          },
          {
            slug: "senior-backend-node-js-developer",
            title: "(Senior) Backend Node.js Developer (m/f/d)",
            id: "cjv78ogff00hk07400ax7q2zr",
            company: {
              name: "EverEstate",
              slug: "everestate",
              logoUrl: null,
            },
            cities: [
              {
                name: "Berlin",
                id: "cjuv51m3s00fc0735xosrvscp",
              },
            ],
            countries: [],
            remotes: [],
          },
          {
            slug: "senior-frontend-react-js-developer",
            title: "(Senior) Frontend React.js Developer (m/f/d)",
            id: "cjv78llmr00gg0740rf5hcvhz",
            company: {
              name: "EverEstate",
              slug: "everestate",
              logoUrl: null,
            },
            cities: [
              {
                name: "Berlin",
                id: "cjuv51m3s00fc0735xosrvscp",
              },
            ],
            countries: [],
            remotes: [],
          },
          {
            slug: "senior-fullstack-javascript-developer",
            title: "Senior Fullstack JavaScript Developer (m/f/d)",
            id: "cjv78iepl00fh0740u2k4lvle",
            company: {
              name: "EverEstate",
              slug: "everestate",
              logoUrl: null,
            },
            cities: [
              {
                name: "Berlin",
                id: "cjuv51m3s00fc0735xosrvscp",
              },
            ],
            countries: [],
            remotes: [],
          },
          {
            slug: "experienced-javascript-react-developer",
            title: "Experienced Javascript/React developer",
            id: "cjv7841pq00cu0740wlawuohj",
            company: {
              name: "Digital Warehouse, YouSee",
              slug: "digital-warehouse-yousee",
              logoUrl: null,
            },
            cities: [
              {
                name: "Copenhagen",
                id: "cjv7831n500cf0740iqernne0",
              },
            ],
            countries: [],
            remotes: [],
          },
          {
            slug: "api-developer-rails-graphql",
            title: "API Developer (Rails / GraphQL)",
            id: "cjv5bhu5z00wh0779xrse54zk",
            company: {
              name: "GoCo",
              slug: "goco",
              logoUrl: "https://cdn.filestackcontent.com/StB7gpC9TVCMznoIljCc",
            },
            cities: [
              {
                name: "Houston",
                id: "cjv771hzq005t07402cxxz4bc",
              },
            ],
            countries: [],
            remotes: [],
          },
          {
            slug: "ios-engineer",
            title: "iOS Engineer",
            id: "cjv59hfll00sf0779n80kyy4c",
            company: {
              name: "Glossier",
              slug: "glossier",
              logoUrl: "https://cdn.filestackcontent.com/77GjWRdSQTqc1ItrbxFE",
            },
            cities: [
              {
                name: "New York",
                id: "cjuvfhu5j02jb0735aodq6u2q",
              },
            ],
            countries: [],
            remotes: [],
          },
          {
            slug: "engineering-manager",
            title: "Engineering Manager",
            id: "cjv59o77y00tj0779fpdq125e",
            company: {
              name: "Glossier",
              slug: "glossier",
              logoUrl: "https://cdn.filestackcontent.com/77GjWRdSQTqc1ItrbxFE",
            },
            cities: [
              {
                name: "New York",
                id: "cjuvfhu5j02jb0735aodq6u2q",
              },
            ],
            countries: [],
            remotes: [],
          },
          {
            slug: "senior-engineer",
            title: "Senior Engineer",
            id: "cjv597dki00qw0779ypz51map",
            company: {
              name: "Glossier",
              slug: "glossier",
              logoUrl: "https://cdn.filestackcontent.com/77GjWRdSQTqc1ItrbxFE",
            },
            cities: [
              {
                name: "New York",
                id: "cjuvfhu5j02jb0735aodq6u2q",
              },
            ],
            countries: [],
            remotes: [],
          },
          {
            slug: "software-engineer",
            title: "Software Engineer",
            id: "cjv2g9l3x02c407335pzjxzsp",
            company: {
              name: "New Story",
              slug: "new-story",
              logoUrl: null,
            },
            cities: [
              {
                name: "Atlanta",
                id: "cjv2g3nwu02b10733j2tcgc7n",
              },
            ],
            countries: [],
            remotes: [],
          },
          {
            slug: "senior-site-reliability-engineer",
            title: "Senior Site Reliability Engineer",
            id: "cjv58vzdf00oa07794cx8qs9e",
            company: {
              name: "Glossier",
              slug: "glossier",
              logoUrl: "https://cdn.filestackcontent.com/77GjWRdSQTqc1ItrbxFE",
            },
            cities: [
              {
                name: "New York",
                id: "cjuvfhu5j02jb0735aodq6u2q",
              },
            ],
            countries: [],
            remotes: [],
          },
          {
            slug: "front-end-intern",
            title: "Front-End Intern",
            id: "cjv5221wu002e07799eyxyzle",
            company: {
              name: "1stdibs",
              slug: "1stdibs",
              logoUrl: "https://cdn.filestackcontent.com/pk9hUSICSmmoovwL0cTG",
            },
            cities: [
              {
                name: "New York",
                id: "cjuvfhu5j02jb0735aodq6u2q",
              },
            ],
            countries: [],
            remotes: [],
          },
          {
            slug: "experienced-front-end-engineer",
            title: "Experienced Front-end Engineer",
            id: "cjv48i0c102yd07279vvrteha",
            company: {
              name: "Saagie",
              slug: "saagie",
              logoUrl: null,
            },
            cities: [
              {
                name: "Rouen",
                id: "cjv48esx902xp0727w7jx5wum",
              },
            ],
            countries: [],
            remotes: [
              {
                type: "remote",
              },
            ],
          },
          {
            slug: "senior-software-developer",
            title: "Senior Software Developer",
            id: "cjv3yh41501bi07277e6fa0fr",
            company: {
              name: "Jupiter",
              slug: "jupiter",
              logoUrl: "",
            },
            cities: [
              {
                name: "Toronto",
                id: "cjuvem1eu02bg0735scbh2o5v",
              },
            ],
            countries: [],
            remotes: [
              {
                type: "remote",
              },
            ],
          },
          {
            slug: "software-developer",
            title: "Software Developer",
            id: "cjv3u1l9m00n307276hnclkqc",
            company: {
              name: "Jupiter",
              slug: "jupiter",
              logoUrl: "",
            },
            cities: [
              {
                name: "Toronto",
                id: "cjuvem1eu02bg0735scbh2o5v",
              },
            ],
            countries: [],
            remotes: [
              {
                type: "remote",
              },
            ],
          },
          {
            slug: "senior-product-engineer",
            title: "Senior Product Engineer",
            id: "cjv2rpmj105fg07338femtt06",
            company: {
              name: "Amplitude",
              slug: "amplitude",
              logoUrl: null,
            },
            cities: [
              {
                name: "San Francisco",
                id: "cjtu8et7j001a0824jwrtf4d1",
              },
            ],
            countries: [],
            remotes: [],
          },
          {
            slug: "senior-growth-engineer",
            title: "Senior Growth Engineer",
            id: "cjv2qu4sl05b707331hnug02o",
            company: {
              name: "Amplitude",
              slug: "amplitude",
              logoUrl: null,
            },
            cities: [
              {
                name: "San Francisco",
                id: "cjtu8et7j001a0824jwrtf4d1",
              },
            ],
            countries: [],
            remotes: [],
          },
          {
            slug: "senior-ios-engineer",
            title: "Senior iOS Engineer",
            id: "cjv2llal1056y0733zh8pjsrw",
            company: {
              name: "Cheddar",
              slug: "cheddar",
              logoUrl: null,
            },
            cities: [
              {
                name: "New York",
                id: "cjuvfhu5j02jb0735aodq6u2q",
              },
            ],
            countries: [],
            remotes: [],
          },
          {
            slug: "backend-engineer",
            title: "Backend Engineer",
            id: "cjv2j18jd03rd07339frvy4rs",
            company: {
              name: "StackShare",
              slug: "stackshare",
              logoUrl: null,
            },
            cities: [
              {
                name: "San Francisco",
                id: "cjtu8et7j001a0824jwrtf4d1",
              },
            ],
            countries: [],
            remotes: [],
          },
          {
            slug: "unicorn-designer-developer",
            title: "Unicorn Designer Developer",
            id: "cjv24092m01bb07331fguypk3",
            company: {
              name: "Crystallize",
              slug: "crystallize",
              logoUrl: null,
            },
            cities: [
              {
                name: "Skien",
                id: "cjv23q1qe017c07336cc8txg9",
              },
            ],
            countries: [],
            remotes: [],
          },
          {
            slug: "backend-developer",
            title: "Backend Developer",
            id: "cjv23r7c6017r0733vl5w4ols",
            company: {
              name: "Crystallize",
              slug: "crystallize",
              logoUrl: null,
            },
            cities: [
              {
                name: "Skien",
                id: "cjv23q1qe017c07336cc8txg9",
              },
            ],
            countries: [],
            remotes: [],
          },
          {
            slug: "software-engineer-graphql",
            title: "Software Engineer - GraphQL",
            id: "cjv1fmae101kx07227d781vr1",
            company: {
              name: "Twitter",
              slug: "twitter",
              logoUrl: null,
            },
            cities: [
              {
                name: "San Francisco",
                id: "cjtu8et7j001a0824jwrtf4d1",
              },
            ],
            countries: [],
            remotes: [],
          },
          {
            slug: "engineering-manager-consumer-api",
            title: "Engineering Manager - Consumer API",
            id: "cjv1fij8g01js072259ysjdwm",
            company: {
              name: "Twitter",
              slug: "twitter",
              logoUrl: null,
            },
            cities: [
              {
                name: "San Francisco",
                id: "cjtu8et7j001a0824jwrtf4d1",
              },
            ],
            countries: [],
            remotes: [],
          },
          {
            slug: "backend-engineer-tweetdeck",
            title: "Backend Engineer (TweetDeck)",
            id: "cjv1eyvy201g807227723ohsa",
            company: {
              name: "Twitter",
              slug: "twitter",
              logoUrl: null,
            },
            cities: [
              {
                name: "London",
                id: "cjuvb18ta016k0735v17ip42k",
              },
            ],
            countries: [],
            remotes: [],
          },
          {
            slug: "backend-software-engineer",
            title: "Backend Software Engineer",
            id: "cjv1bu5ws00wk0722s5i7p32u",
            company: {
              name: "The New York Times",
              slug: "the-new-york-times",
              logoUrl: null,
            },
            cities: [
              {
                name: "New York",
                id: "cjuvfhu5j02jb0735aodq6u2q",
              },
            ],
            countries: [],
            remotes: [],
          },
          {
            slug: "engineering-manager",
            title: "Engineering Manager",
            id: "cjv1ad4vu00pn07227suaso7q",
            company: {
              name: "The New York Times",
              slug: "the-new-york-times",
              logoUrl: null,
            },
            cities: [
              {
                name: "New York",
                id: "cjuvfhu5j02jb0735aodq6u2q",
              },
            ],
            countries: [],
            remotes: [],
          },
          {
            slug: "technical-product-manager-graphql-platforms",
            title: "Technical Product Manager, GraphQL Platforms",
            id: "cjv1a7jzr00nz072208jtyil3",
            company: {
              name: "The New York Times",
              slug: "the-new-york-times",
              logoUrl: null,
            },
            cities: [
              {
                name: "New York",
                id: "cjuvfhu5j02jb0735aodq6u2q",
              },
            ],
            countries: [],
            remotes: [],
          },
          {
            slug: "web-engineer",
            title: "Web Engineer",
            id: "cjv19z8e800lu0722qzvn4ynv",
            company: {
              name: "The New York Times",
              slug: "the-new-york-times",
              logoUrl: null,
            },
            cities: [
              {
                name: "New York",
                id: "cjuvfhu5j02jb0735aodq6u2q",
              },
            ],
            countries: [],
            remotes: [],
          },
          {
            slug: "platform-engineer",
            title: "Platform Engineer",
            id: "cjuvpgnxt03si0735lewc2ixb",
            company: {
              name: "Bustle Digital Group",
              slug: "bustle-digital-group",
              logoUrl: null,
            },
            cities: [
              {
                name: "New York",
                id: "cjuvfhu5j02jb0735aodq6u2q",
              },
            ],
            countries: [],
            remotes: [],
          },
          {
            slug: "frontend-engineer",
            title: "Frontend Engineer",
            id: "cjuvo4tcn03h207350gilussi",
            company: {
              name: "Verve",
              slug: "verve",
              logoUrl: "https://cdn.filestackcontent.com/NNdRDpnS96rSnGmgMbVc",
            },
            cities: [
              {
                name: "London",
                id: "cjuvb18ta016k0735v17ip42k",
              },
            ],
            countries: [],
            remotes: [],
          },
          {
            slug: "senior-frontend-engineer",
            title: "Senior Frontend Engineer",
            id: "cjuvo26eu03g407350guu2gee",
            company: {
              name: "Verve",
              slug: "verve",
              logoUrl: "https://cdn.filestackcontent.com/NNdRDpnS96rSnGmgMbVc",
            },
            cities: [
              {
                name: "London",
                id: "cjuvb18ta016k0735v17ip42k",
              },
            ],
            countries: [],
            remotes: [],
          },
          {
            slug: "senior-backend-engineer",
            title: "Senior Backend Engineer",
            id: "cjuvnyqqf03f10735p43xo5a0",
            company: {
              name: "Verve",
              slug: "verve",
              logoUrl: "https://cdn.filestackcontent.com/NNdRDpnS96rSnGmgMbVc",
            },
            cities: [
              {
                name: "London",
                id: "cjuvb18ta016k0735v17ip42k",
              },
            ],
            countries: [],
            remotes: [],
          },
          {
            slug: "backend-engineer",
            title: "Backend Engineer",
            id: "cjuvnvgsb03df0735p7ixb5k6",
            company: {
              name: "Verve",
              slug: "verve",
              logoUrl: "https://cdn.filestackcontent.com/NNdRDpnS96rSnGmgMbVc",
            },
            cities: [
              {
                name: "London",
                id: "cjuvb18ta016k0735v17ip42k",
              },
            ],
            countries: [],
            remotes: [],
          },
          {
            slug: "react-engineer",
            title: "React Engineer",
            id: "cjuvney9q03b30735uzbz7cvb",
            company: {
              name: "Verbling",
              slug: "verbling",
              logoUrl: "https://cdn.filestackcontent.com/P5eTt5G6RR6Uw22MfQJN",
            },
            cities: [
              {
                name: "San Francisco",
                id: "cjtu8et7j001a0824jwrtf4d1",
              },
            ],
            countries: [],
            remotes: [],
          },
          {
            slug: "lead-frontend-developer",
            title: "Lead Frontend Developer (m/f/d)",
            id: "cjuvmzut4032n0735ytyq3ztv",
            company: {
              name: "GraphCMS",
              slug: "graphcms",
              logoUrl: "https://cdn.filestackcontent.com/BYkRZSYSK8I3oJO7JxIQ",
            },
            cities: [
              {
                name: "Berlin",
                id: "cjuv51m3s00fc0735xosrvscp",
              },
              {
                name: "Giessen",
                id: "cjuvmwj8n031u0735whyra0k7",
              },
            ],
            countries: [],
            remotes: [],
          },
          {
            slug: "full-stack-developer",
            title: "Full-stack Developer",
            id: "cjuvg9w2202yt0735as732bqx",
            company: {
              name: "Hasura",
              slug: "hasura",
              logoUrl: "https://cdn.filestackcontent.com/jVqepq9oQHqyAg7M9wCk",
            },
            cities: [
              {
                name: "Bangalore",
                id: "cjuvg37ud02vo07358iro8ny5",
              },
            ],
            countries: [],
            remotes: [],
          },
          {
            slug: "senior-haskell-engineer",
            title: "Senior Haskell Engineer",
            id: "cjuvg4w1g02wk0735x798yok6",
            company: {
              name: "Hasura",
              slug: "hasura",
              logoUrl: "https://cdn.filestackcontent.com/jVqepq9oQHqyAg7M9wCk",
            },
            cities: [
              {
                name: "Bangalore",
                id: "cjuvg37ud02vo07358iro8ny5",
              },
            ],
            countries: [],
            remotes: [
              {
                type: "remote",
              },
            ],
          },
          {
            slug: "senior-full-stack-engineer-project-community",
            title: "Senior Full Stack Engineer, Project Community",
            id: "cjuvfpm4n02mf07356tkie8yc",
            company: {
              name: "Kickstarter",
              slug: "kickstarter",
              logoUrl: "https://cdn.filestackcontent.com/S0S9aOuTEawBwuhJx5hg",
            },
            cities: [
              {
                name: "New York",
                id: "cjuvfhu5j02jb0735aodq6u2q",
              },
            ],
            countries: [],
            remotes: [],
          },
          {
            slug: "senior-software-engineer-api",
            title: "Senior Software Engineer, API",
            id: "cjuvfm26d02lb07350v12c2d6",
            company: {
              name: "Kickstarter",
              slug: "kickstarter",
              logoUrl: "https://cdn.filestackcontent.com/S0S9aOuTEawBwuhJx5hg",
            },
            cities: [
              {
                name: "New York",
                id: "cjuvfhu5j02jb0735aodq6u2q",
              },
            ],
            countries: [
              {
                name: "United States",
              },
            ],
            remotes: [],
          },
          {
            slug: "front-end-engineer",
            title: "Front End Engineer",
            id: "cjuvfio1402jo0735ydkqxs3s",
            company: {
              name: "Kickstarter",
              slug: "kickstarter",
              logoUrl: "https://cdn.filestackcontent.com/S0S9aOuTEawBwuhJx5hg",
            },
            cities: [
              {
                name: "New York",
                id: "cjuvfhu5j02jb0735aodq6u2q",
              },
            ],
            countries: [
              {
                name: "United States",
              },
            ],
            remotes: [],
          },
          {
            slug: "future-senior-software-engineer",
            title: "Future Senior Software Engineer",
            id: "cjuvezoh002gb07350tvhvgnr",
            company: {
              name: "Formidable",
              slug: "formidable",
              logoUrl: "https://cdn.filestackcontent.com/xdLJDGEBRkCqgDiDWoeL",
            },
            cities: [
              {
                name: "London",
                id: "cjuvb18ta016k0735v17ip42k",
              },
            ],
            countries: [
              {
                name: "United Kingdom",
              },
            ],
            remotes: [],
          },
          {
            slug: "cross-stack-react-engineer",
            title: "Cross-Stack React Engineer",
            id: "cjuveovrz02cb0735ondjwe1e",
            company: {
              name: "Formidable",
              slug: "formidable",
              logoUrl: "https://cdn.filestackcontent.com/xdLJDGEBRkCqgDiDWoeL",
            },
            cities: [
              {
                name: "London",
                id: "cjuvb18ta016k0735v17ip42k",
              },
            ],
            countries: [
              {
                name: "United Kingdom",
              },
            ],
            remotes: [],
          },
          {
            slug: "full-stack-javascript-engineer",
            title: "Full-Stack JavaScript Engineer",
            id: "cjuve6b2g02360735bpjdhabq",
            company: {
              name: "Formidable",
              slug: "formidable",
              logoUrl: "https://cdn.filestackcontent.com/xdLJDGEBRkCqgDiDWoeL",
            },
            cities: [
              {
                name: "Miami",
                id: "cjuve1lud022s0735wt1wle83",
              },
              {
                name: "Toronto",
                id: "cjuvem1eu02bg0735scbh2o5v",
              },
            ],
            countries: [
              {
                name: "United States",
              },
            ],
            remotes: [],
          },
          {
            slug: "full-stack-developer-w-elixir-experience",
            title: "Full Stack Developer W/ Elixir Experience",
            id: "cjuvcje8s01f407350cwe653y",
            company: {
              name: "ProKeep",
              slug: "prokeep",
              logoUrl: null,
            },
            cities: [],
            countries: [],
            remotes: [
              {
                type: "remote",
              },
            ],
          },
          {
            slug: "react-react-native-developer",
            title: "React/React Native Developer",
            id: "cjuvb97og01a80735dbsl7fpk",
            company: {
              name: "Mixcloud",
              slug: "mixcloud",
              logoUrl: "https://cdn.filestackcontent.com/XeZED8N9QAG5BBxdyyL1",
            },
            cities: [
              {
                name: "London",
                id: "cjuvb18ta016k0735v17ip42k",
              },
              {
                name: "Cambridge",
                id: "cjuvb2ym5017t0735ahxc3q48",
              },
            ],
            countries: [
              {
                name: "United Kingdom",
              },
            ],
            remotes: [],
          },
          {
            slug: "python-django-developer",
            title: "Python / Django Developer",
            id: "cjuvb571b018607351syq4e73",
            company: {
              name: "Mixcloud",
              slug: "mixcloud",
              logoUrl: "https://cdn.filestackcontent.com/XeZED8N9QAG5BBxdyyL1",
            },
            cities: [
              {
                name: "London",
                id: "cjuvb18ta016k0735v17ip42k",
              },
              {
                name: "Cambridge",
                id: "cjuvb2ym5017t0735ahxc3q48",
              },
            ],
            countries: [
              {
                name: "United Kingdom",
              },
            ],
            remotes: [],
          },
          {
            slug: "open-source-engineer",
            title: "Open Source Engineer",
            id: "cjuvandvo01430735nf44pwl0",
            company: {
              name: "Apollo",
              slug: "apollo",
              logoUrl: "https://cdn.filestackcontent.com/uRGQ5QfTT8mforGeyUS5",
            },
            cities: [
              {
                name: "San Francisco",
                id: "cjtu8et7j001a0824jwrtf4d1",
              },
            ],
            countries: [
              {
                name: "United States",
              },
            ],
            remotes: [
              {
                type: "remote",
              },
            ],
          },
          {
            slug: "mobile-engineer",
            title: "Mobile Engineer",
            id: "cjuvajnzp012z0735zsyq8lr1",
            company: {
              name: "Apollo",
              slug: "apollo",
              logoUrl: "https://cdn.filestackcontent.com/uRGQ5QfTT8mforGeyUS5",
            },
            cities: [
              {
                name: "San Francisco",
                id: "cjtu8et7j001a0824jwrtf4d1",
              },
            ],
            countries: [
              {
                name: "United States",
              },
            ],
            remotes: [
              {
                type: "remote",
              },
            ],
          },
          {
            slug: "backend-software-engineer",
            title: "Backend Software Engineer",
            id: "cjuvaeyue010k0735f0icx2jr",
            company: {
              name: "Apollo",
              slug: "apollo",
              logoUrl: "https://cdn.filestackcontent.com/uRGQ5QfTT8mforGeyUS5",
            },
            cities: [
              {
                name: "San Francisco",
                id: "cjtu8et7j001a0824jwrtf4d1",
              },
            ],
            countries: [
              {
                name: "United States",
              },
            ],
            remotes: [
              {
                type: "remote",
              },
            ],
          },
          {
            slug: "apollo-solutions-architect",
            title: "Apollo Solutions Architect",
            id: "cjuvabaje00zb0735qcabqza8",
            company: {
              name: "Apollo",
              slug: "apollo",
              logoUrl: "https://cdn.filestackcontent.com/uRGQ5QfTT8mforGeyUS5",
            },
            cities: [
              {
                name: "San Francisco",
                id: "cjtu8et7j001a0824jwrtf4d1",
              },
            ],
            countries: [
              {
                name: "United States",
              },
            ],
            remotes: [
              {
                type: "remote",
              },
            ],
          },
          {
            slug: "javascript-engineer",
            title: "JavaScript Engineer",
            id: "cjuv7gyjp00p90735ylvalfcw",
            company: {
              name: "Prisma",
              slug: "prisma",
              logoUrl: "https://cdn.filestackcontent.com/dZHmLkPRTFObRrqHsD7A",
            },
            cities: [
              {
                name: "Berlin",
                id: "cjuv51m3s00fc0735xosrvscp",
              },
            ],
            countries: [
              {
                name: "Germany",
              },
            ],
            remotes: [],
          },
          {
            slug: "engineering-manager",
            title: "Engineering Manager",
            id: "cjuv67iby00m7073524m7c01j",
            company: {
              name: "Prisma",
              slug: "prisma",
              logoUrl: "https://cdn.filestackcontent.com/dZHmLkPRTFObRrqHsD7A",
            },
            cities: [
              {
                name: "Berlin",
                id: "cjuv51m3s00fc0735xosrvscp",
              },
            ],
            countries: [
              {
                name: "Germany",
              },
            ],
            remotes: [],
          },
          {
            slug: "developer-support-engineer",
            title: "Developer Support Engineer",
            id: "cjuv5x5je00k70735fzuc3sis",
            company: {
              name: "Prisma",
              slug: "prisma",
              logoUrl: "https://cdn.filestackcontent.com/dZHmLkPRTFObRrqHsD7A",
            },
            cities: [
              {
                name: "Berlin",
                id: "cjuv51m3s00fc0735xosrvscp",
              },
            ],
            countries: [
              {
                name: "Germany",
              },
            ],
            remotes: [],
          },
          {
            slug: "backend-engineer",
            title: "Backend Engineer",
            id: "cjuv53bpu00fs0735b5ljpmpc",
            company: {
              name: "Prisma",
              slug: "prisma",
              logoUrl: "https://cdn.filestackcontent.com/dZHmLkPRTFObRrqHsD7A",
            },
            cities: [
              {
                name: "Berlin",
                id: "cjuv51m3s00fc0735xosrvscp",
              },
            ],
            countries: [
              {
                name: "Germany",
              },
            ],
            remotes: [],
          },
        ],
      },
    },
  },
];

const errorMock = {
  request: {
    query: JOBS,
  },
  error: new Error("error , failed to fetch"),
};

it("test loading state", () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Home />
    </MockedProvider>
  );
  expect(screen.getByText("Loading...")).toBeInTheDocument();
});

it("renders success", async () => {
  render(
    <BrowserRouter>
      <MockedProvider mocks={jobmocks} addTypename={false}>
        <Home />
      </MockedProvider>
    </BrowserRouter>
  );
  const name = await screen.findByText("Senior Fullstack Engineer - Platform");
  expect(name).toBeInTheDocument();

  {
    jobmocks[0].result.data.jobs.map((item, index) => {
      expect(item).toHaveProperty("cities");
    });
  }
});

it("test error state", async () => {
  render(
    <BrowserRouter>
      <MockedProvider mocks={[errorMock]} addTypename={false}>
        <Home />
      </MockedProvider>
    </BrowserRouter>
  );
  const error = await screen.findByText("error , failed to fetch");
  expect(error).toBeInTheDocument();
});
