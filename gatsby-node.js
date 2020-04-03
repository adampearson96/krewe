const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark` && node.fileAbsolutePath.includes(`/processes/`)) {
    const slug = createFilePath({ node, getNode, basePath: `processes` })
    createNodeField({
      node,
      name: `slug`,
      value: `process${slug}`,
    })
  }
  if (node.internal.type === `MarkdownRemark` && node.fileAbsolutePath.includes(`/work/`)) {
    const slug = createFilePath({ node, getNode, basePath: `work` })
    createNodeField({
      node,
      name: `slug`,
      value: `work${slug}`,
    })
  }
  if (node.internal.type === `MarkdownRemark` && node.fileAbsolutePath.includes(`/portfolio/`)) {
    const slug = createFilePath({ node, getNode, basePath: `portfolio` })
    createNodeField({
      node,
      name: `slug`,
      value: `portfolio${slug}`,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      row1image: File @fileByRelativePath
      row2image: File @fileByRelativePath
      row3image: File @fileByRelativePath
      row4image: File @fileByRelativePath
      row5image: File @fileByRelativePath
      row6image: File @fileByRelativePath
      row7image: File @fileByRelativePath
      row8image: File @fileByRelativePath
      heroimage: File @fileByRelativePath
    }
  `
  createTypes(typeDefs)
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const processes = await graphql(`
    query {
      allMarkdownRemark( filter: { fileAbsolutePath: { regex: "/processes/" }}) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  const work = await graphql(`
    query {
      allMarkdownRemark( filter: { fileAbsolutePath: { regex: "/work/" }}) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  const portfolio = await graphql(`
    query {
      allMarkdownRemark( filter: { fileAbsolutePath: { regex: "/portfolio/" }}) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  processes.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/processTemplate.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
  work.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/workTemplate.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
  portfolio.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/portfolioTemplate.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
}