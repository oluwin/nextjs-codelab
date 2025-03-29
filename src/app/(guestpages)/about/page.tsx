import { Button } from "@/components/button";
import { ClickCounter, ProfileCard, ClientFetch, ClientFetchApi } from "@/features/about";
import FormSample from "@/features/about/components/form-sample";
import ServerFetch from "@/features/about/components/server-data-fetch";

export default function About() {
  return (
    <>
      <h1
        className="flex items-center justify-center 
            hover:bg-[#090321] 
            hover:text-[#fff]
            dark:hover:bg-[#ccc] 
            font-medium 
            text-sm 
            sm:text-base 
            h-15 
            sm:h-12 
            px-4 
            sm:px-5
            sm:w-auto
            font-[family-name:var(--font-geist-sans)]"
      >
        This is an about page
      </h1>
      <div className="flex items-center space-x-1 justify-center space-y-2">
        <Button bgColor="bg-blue-500" label="Click Me!" />
        <Button
          bgColor="bg-yellow-400"
          borderRadius="rounded-full"
          label="Submit"
        />
        <Button bgColor="bg-red-500" borderRadius="rounded-full" label="Save" />
        <Button bgColor="bg-green-600" borderRadius="rounded" label="Proceed" />
      </div>

      <ClickCounter />
      <div className="flex items-center space-x-1 justify-center">
        <ProfileCard
          imageSrc="/images/profile-image-01.jpg"
          name="Erin Lindford"
          title="Product Engineer"
        />
      </div>
      <FormSample />
      <ClientFetchApi />
      <ServerFetch />
      <ClientFetch />
    </>
  );
}
