export const testQuery = `
  *[_type == "test"]{
    title,
  }
`;

export const mainQuery = `
  *[_type == "info"][0]{
    "name": { "title": name },
    "profession": { "title": profession },
    "profile": { "image": image.asset->url },
    "aboutCards": aboutCards[]->{
      title,
      type,
      description,
      "images": tools[]->{
        "image": image.asset->url,
        altText
      }
    },
    "filters": *[_type == "filter"]{
      title,
      "image": image.asset->url
    },
    "projectCards": projectCards[]->{
      description,
      "image": imagePrimary.asset->url + "?fm=webp",
      "projectTag": {
        "title": title,
        "image": filter->image.asset->url
      },
      slug
    },
    "experienceCards": experienceCards[]->{
      title,
      company,
      dates,
      description
    },
    "educationCards": educationCards[]->{
      title,
      university,
      dates
    },
    "contactBox": {
      "contactsCards": contacts[]->{
        "link": link->{
          title,
          url
        },
        "image": image.asset->url
      }
    },
    "quote": { "title": quote },
  }
`;
