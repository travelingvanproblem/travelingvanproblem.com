// Rewrites sponsored links so that they contain proper attributes and query parameters
const handler: ExportedHandler = {
  async fetch(request: Request) {
    class SponsoredLinkRewriter {
      query_params: { [key: string]: string };

      constructor(query_params) {
        this.query_params = query_params;
      }

      element(element) {
        const link = element.getAttribute("href");
        if (link) {
          // Tell crawlers that the link is sponsored
          // Source: https://developers.google.com/search/docs/essentials/spam-policies#link-spam
          element.setAttribute("rel", "sponsored");

          // Add the query parameters to the URL
          const url = new URL(link);
          for (const key in this.query_params) {
            url.searchParams.set(key, this.query_params[key]);
          }
          element.setAttribute("href", url.toString());
        }
      }
    }


    // Automatically correct sponsored links. For example 4gsim.es -> 4gsim.es?ref=Onni
    const rewriter = new HTMLRewriter()
      .on('a[href^="https://4gsim.es"]', new SponsoredLinkRewriter({ ref: "Onni" }));

    // TODO: Read this from a ENV variable instead
    const url = new URL(request.url);
    url.hostname = "travelingvanproblem.com"

    const newRequest = new Request(
      url.toString(),
      new Request(request)
    );

    const res = await fetch(newRequest);
    const contentType = res.headers.get("Content-Type");

    // If the response is HTML, it can be transformed with
    // HTMLRewriter -- otherwise, it should pass through
    if (contentType && contentType.startsWith("text/html")) {
      return rewriter.transform(res);
    } else {
      return res;
    }
  },
};

export default handler;
