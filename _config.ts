import lume from "lume/mod.ts";
import slugify_urls from "lume/plugins/slugify_urls.ts";

const site = lume({
    src: "./src"
});

site.use(slugify_urls());

export default site;
