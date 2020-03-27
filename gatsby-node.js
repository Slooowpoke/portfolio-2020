const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions;

    const projectsTemplate = path.resolve(`src/templates/project.js`);

    const projects = await graphql(`{
        allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, limit: 1000, filter: {fileAbsolutePath: {regex: "/data/projects/*/"}}) {
            edges {
                node {
                    excerpt(pruneLength: 250)
                    html
                    id
                    frontmatter {
                      date
                      path
                      title
                    }
                }
            }
        }
    }`).then(result => {
        if (result.errors) {
            return Promise.reject(result.errors);
        }

        return result.data.allMarkdownRemark.edges.forEach(({ node }) =>
            createPage({
                path: node.frontmatter.path,
                component: projectsTemplate,
            })
        );
    });

    const postsTemplate = path.resolve(`src/templates/post.js`);

    const posts = await graphql(`{
        allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, limit: 1000, filter: {fileAbsolutePath: {regex: "/data/blog/*/"}}) {
            edges {
                node {
                    excerpt(pruneLength: 100)
                    html
                    id
                    frontmatter {
                        date
                        path
                        title
                    }
                }
            }
        }
    }`).then(result => {
        if (result.errors) {
            return Promise.reject(result.errors);
        }

        return result.data.allMarkdownRemark.edges.forEach(({ node }) =>
            createPage({
                path: node.frontmatter.path,
                component: postsTemplate,
            })
        );
    });
};
