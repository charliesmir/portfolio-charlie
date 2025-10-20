import { toPlainText } from "@portabletext/react";
import { sanityClient } from "./clients/sanity";
import { mainQuery, projectQuery, testQuery } from "./queries";
import { SanityMain, SanityProjectPage, Test } from "./types";

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
      getSanityProjectPage: async (
        slug: string,
      ): Promise<SanityProjectPage | null> => {
        try {
          const result = await sanityClient.fetch(projectQuery, {
            slug,
          });
          const highlightsString = toPlainText(result.flag?.highlights);

          const formatted: SanityProjectPage = {
            ...result,
            flag: {
              ...result.flag,
              highlights: highlightsString,
            },
          };
          console.log(formatted);
          console.log("I am getProjectPage from Sanity");
          return formatted;
        } catch (error) {
          console.error("Failed to fetch project Sanity:", error);
          return null;
        }
      },
    };
  },
};
