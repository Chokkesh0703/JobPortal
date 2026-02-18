import Hero from "@/components/features/homepage/Hero";
import JobFeed from "@/components/features/homepage/JobFeed";
import OurPartner from "@/components/features/homepage/OurPartner";
import Container from "@/components/ui/Container";

export default async function Home() {
  return (
    <div className="">
      <Hero />
      <section>
        <Container>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold">Latest Opportunities</h2>
          </div>
          <JobFeed />
        </Container>
      </section>
      <OurPartner/>
    </div>
  );
}
