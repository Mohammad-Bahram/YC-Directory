import SearchForm from "@/components/SearchForm";
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  // const posts = await client
  const params = { search: query || null };
  const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY ,params});

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
            posts.map((post: StartupTypeCard) => {
              return <StartupCard post={post} key={post._id} />;
            })
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>

      <SanityLive />
    </>
  );
}
