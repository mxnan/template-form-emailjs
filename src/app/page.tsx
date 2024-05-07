import Footer from "@/components/footer";
import FormSection from "@/components/form";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Link2Icon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <main className="container h-screen flex flex-col justify-between space-y-4">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center lg:flex-row gap-4 ">
        <div className="space-y-8 max-w-2xl mx-auto lg:mb-52 mb-20 lg:ml-6">
          <h1 className="text-5xl font-title">Emailjs Implementation</h1>
          <p className="text-sm font-light">
            Simple template to use emailjs with nextjs and tsx. You will have to
            configure your template style by logging in emailjs website .
          </p>
          <Button variant={"link"} className="flex gap-2 border">
            Read Blog to implement this .? <Link2Icon />
          </Button>
        </div>
        <div className="max-w-2xl mx-auto w-full lg:max-w-lg lg:mr-20">
          <FormSection />
        </div>
      </div>
      <Footer />
    </main>
  );
}
