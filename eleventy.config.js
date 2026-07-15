const { HtmlBasePlugin } = require("@11ty/eleventy");
const markdownItLinkAttributes = require("markdown-it-link-attributes");
const yaml = require("js-yaml");

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
module.exports = function (eleventyConfig) {
    // Enable YAML data files
    eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));
    eleventyConfig.addDataExtension("yml", (contents) => yaml.load(contents));

    // Automatically transpile and correctly prefix all absolute URLs to map cleanly to gh-pages subdirectories
    eleventyConfig.addPlugin(HtmlBasePlugin);

    // Configure Markdown behaviour to open external links in new tabs
    eleventyConfig.amendLibrary("md", mdLib => {
        mdLib.use(markdownItLinkAttributes, {
            pattern: /^https?:/,
            attrs: {
                target: "_blank",
                rel: "noopener noreferrer"
            }
        });
    });

    // Passthrough copy for images and static assets
    eleventyConfig.addPassthroughCopy({ "src/assets/images": "assets/images" });

    // List of news items sorted by date descending for pagination
    eleventyConfig.addFilter("sortRecent", (posts) => {
        return [...posts].sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
        });
    });

    // Custom filter to get a clean section ID from page data or fileSlug
    eleventyConfig.addFilter("sectionSlug", (section) => {
        if (section.data && section.data.slug) {
            return section.data.slug;
        }
        if (section.data && section.data.id) {
            return section.data.id;
        }
        const fileSlug = section.fileSlug || "";
        return fileSlug.replace(/^\d+-/, "");
    });


    // Custom collection to ensure sections are ordered correctly
    eleventyConfig.addCollection("sections", function (collectionApi) {
        return collectionApi.getFilteredByGlob("content/*.md").sort(function (a, b) {
            return Math.sign((a.data.order || 0) - (b.data.order || 0));
        });
    });

    return {
        pathPrefix: "/drum-www/",
        dir: {
            input: ".", // Top level is input because content is at /content
            includes: "src/_includes",
            data: "src/_data",
            output: "_site"
        },
        // markdown files, nunjucks files, html files are processed
        templateFormats: ["md", "njk", "html"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk"
    };
};
