import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY =
  defineQuery(`*[_type=="startup" && defined(slug.current) && !defined($search) || title match $search || category match $search || author->name match $search ]{
  _id,
    title,
    slug,
    _createdAt,
    author->{_id,name,image,bio},
    views,
    description,
    category,
    image
}`);
//کوئری زدن ب همراه سرچ از طریق سرچ بار صفحه اصلی
export const STARTUP_BY_ID_QUERY =
  defineQuery(`*[_type=="startup" &&  _id==$id][0]{
  _id,
    title,
    slug,
    _createdAt,
    author->{_id,name,image,bio,username},
    views,
    description,
    category,
    image,
    pitch,
}`);
export const STARTUP_VIEW_QUERY =
  defineQuery(`*[_type=="startup" &&  _id==$id][0]{
  _id,views}`);

export const AUTHOR_BY_GITHUB_ID_QUERY =
  defineQuery(`*[_type=="author" &&  id==$id][0]{
  _id,
    id,
    name,
    username,
   email,
   image,
   bio
}
    `);
export const AUTHOR_BY_ID_QUERY =
  defineQuery(`*[_type=="author" &&  email==$email][0]{
  _id,
    id,
    name,
    username,
   email,
   image,
   bio
}
    `);

export const STARTUPS_BY_AUTHOR_QUERY =
  defineQuery(`*[_type=="startup" && author._ref==$id ]{
  _id,
    title,
    slug,
    _createdAt,
    author->{_id,name,image,bio},
    views,
    description,
    category,
    image
}`);
