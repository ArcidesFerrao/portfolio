import { createClient } from "@sanity/client";

export default createClient({
    projectId: "s02ox3zo",
    dataset: "production",
    useCdn: true,
  }) ;

