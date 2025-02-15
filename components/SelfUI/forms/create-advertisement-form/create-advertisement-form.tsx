'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { SubmitButton } from '../../buttons/submit-button';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select';
import { useState } from 'react';
const formSchema = z.object({
  title: z
    .string()
    .min(2, {
      message: 'Title must be at least 2 characters.',
    })
    .max(150, { message: 'Title must be less or equal to 150 characters.' }),
  description: z
    .string()
    .min(50, {
      message: 'Description must be at least 50 characters.',
    })
    .max(1000, { message: 'Description must be less or equal to 1000 characters.' }),
  type: z.string().min(1, {
    message: 'Please select a type.',
  }),
  images: z.array(z.string().url()).nonempty({
    message: 'Please upload at least one image.',
  }),
});

export function CreateAdvertisementForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
      type: '',
      images: [],
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  //   function handleImageUpload(event: React.ChangeEvent<HTMLInputElement>) {
  //     const files = event.target.files;
  //     if (files) {
  //       const fileArray = Array.from(files).map((file) => URL.createObjectURL(file));
  //       form.setValue('images', fileArray);
  //     }
  //   }
  const [isChosen, setIsChosen] = useState(false);
  return (
    <div className="">
      <section></section>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input
                    className="border-2 border-[#363636] bg-[#1e1e1e] text-white placeholder:text-slate-600 focus-visible:ring-0 focus-visible:ring-offset-0"
                    placeholder="Three rooms flat..."
                    {...field}
                  />
                </FormControl>
                <FormDescription>This is the title of your advertisement.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input
                    className="border-2 border-[#363636] bg-[#1e1e1e] text-white placeholder:text-slate-600 focus-visible:ring-0 focus-visible:ring-offset-0"
                    placeholder="Describe your property..."
                    {...field}
                  />
                </FormControl>
                <FormDescription>This is the description of your property.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type</FormLabel>
                <Select
                  onValueChange={() => {
                    field.onChange();
                    setIsChosen(true);
                  }}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger
                      className={`${isChosen ? 'text-white' : 'text-slate-600'} text-md border-2 border-[#363636] bg-[#1e1e1e] focus:border-[#363636] focus:ring-0 focus:ring-offset-0`}
                    >
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="border-2 border-[#363636] bg-[#1e1e1e] text-white drop-shadow-md">
                    <SelectItem className="focus:bg-[#393939] focus:text-[#cccccc]" value="Rent">
                      Rent
                    </SelectItem>
                    <SelectItem className="focus:bg-[#393939] focus:text-[#cccccc]" value="Sell">
                      Sell
                    </SelectItem>
                  </SelectContent>
                </Select>

                <FormDescription>Please select the type of your advertisement.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* <FormField
          control={form.control}
          name="images"
          render={() => (
            <FormItem>
              <FormLabel>Images</FormLabel>
              <FormControl>
                <input type="file" multiple accept="image/*" onChange={handleImageUpload} />
              </FormControl>
              <FormDescription>Upload images of your property.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        /> */}
          <SubmitButton>Create</SubmitButton>
        </form>
      </Form>
    </div>
  );
}
