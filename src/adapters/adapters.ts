import { sanityClient } from "./clients/sanity";
import { testQuery } from "./queries";
import { Test } from "./types";

export const adapters = {
  cms: () => {
    return {
      getTests: async (): Promise<Test[]> => {
        try {
          const result = (await sanityClient.fetch(testQuery)) as Test[];
          console.log(result);
          console.log("I am getTests from Sanity");
          return result;
        } catch (error) {
          console.error("Failed to fetch tests:", error);
          return [];
        }
      },
    };
  },
};
