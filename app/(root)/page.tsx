import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";
import { StartupCardType } from "@/lib/types";
import image1 from "@/public/images/jest_logo.png";
export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const posts: StartupCardType[] = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "Mohammad" },
      _id: 1,
      description: "This is a description",
      image: image1,
      category: "Robots",
      title: "We Robots",
    },
  ];
  return (
    <>
      <section className="pink_container text-white ">
        {" "}
        <h1 className="heading">
          Pitch Your Startup,
          <br />
          Connect with Enterpreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas,Vote on pitches,and Get Noticed in Virtual Competitions.
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}*` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType) => {
              return <StartupCard post={post} key={post._id} />;
            })
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
