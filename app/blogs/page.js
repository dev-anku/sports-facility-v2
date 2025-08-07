import BlogCard from '@/components/BlogCard';
import { blogs } from '@/public/constants';

const HeroSection = () => {
    return(
        <section className="bg-gradient-to-r from-[#153576] via-[#153576] to-[#213e58] text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold font-montserrat tracking-tight mb-2">
            Blogs
          </h1>
        </div>
      </section>
    )
}
const BlogCardSection = () => {
    return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}
      </div>
    </div>
  );
}
export default function Page() {
  return(
      <>
      <HeroSection />
      <BlogCardSection />
      </>
  )

}
