import React from "react"
import Layout from "../components/Layout"
import { Container } from "../components/Layout/LayoutComponents"
import { SEO } from "../components/SEO/SEO";

const Post = ({ data }) => {

    return (
        <Layout>
            <Container>
                <SEO title={"test"} />
                <p>test</p>
            </Container>
        </Layout>
    )
};

// export const postQuery = graphql`
//     query PostByPath($path: String!) {
//         markdownRemark(frontmatter: { path: { eq: $path } }) {
//             html
//             frontmatter {
//                 date(formatString: "MMMM DD, YYYY")
//                 path
//                 title
//                 tools
//             }
//         }
//     }
// `;

export default Post;
