// declare module 'insane';

declare module "insane" {
  interface InsaneFilterToken {
    tag: string;
    attrs: Record<string, unknown>;
  }

  interface InsaneOptions {
    allowedAttributes: Record<string, string[]>;
    allowedClasses: Record<string, string[]>;
    allowedSchemes: string[];
    allowedTags: string[];
    filter?: (token: InsaneFilterToken) => boolean;
    transformText?: (text: string) => string;
  }

  export default function (
    html: string,
    options?: InsaneOptions,
    strict?: boolean,
  ): string;
}
