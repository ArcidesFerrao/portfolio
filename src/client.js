import sanityClient from "@sanity/client";

export default sanityClient({
    projectId: "s02ox3zo",
    dataset: "production",
    useCdn: true,
  }) ;

