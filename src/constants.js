export const routes = [
  { path:"/", component:"Home", name:"Grey Matters" },
  { path:"/search", component:"Search", name:"Search" },
  { path:"/articles", component:"Articles", name:"Articles" },
  { path:"/podcasts", component:"Podcasts", name:"Podcasts" },
  { path:"/videos", component:"Videos", name:"Videos" },
  { path:"/events", component:"Events", name:"Events" },
  { path:"/learningsection", component:"LearningSection", name:"The Basics" },
  { path:"/terms", component:"Terms", name:"Glossary" },
  { path:"/term", component:"Term", name:"Glossary Page" },
  { path:"/store", component:"Store", name:"Store" },
  { path:"/userProfile", component:"UserProfile", name:"Profile" },
  { path:"/settings", component:"Settings", name:"Settings" },
  { path:"/privacyPolicy", component:"PrivacyPolicy", name:"Privacy Policy" },
  { path:"/support", component:"Support", name:"Support" },
];

export const creatorTitles = {
  article: "author",
  podcast: "host",
  video: "producer",
};

export const colors = {
  blue: '#1ba5b8',
  red: '#ff404e',
  darkGrey: '#282828',
  lightGrey: '#BCBEC1',
}

// export const baseURL = 'http://ec2-34-218-235-4.us-west-2.compute.amazonaws.com:8080/api/'; // remote
export const baseURL = 'http://localhost:8080/1.0/'; // local