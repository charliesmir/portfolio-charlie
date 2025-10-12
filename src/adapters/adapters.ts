import { sanityClient } from "./clients/sanity";
import { mainQuery, testQuery } from "./queries";
import { SanityMain, Test } from "./types";

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
      getSanityMain: async (): Promise<SanityMain | null> => {
        try {
          const result = (await sanityClient.fetch(mainQuery)) as SanityMain;
          console.log(result);
          console.log("I am getMain from Sanity");
          return result;
        } catch (error) {
          console.error("Failed to fetch main Sanity:", error);
          return null;
        }
      },
    };
  },
};
