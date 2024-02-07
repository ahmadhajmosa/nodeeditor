import type { Node, Edge } from '@xyflow/svelte';

const position = { x: 0, y: 0 };
const edgeType = 'smoothstep';

export const initialNodes: Node[] = [
  {
    id: '1',
    type: 'input',
    data: { label: 'input' , level: 0},
    position
    
  },
  {
    id: '2',
    data: {title: 'How many stackholders?', content: "", outputs: 1, level: 1},
    type: 'selectorNode',

    position
  },
  {
    id: '21',
    data: {title: 'Stackholders 1', subtitle: "", content: "", outputs: 1, level: 2},
    type: 'selectorNode',

    position
  },
  {
    id: '22',
    data: {title: 'Stackholders 2', subtitle: "", content: "", outputs: 1, level: 2},
    type: 'selectorNode',

    position
  },
  {
    id: '23',
    data: {title: 'Stackholders 3', subtitle: "", content: "", outputs: 1, level: 2},
    type: 'selectorNode',

    position
  },
  {
    id: '3',
    data: {title: 'Unified Vision ', content: "To develop a comprehensive professional networking app that facilitates efficient recruitment processes, professional development, and industry networking. The app will provide advanced features for personal branding, content sharing, and job seeking, supported by a robust community of professionals and companies. It aims to be the go-to platform for professional growth and opportunity discovery, ensuring high user engagement and satisfaction.", outputs: 1, level: 3},
    type: 'selectorNode',

    position
  },
  {
    id: '41',
    data: {title: 'Epic 1', subtitle: "Efficient Recruitment Processes", content: "Enhance the recruitment workflow with tools for job posting, candidate searching, filtering, and communication to streamline the hiring process for companies and recruiters.", outputs: 1, level: 4},
    type: 'selectorNode',

    position
  },
  {
    id: '42',
    data: {title: 'Epic 2', subtitle: "Professional Development", content: "Provide a platform for users to engage in professional growth through learning resources, mentorship opportunities, and community-driven knowledge exchange.", outputs: 1, level: 4},
    type: 'selectorNode',

    position
  },
  {
    id: '43',
    data: {title: 'Epic 3', subtitle: "Job Seeking and Opportunity Discovery", content: "Offer a comprehensive job search engine and personalized job recommendations, empowering users to discover and apply to opportunities that match their skills and career aspirations.", outputs: 1, level: 4},
    type: 'selectorNode',

    position
  },
  {
    id: '411',
    data: {title: 'Feature 1', subtitle: "Job Posting and Management Platform", content: "A comprehensive tool for creating, posting, managing, and tracking job listings, with customization options to target specific candidate groups and industries.", outputs: 1, level: 5},
    type: 'selectorNode',

    position
  },
  {
    id: '412',
    data: {title: 'Feature 2', subtitle: "Advanced Candidate Search and Matching", content: "Incorporate advanced search capabilities and AI-driven matching algorithms to connect recruiters with suitable candidates based on detailed criteria like skills, experience, and location.", outputs: 1, level: 5},
    type: 'selectorNode',

    position
  },
  {
    id: '413',
    data: {title: 'Feature 3', subtitle: "Integrated Communication and Scheduling", content: "Seamless in-app messaging, email integration, and interview scheduling tools to facilitate direct communication between recruiters and candidates, enhancing the recruitment experience.", outputs: 1, level: 5},
    type: 'selectorNode',

    position
  },
  {
    id: '414',
    data: {title: 'Feature 4', subtitle: "Recruitment Analytics Dashboard", content: "A dashboard offering insights into key recruitment metrics, helping companies optimize their hiring process through data-driven decision-making.", outputs: 1, level: 5},
    type: 'selectorNode',

    position
  },
  {
    id: '415',
    data: {title: 'Feature 5', subtitle: "Mobile-Optimized Recruitment", content: "Ensure the recruitment platform is fully optimized for mobile users, allowing both recruiters and job seekers to engage with the platform efficiently from anywhere.", outputs: 1, level: 5},
    type: 'selectorNode',

    position
  },
  {
    id: '421',
    data: {title: 'Feature 1', subtitle: "Mentorship Matching", content: "Create a platform where users can find and connect with mentors in their industry, facilitating one-on-one mentorship opportunities for career guidance, skill development, and networking.", outputs: 1, level: 5},
    type: 'selectorNode',

    position
  },
  {
    id: '422',
    data: {title: 'Feature 2', subtitle: "Industry Insights and News", content: "Curate and deliver personalized industry news, articles, and insights directly to users, helping them stay informed about the latest developments, innovations, and opportunities in their field.", outputs: 1, level: 5},
    type: 'selectorNode',

    position
  },
  {
    id: '423',
    data: {title: 'Feature 3', subtitle: "Peer-to-Peer Learning and Collaboration", content: "Encourage community-driven learning by enabling users to share knowledge, participate in discussion forums, and collaborate on projects, fostering a culture of peer-to-peer support and continuous learning.", outputs: 1, level: 5},
    type: 'selectorNode',

    position
  },
  {
    id: '431',
    data: {title: 'Feature 1', subtitle: "Job Posting and Management Platform", content: "A comprehensive tool for creating, posting, managing, and tracking job listings, with customization options to target specific candidate groups and industries.", outputs: 1, level: 5},
    type: 'selectorNode',

    position
  },
  {
    id: '432',
    data: {title: 'Feature 2', subtitle: "Advanced Candidate Search and Matching", content: "Incorporate advanced search capabilities and AI-driven matching algorithms to connect recruiters with suitable candidates based on detailed criteria like skills, experience, and location.", outputs: 1, level: 5},
    type: 'selectorNode',

    position
  },
  {
    id: '433',
    data: {title: 'Feature 3', subtitle: "Integrated Communication and Scheduling", content: "Seamless in-app messaging, email integration, and interview scheduling tools to facilitate direct communication between recruiters and candidates, enhancing the recruitment experience.", outputs: 1, level: 5},
    type: 'selectorNode',

    position
  },
  {
    id: '4111',
    data: {title: 'User Story 1', subtitle: "", content: "As an HR Manager, I want to easily create and customize job postings, so that I can attract the right candidates by highlighting specific job requirements and company culture.", outputs: 1, level: 6},
    type: 'selectorNode',

    position
  },
  {
    id: '4112',
    data: {title: 'User Story 2', subtitle: "", content: "As a Recruiter, I want to target my job postings to specific candidate groups and industries, so that I can increase the likelihood of finding qualified applicants more efficiently.", outputs: 1, level: 6},
    type: 'selectorNode',

    position
  },
  {
    id: '4113',
    data: {title: 'User Story 3', subtitle: "", content: "As a Hiring Team Member, I want to view and track applications for positions I'm hiring for, so that I can stay organized and make informed decisions quickly.", outputs: 1, level: 6},
    type: 'selectorNode',

    position
  },
  {
    id: '4114',
    data: {title: 'User Story 4', subtitle: "", content: "As an HR Analyst, I want to access detailed analytics on our job postings, including views, applications, and engagement, so that I can evaluate and improve our recruitment strategies.", outputs: 1, level: 6},
    type: 'selectorNode',

    position
  },
  {
    id: '4115',
    data: {title: 'User Story 5', subtitle: "", content: "As a Small Business Owner, I want to manage my job listings from a mobile device, so that I can continue recruitment efforts seamlessly while on the go, ensuring no opportunity to connect with potential candidates is missed.", outputs: 1, level: 6},
    type: 'selectorNode',

    position
  },
  {
    id: '4116',
    data: {title: 'User Story 6', subtitle: "", content: "As a Recruitment Agency, I want to have the ability to manage multiple client job postings within a single platform, so that I can streamline my workflow and provide efficient services.", outputs: 1, level: 6},
    type: 'selectorNode',

    position
  },
];

export const initialEdges: Edge[] = [
  { id: 'e12', source: '1', target: '2', type: edgeType, animated: true ,style: `stroke-width: 2; stroke: #ff000;`},
  { id: 'e13', source: '2', target: '21', type: edgeType, animated: true ,style: `stroke-width: 2; stroke: #ff000;`},
  { id: 'e14', source: '2', target: '22', type: edgeType, animated: true ,style: `stroke-width: 2; stroke: #ff000;`},
  { id: 'e15', source: '2', target: '23', type: edgeType, animated: true ,style: `stroke-width: 2; stroke: #ff000;`},
  { id: 'e16', source: '21', target: '3', type: edgeType, animated: true ,style: `stroke-width: 2; stroke: #ff000;`},
  { id: 'e17', source: '22', target: '3', type: edgeType, animated: true ,style: `stroke-width: 2; stroke: #ff000;`},
  { id: 'e18', source: '23', target: '3', type: edgeType, animated: true , style: `stroke-width:2; stroke: #ff000;`},
  { id: 'e19', source: '3', target: '41', type: edgeType, animated: true , style: `stroke-width:2; stroke: #ff000;`},
  { id: 'e20', source: '3', target: '42', type: edgeType, animated: true , style: `stroke-width:2; stroke: #ff000;`},
  { id: 'e21', source: '3', target: '43', type: edgeType, animated: true ,style: `stroke-width: 2; stroke: #ff000;`},
  { id: 'e22', source: '41', target: '411', type: edgeType, animated: true ,style:  `stroke-width: 2; stroke: #ff000;`},
  { id: 'e23', source: '41', target: '412', type: edgeType, animated: true ,style:  `stroke-width: 2; stroke: #ff000;`},
  { id: 'e24', source: '41', target: '413', type: edgeType, animated: true ,style:  `stroke-width: 2; stroke: #ff000;`},
  { id: 'e25', source: '41', target: '414', type: edgeType, animated: true ,style:  `stroke-width: 2; stroke: #ff000;`},
  { id: 'e26', source: '42', target: '421', type: edgeType, animated: true ,style:  `stroke-width: 2; stroke: #ff000;`},
  { id: 'e27', source: '42', target: '422', type: edgeType, animated: true ,style:  `stroke-width: 2; stroke: #ff000;`},
  { id: 'e28', source: '42', target: '423', type: edgeType, animated: true ,style:  `stroke-width: 2; stroke: #ff000;`},
   { id: 'e31', source: '41', target: '415', type: edgeType, animated: true ,style:  `stroke-width: 2; stroke: #ff000;`},
   { id: 'e32', source: '43', target: '431', type: edgeType, animated: true ,style:  `stroke-width: 2; stroke: #ff000;`},
   { id: 'e33', source: '43', target: '432', type: edgeType, animated: true ,style:  `stroke-width: 2; stroke: #ff000;`},
   { id: 'e34', source: '43', target: '433', type: edgeType, animated: true ,style:  `stroke-width: 2; stroke: #ff000;`},
   { id: 's1', source: '411', target: '4111', type: edgeType, animated: true ,style:  `stroke-width: 2; stroke: #ff000;`},
   { id: 's2', source: '411', target: '4112', type: edgeType, animated: true ,style:  `stroke-width: 2; stroke: #ff000;`},
   { id: 's3', source: '411', target: '4113', type: edgeType, animated: true ,style:  `stroke-width: 2; stroke: #ff000;`},
   { id: 's4', source: '411', target: '4114', type: edgeType, animated: true ,style:  `stroke-width: 2; stroke: #ff000;`},
   { id: 's5', source: '411', target: '4115', type: edgeType, animated: true ,style:  `stroke-width: 2; stroke: #ff000;`},
   { id: 's6', source: '411', target: '4116', type: edgeType, animated: true ,style:  `stroke-width: 2; stroke: #ff000;`},


];

