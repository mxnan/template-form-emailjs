"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Textarea } from "./ui/textarea";

export const formSchema = z.object({
  name: z
    .string()
    .min(4, { message: "Username must be at least 4 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  subject: z
    .string()
    .min(4, { message: "Subject must be at least 4 characters." }),
  message: z
    .string()
    .min(4, { message: "Message must be at least 4 characters." }),
});
const FormSection = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  //form ref for emailjs
  const formRef = useRef<HTMLFormElement | null>(null);

  // 2. Define a submit handler.
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await sendEmail(values);
      alert("Email sent successfully");
      form.reset();
    } catch (error) {
      alert("Error sending email");
      console.log(error);
    }
  };

  // 3. Define the email sending function
  const sendEmail = (values: z.infer<typeof formSchema>) => {
    return emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      formRef.current!,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    );
  };

  return (
    <>
      <Form {...form}>
        <form
          ref={formRef}
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-5 "
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="John doe" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="markzuckerberg@facebook.com" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input placeholder="Proposal" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Hey, I have an idea ?. Lets leak user data to brands. Cover it up for me in best possible way"
                    rows={4}
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button variant={"outline"} type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
};

export default FormSection;
